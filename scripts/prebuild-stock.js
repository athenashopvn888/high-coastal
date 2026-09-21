/**
 * Prebuild script: Fetches live stock data from Apps Script
 * and writes flowers.json + items.json before Next.js builds.
 *
 * This runs automatically via "prebuild" in package.json.
 * If the fetch fails, the existing JSON files are kept as fallback.
 *
 * Source of truth: LC01 ONHAND (`?store=LC01&stock=1`) merged with
 * the master catalog (`?catalog=1`). Combined `?store=LC01` is a
 * slow fallback — it can hang without a long timeout.
 *
 * APPS_SCRIPT_URL may override the public default; it is not required.
 */

const fs = require('fs');
const path = require('path');

const DEFAULT_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbx09_sDal1eMVF1r-hUck4e7oq_XBHEWhGvA79JuhZNQ6P4CdhCas0xE3FfexWQ3hq4/exec';
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_URL;
const USING_ENV_URL = Boolean(process.env.APPS_SCRIPT_URL);
const FLOWERS_PATH = path.join(__dirname, '..', 'app', 'lib', 'flowers.json');
const ITEMS_PATH = path.join(__dirname, '..', 'app', 'lib', 'items.json');
const SNAPSHOT_PATH = path.join(__dirname, '..', 'app', 'lib', 'stock-snapshot.json');
const STOCK_TIMEOUT_MS = 60000;
const CATALOG_TIMEOUT_MS = 60000;
const COMBINED_TIMEOUT_MS = 180000;

async function fetchJson(url, timeoutMs) {
  const started = Date.now();
  const res = await fetch(url, { signal: AbortSignal.timeout(timeoutMs), redirect: 'follow' });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText} (${url})`);
  }
  const data = await res.json();
  console.log(`[prebuild] ${url} in ${Date.now() - started}ms`);
  return data;
}

function hasPositiveQty(stockEntry, weight) {
  return Boolean(stockEntry && stockEntry[weight] && stockEntry[weight] > 0);
}

function applyOnhandToCatalog(catalog, stockData) {
  const stockMap = (stockData && stockData.stock) || {};

  const flowers = [];
  for (const raw of catalog.flowers || []) {
    const flower = { ...raw };
    const sku = String(flower.sku || '').trim();
    const skuStock = stockMap[sku];
    if (!skuStock) continue;

    if (!hasPositiveQty(skuStock, '3g')) flower.price3g = null;
    if (!hasPositiveQty(skuStock, '5g')) flower.price5g = null;
    if (!hasPositiveQty(skuStock, '14g')) flower.price14g = null;
    if (!hasPositiveQty(skuStock, '28g')) flower.price28g = null;

    if (!flower.price3g && !flower.price5g && !flower.price14g && !flower.price28g) continue;
    flowers.push(flower);
  }

  const items = [];
  for (const raw of catalog.items || []) {
    const item = { ...raw };
    const sku = String(item.sku || '').trim();
    const parts = sku.split(',').map((part) => part.trim().replace(/\.0$/, '')).filter(Boolean);
    if (!parts.some((part) => stockMap[part])) continue;
    items.push(item);
  }

  return {
    flowers,
    items,
    storeCode: stockData.storeCode || 'LC01',
    stockDate: stockData.date || null,
    source: 'stock+catalog',
  };
}

function postProcess(data) {
  const SALE_RE = /\bSALE\b/i;
  const ON_SALE_RE = /ON\s*SALE/i;
  function hasSalePrice(f) {
    return !!(
      (f.price3g && f.price3g.sale !== null) ||
      (f.price5g && f.price5g.sale !== null) ||
      (f.price14g && f.price14g.sale !== null) ||
      (f.price28g && f.price28g.sale !== null)
    );
  }
  function cleanName(name) {
    return String(name || '')
      .replace(/\s*\(?\s*AAA\+?\s*ON\s*SALE\s*\)?\s*$/i, '')
      .replace(/\s*\(?\s*AAA\+?\s*SALE!?\s*\)?\s*$/i, '')
      .replace(/\s*\bSALE!?\s*$/i, '')
      .replace(/\s*\bON\s*SALE\s*$/i, '')
      .trim();
  }

  let saleFixed = 0;
  for (const f of data.flowers) {
    if (!f.isSale) {
      if (SALE_RE.test(f.name) || ON_SALE_RE.test(f.name) || hasSalePrice(f)) {
        f.isSale = true;
        saleFixed++;
      }
    }
    f.name = cleanName(f.name);
  }
  if (saleFixed > 0) console.log(`[prebuild] Fixed ${saleFixed} sale flags from names`);

  let itemsFixed = 0;
  for (const it of data.items) {
    if (typeof it.price === 'string' && it.price.includes('[object')) {
      it.price = '';
      itemsFixed++;
    }
  }
  if (itemsFixed > 0) console.log(`[prebuild] Fixed ${itemsFixed} mangled item prices`);

  return data;
}

function writeOutputs(data, sourceUrl) {
  fs.writeFileSync(FLOWERS_PATH, JSON.stringify(data.flowers, null, 2) + '\n', 'utf-8');
  console.log(`[prebuild] flowers.json updated: ${data.flowers.length} products`);

  const tiers = {};
  data.flowers.forEach((f) => { tiers[f.tier] = (tiers[f.tier] || 0) + 1; });
  Object.entries(tiers).forEach(([t, c]) => console.log(`  ${t}: ${c}`));

  fs.writeFileSync(ITEMS_PATH, JSON.stringify(data.items, null, 2) + '\n', 'utf-8');
  console.log(`[prebuild] items.json updated: ${data.items.length} products`);

  const cats = {};
  data.items.forEach((i) => { cats[i.category] = (cats[i.category] || 0) + 1; });
  Object.entries(cats).sort().forEach(([c, n]) => console.log(`  ${c}: ${n}`));

  const snapshot = {
    storeCode: data.storeCode || 'LC01',
    stockDate: data.stockDate || null,
    flowerCount: data.flowers.length,
    itemCount: data.items.length,
    tiers,
    categories: cats,
    source: sourceUrl,
    usedEnvUrl: USING_ENV_URL,
    writtenAt: new Date().toISOString(),
  };
  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2) + '\n', 'utf-8');
  console.log('[prebuild] stock-snapshot.json written');
  console.log(`[prebuild] Stock date: ${data.stockDate || 'unknown'}`);
}

async function loadFromStockAndCatalog() {
  const stockUrl = `${APPS_SCRIPT_URL}?store=LC01&stock=1`;
  const catalogUrl = `${APPS_SCRIPT_URL}?store=LC01&catalog=1`;
  const stockData = await fetchJson(stockUrl, STOCK_TIMEOUT_MS);
  if (!stockData || !stockData.stock) {
    throw new Error('Invalid stock=1 response: missing stock map');
  }
  const catalog = await fetchJson(catalogUrl, CATALOG_TIMEOUT_MS);
  if (!Array.isArray(catalog.flowers) || !Array.isArray(catalog.items)) {
    throw new Error('Invalid catalog=1 response: missing flowers or items');
  }
  const merged = applyOnhandToCatalog(catalog, stockData);
  merged.sourceUrl = `${stockUrl} + ${catalogUrl}`;
  return merged;
}

async function loadFromCombined() {
  const url = `${APPS_SCRIPT_URL}?store=LC01`;
  const data = await fetchJson(url, COMBINED_TIMEOUT_MS);
  if (!Array.isArray(data.flowers) || !Array.isArray(data.items)) {
    throw new Error('Invalid combined response: missing flowers or items');
  }
  data.sourceUrl = url;
  return data;
}

async function main() {
  if (!APPS_SCRIPT_URL) {
    console.log('[prebuild] No APPS_SCRIPT_URL set — using existing static JSON files');
    return;
  }

  console.log(
    `[prebuild] Fetching LC01 ONHAND from Apps Script (${USING_ENV_URL ? 'APPS_SCRIPT_URL' : 'public default'})...`
  );

  try {
    let data;
    try {
      data = await loadFromStockAndCatalog();
      console.log('[prebuild] Merged catalog with stock=1 ONHAND');
    } catch (err) {
      console.warn(`[prebuild] stock+catalog path failed: ${err.message}`);
      console.warn('[prebuild] Falling back to combined ?store=LC01 (may be slow)');
      data = await loadFromCombined();
    }

    postProcess(data);
    writeOutputs(data, data.sourceUrl);
    console.log('[prebuild] Done!');
  } catch (err) {
    console.warn(`[prebuild] Live fetch failed: ${err.message}`);
    console.warn('[prebuild] Keeping existing JSON files as fallback');
  }
}

main();

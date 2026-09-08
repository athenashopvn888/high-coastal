import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const tvPage = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");

test("top-tier TV labels render 6g while AA remains 5g", () => {
  assert.match(tvPage, /const isTop3 = \["EXOTIC","PREMIUM","AAA\+"\]\.includes\(tier\)/);
  assert.equal((tvPage.match(/\{isTop3 \? "6g" : "5g"\}/g) || []).length, 2);
  assert.match(tvPage, /isAA \? <span className=\{styles\.headerDeal\}>\$20 5g AA<\/span>/);
  assert.doesNotMatch(tvPage, /<span>5g <b>\$\{hi\.price5g/);
  assert.doesNotMatch(tvPage, /<span className=\{styles\.pLab\}>5g<\/span>/);
});


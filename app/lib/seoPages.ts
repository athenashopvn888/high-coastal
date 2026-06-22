/* ── Geo-targeted SEO landing pages for Mississauga/Weston keywords ── */

export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "york-weed-dispensary",
    title: "Mississauga Weed Dispensary — High Coastal Cannabis | 24 Hours | Lakeshore Rd W & Clarkson Rd N",
    metaDescription: "High Coastal Cannabis is Mississauga's #1 24-hour weed dispensary at 1720 Lakeshore Rd W near Weston. 200+ strains, THC up to 39%, edibles, vapes, concentrates & more. Walk in anytime.",
    h1: "Mississauga Weed Dispensary — High Coastal Cannabis",
    icon: "✨",
    heroTagline: "Premium Cannabis on Lakeshore Rd W & Clarkson Rd N · Open 24 Hours · Walk-In Welcome",
    banner: "/banners/welcome_banner.webp",
    sections: [
      {
        heading: "Mississauga's Premier Cannabis Destination",
        body: "High Coastal Cannabis is a premium cannabis dispensary located at 1720 Lakeshore Rd W in the heart of Mississauga's vibrant Lakeshore Rd W & Clarkson Rd N area. We carry over 200 hand-picked cannabis strains across five quality tiers — from ultra-rare Exotic genetics with THC up to 39% to affordable Budget flower starting at just $3/g. Whether you're a connoisseur seeking the rarest strains or a daily smoker looking for reliable value, High Coastal Cannabis has the perfect flower for you. We're proud to be one of Mississauga's most trusted dispensaries, serving our community 24 hours a day, 7 days a week.",
      },
      {
        heading: "Five Tiers of Quality Cannabis — Transparent Pricing",
        body: "Our unique tier system ensures transparent pricing and quality grading so you always know what you're getting. Exotic ($10-$12/g) features top-shelf, ultra-rare genetics with THC levels reaching 35-39% — these are the strains connoisseurs travel across Mississauga to find. Premium ($7-$10/g) offers connoisseur-grade strains at THC 32-34%, balancing quality and value. AAA+ ($5-$6/g) delivers heavy hitters at THC 30-32% — our most popular tier for experienced users. AA ($4/g) provides quality daily drivers at THC 27-29%, perfect for regular consumption. Budget ($3/g) offers value ounces from $40 without sacrificing reliability. Every tier is lab-tested, properly cured, and freshly rotated.",
      },
      {
        heading: "Beyond Flower — Edibles, Vapes, Concentrates & More",
        body: "High Coastal Cannabis is more than just a flower shop. We carry a comprehensive selection of cannabis edibles (gummies, chocolates, baked goods), vape pens and disposable vapes, concentrates (shatter, wax, hash, diamonds, live resin), pre-rolled joints, native cigarettes, rolling papers, and accessories. Our live digital menu at highcoastalcannabis.com updates in real time so you always know exactly what's in stock before you make the trip.",
      },
      {
        heading: "Open 24 Hours on Lakeshore Rd W & Clarkson Rd N",
        body: "Unlike most dispensaries that close at midnight, High Coastal Cannabis is open around the clock — 24 hours a day, 7 days a week, 365 days a year. Whether you're finishing a late shift, heading out for the night, or need something at 3 AM, our doors are always open. We're centrally located at 1720 Lakeshore Rd W, near major transit bus routes, close to major highways and central stations. Free street parking is available near the dispensary.",
      },
      {
        heading: "Clear Bundle Pricing on Flower",
        body: "Every purchase at High Coastal Cannabis comes with our bundle offers. Our 3g bundle offer applies to every single tier — the 3g total is shown clearly before purchase. Our top three tiers (Exotic, Premium, and AAA+) also qualify for 6g bundle pricing for 6g total. Combined with our already competitive pricing, High Coastal Cannabis offers some of the best cannabis value in Mississauga, Toronto, and the surrounding area.",
      },
      {
        heading: "Serving Mississauga, Toronto & Mississauga",
        body: "High Coastal Cannabis proudly serves customers from across the Greater Toronto Area. Whether you're coming from Weston, Mount Dennis, North Mississauga, Etobicoke, Mississauga, Brampton, or downtown Toronto, we welcome you. Our 24-hour operation means you can visit on your own schedule. Call us at (289) 401-7550 or visit us at 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5.",
      },
    ],
    faqs: [
      { q: "Where is High Coastal Cannabis located?", a: "We are located at 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5 — in the heart of Lakeshore Rd W & Clarkson Rd N area — one of Mississauga's most accessible areas. We're near major transit bus routes and close to major highways." },
      { q: "What are the hours for High Coastal Cannabis?", a: "We are open 24 hours a day, 7 days a week, 365 days a year. Walk in anytime — no appointment needed. Whether it's 2 PM or 2 AM, our staff is here to help." },
      { q: "What cannabis products does High Coastal Cannabis carry?", a: "We carry 200+ strains of cannabis flower across 5 quality tiers (Exotic, Premium, AAA+, AA, Budget), plus edibles, vapes, concentrates, pre-rolls, native cigarettes, and accessories. Our menu updates in real time online." },
      { q: "What is the cheapest weed at High Coastal Cannabis?", a: "Our Budget tier starts at $3/g with value ounces from $40. Our AA tier is $4/g. Every tier includes our 3g bundle pricing, making our prices even more competitive." },
      { q: "Does High Coastal Cannabis have a live menu?", a: "Yes! Our online menu at highcoastalcannabis.com updates in real time with current stock, prices, and availability. You can see exactly what we have before you visit." },
      { q: "What makes High Coastal Cannabis different from other Mississauga dispensaries?", a: "Three things set us apart: (1) We're open 24 hours, (2) our transparent 5-tier pricing system means no confusing markups, and (3) every purchase includes our 3g bundle pricing. Plus we carry one of Mississauga's largest selections with over 200 strains." },
      { q: "Can I check stock before visiting?", a: "Absolutely. Visit highcoastalcannabis.com to see our live menu. All flower, edibles, vapes, and accessories are listed with real-time stock status, THC levels, and pricing." },
      { q: "Is there parking near High Coastal Cannabis?", a: "Yes. Free street parking is available nearby and surrounding residential streets. We're also easily accessible via local transit." },
    ],
  },

  {
    slug: "cheap-weed-york",
    title: "Cheap Weed Mississauga — Budget Cannabis Deals From $3/g | High Coastal Cannabis",
    metaDescription: "Looking for cheap weed in Mississauga? High Coastal Cannabis has budget flower from $3/g, ounces from $40, and 3g bundle pricing. Open 24 hours at 1720 Lakeshore Rd W.",
    h1: "Cheap Weed Mississauga — Budget Cannabis Deals",
    icon: "💰",
    heroTagline: "Budget Flower From $3/g · Ounces From $40 · Always Open",
    banner: "",
    sections: [
      {
        heading: "Mississauga's Best Prices on Quality Cannabis",
        body: "Looking for cheap weed in Mississauga without sacrificing quality? High Coastal Cannabis offers some of the most competitive cannabis prices in the city. Our Budget tier starts at just $3/g with value ounces from $40. Our AA tier ($4/g) and AAA+ tier ($5-$6/g) also deliver incredible value with THC levels from 27% to 32%. We believe great cannabis shouldn't break the bank, and our transparent tier-based pricing ensures you always get exactly what you pay for — no hidden markups, no gimmicks.",
      },
      {
        heading: "Flower Bundle Pricing",
        body: "Every tier at High Coastal Cannabis comes with our signature 3g bundle pricing — so the total grams and price are shown before purchase. Our top three tiers (Exotic, Premium, AAA+) also offer 6g bundle pricing for 6g total. When you combine our already low prices with these bundle offers, High Coastal Cannabis delivers the best cannabis value in Mississauga. A $15 AAA+ 3g purchase actually gets you 3g of flower — that's just $5/g for THC 30%+ cannabis.",
      },
      {
        heading: "Budget Doesn't Mean Low Quality",
        body: "At High Coastal Cannabis, cheap doesn't mean low quality. Every strain in our Budget and AA tiers delivers reliable potency (THC 24-29%) from trusted Canadian growers. We rotate our inventory frequently to ensure freshness and maintain our quality standards across all price points. Our Budget strains are perfect for rolling, sessions, or anyone who prefers value over premium aesthetics. Our AA tier is a step up — solid daily drivers with consistent effects.",
      },
      {
        heading: "Compare Our Prices",
        body: "Budget: $3/g — $40/oz. AA: $4/g — $90/oz. AAA+: $5-$6/g — $100/oz. Premium: $7-$10/g. Exotic: $10-$12/g. Every tier includes 3g bundle pricing. Top tiers include 6g bundle pricing. These are some of the lowest prices you'll find at any dispensary in Mississauga, Lakeshore Rd W & Clarkson Rd N and surrounding areas.",
      },
    ],
    faqs: [
      { q: "What is the cheapest weed at High Coastal Cannabis?", a: "Our Budget tier starts at $3/g with value ounces from $40. These are quality, properly-cured strains at Mississauga's most competitive prices." },
      { q: "Do you have ounce deals?", a: "Yes! Budget ounces from $40, AA ounces from $90, AAA+ ounces from $100. All with excellent quality, freshness guaranteed, and 3g bundle pricing on top." },
      { q: "Is cheap weed still good quality?", a: "Absolutely. Our Budget flower delivers THC 24-27% from trusted Canadian growers. We never sell old, dry, or improperly stored flower. Every product meets our quality standards regardless of price point." },
      { q: "Where can I buy cheap weed in Mississauga?", a: "High Coastal Cannabis at 1720 Lakeshore Rd W, Mississauga. Open 24 hours a day, walk in anytime, no appointment needed. We're in the heart of Lakeshore Rd W & Clarkson Rd N area." },
      { q: "What bundle pricing do you offer?", a: "Every tier includes 3g bundle pricing (3g total). Our Exotic, Premium, and AAA+ tiers also offer 6g bundle pricing (6g total). These bundle offers apply on every visit." },
      { q: "Do you offer bulk discounts?", a: "Yes — our ounce pricing is deeply discounted compared to per-gram rates. Budget ounces are $40, AA ounces $90, and AAA+ ounces $100. The more you buy, the more you save." },
    ],
  },

  {
    slug: "native-cigarettes-york",
    title: "Native Cigarettes Mississauga — Discount Tobacco | High Coastal Cannabis",
    metaDescription: "Buy native cigarettes in Mississauga at High Coastal Cannabis. Wide selection of premium and value tobacco brands at the best prices. 1720 Lakeshore Rd W, Lakeshore Rd W & Clarkson Rd N. Open 24/7.",
    h1: "Native Cigarettes Mississauga — Discount Tobacco",
    icon: "🏷️",
    heroTagline: "Premium & Value Brands · Best Prices in Mississauga · Open 24 Hours",
    banner: "",
    sections: [
      {
        heading: "Mississauga's Best Selection of Native Cigarettes",
        body: "High Coastal Cannabis carries one of the widest selections of native cigarettes in Mississauga. Located at 1720 Lakeshore Rd W near Lakeshore Rd W & Clarkson Rd N, we stock a comprehensive range of both premium and value native cigarette brands at competitive prices. Whether you prefer full-flavour, light, menthol, or specialty blends, our tobacco selection has something for every smoker. We're proud to be one of the few stores in Mississauga that combines a full cannabis dispensary with a comprehensive tobacco counter — one stop for everything you need.",
      },
      {
        heading: "Why Mississauga Smokers Choose High Coastal Cannabis",
        body: "There are three reasons Mississauga smokers keep coming back to High Coastal Cannabis for their cigarettes. First, our prices are among the lowest in the Lakeshore Rd W & Clarkson Rd N area — we buy in volume and pass the savings to our customers. Second, our selection is comprehensive — we carry brands and varieties that many other shops simply don't stock. Third, we're open 24 hours a day, 7 days a week. Need cigarettes at midnight? 3 AM? We're here. No other tobacco shop in Mississauga offers this level of convenience.",
      },
      {
        heading: "Convenient Lakeshore Rd W & Clarkson Rd N Location",
        body: "Our shop at 1720 Lakeshore Rd W is centrally located in Mississauga — easily accessible from Weston Rd, Lawrence Ave W, Highway 401, and all major Peel/Toronto routes. Whether you're walking, driving, or taking the bus, High Coastal Cannabis is easy to reach. Free evening street parking is available nearby. We serve customers from across Mississauga including Lakeshore Rd W & Clarkson Rd N and surrounding areas.",
      },
      {
        heading: "More Than Just Cigarettes",
        body: "While you're picking up your cigarettes, browse our full cannabis menu — over 200 strains of flower, plus edibles, vapes, concentrates, pre-rolls, and accessories. Many of our customers appreciate the convenience of getting their cigarettes and cannabis in one trip. Our knowledgeable staff can help you with both sides of our inventory.",
      },
    ],
    faqs: [
      { q: "Does High Coastal Cannabis sell native cigarettes?", a: "Yes! We carry one of the widest selections of native cigarettes in Mississauga, including premium brands, value brands, full-flavour, light, and menthol varieties." },
      { q: "What cigarette brands do you carry?", a: "We stock a comprehensive range of native cigarette brands in multiple varieties. Our selection rotates regularly. Visit us at 1720 Lakeshore Rd W to see our full current inventory and pricing." },
      { q: "Where can I buy cheap cigarettes in Mississauga?", a: "High Coastal Cannabis at 1720 Lakeshore Rd W offers some of the best cigarette prices in Mississauga's Weston area. We're open 24 hours so you can shop on your own schedule." },
      { q: "Are you open late for cigarette purchases?", a: "We're open 24 hours a day, 7 days a week. Whether you need cigarettes at noon or 3 AM, our doors are always open." },
      { q: "Can I buy cigarettes and cannabis at High Coastal Cannabis?", a: "Absolutely. High Coastal Cannabis is both a fully-licensed cannabis dispensary and a tobacco retailer. Many customers appreciate the convenience of one stop for both products." },
      { q: "Where is High Coastal Cannabis located?", a: "1720 Lakeshore Rd W, Mississauga, ON L5J 1J5 — in Lakeshore Rd W & Clarkson Rd N area. Near transit routes with free street parking available." },
    ],
  },

  {
    slug: "weed-store-near-mississauga",
    title: "Weed Store Near Mississauga — High Coastal Cannabis",
    metaDescription: "Looking for a weed store near Mississauga? High Coastal Cannabis at 1720 Lakeshore Rd W, Mississauga is just minutes away via major highways. 200+ strains, open 24 hours.",
    h1: "Weed Store Near Mississauga — High Coastal Cannabis",
    icon: "🚗",
    heroTagline: "Just Minutes From Mississauga via major highways · Open 24 Hours",
    banner: "/banners/welcome_banner.webp",
    sections: [
      {
        heading: "The Closest Quality Dispensary to Mississauga",
        body: "High Coastal Cannabis is one of the closest premium cannabis dispensaries to Mississauga. Located at 1720 Lakeshore Rd W in Mississauga — just minutes up Highway 410 and East on 401 — we're the easiest dispensary to reach when you're coming from the surrounding area. Whether you're driving from Mississauga and surrounding areas, High Coastal Cannabis is the fastest, most convenient option for top-tier cannabis.",
      },
      {
        heading: "Why Make the Drive to High Coastal Cannabis?",
        body: "High Coastal Cannabis offers a wider selection and more competitive pricing than most local Peel options. You'll find over 200 strains across five quality tiers — from ultra-rare Exotic genetics (THC 35-39%) to affordable Budget flower at just $3/g. Our 3g bundle pricing applies to every tier, and our top three tiers offer 6g bundle pricing. With prices starting at $3/g and ounces from $40, High Coastal Cannabis delivers value that's worth the short drive from Mississauga.",
      },
      {
        heading: "Open 24 Hours — Perfect for Late Night Visits",
        body: "Unlike most dispensaries in Peel Region with limited hours, High Coastal Cannabis is open 24 hours a day, 7 days a week. Whether you're heading home from a late shift in Mississauga, going out for the night, or just need a quick pickup after hours, you can stop by High Coastal Cannabis anytime. Early morning, late night, weekends, holidays — we're always here.",
      },
      {
        heading: "Directions From Mississauga",
        body: "We are located centrally at 1720 Lakeshore Rd W, Mississauga, making it easy to drive or take transit from Mississauga. Total drive time is just a few minutes. Free street parking is available.",
      },
      {
        heading: "Full Menu — Cannabis, Edibles, Vapes & More",
        body: "When you make the trip up to Mississauga, make it count. High Coastal Cannabis carries a full selection including 200+ flower strains, edibles, vape pens, disposable vapes, concentrates (shatter, wax, hash, live resin), pre-rolled joints, native cigarettes, and accessories. Check our live online menu at highcoastalcannabis.com before you visit to see exactly what's in stock.",
      },
    ],
    faqs: [
      { q: "How far is High Coastal Cannabis from Mississauga?", a: "We're located at 1720 Lakeshore Rd W in Mississauga — just a 15-20 minute drive from central Mississauga via Highway 401 East." },
      { q: "Is it worth driving from Mississauga for cannabis?", a: "Absolutely. High Coastal Cannabis offers 200+ strains, prices starting at $3/g, and bundle pricing options like 3g total that make the short drive incredibly worthwhile." },
      { q: "Is High Coastal Cannabis open late?", a: "We're open 24 hours a day, 7 days a week. Whether you're driving up from Mississauga at noon or midnight, we're open and ready to serve you." },
      { q: "What's the cheapest weed near Mississauga?", a: "High Coastal Cannabis has Budget flower from $3/g and value ounces from $40. With our 3g bundle pricing, these are some of the best prices in the Greater Toronto Area." },
      { q: "Is there parking at High Coastal Cannabis?", a: "Yes. Free evening street parking is available near the store and surrounding residential streets." },
      { q: "Can I take transit from Mississauga to High Coastal Cannabis?", a: "Yes! Local transit connects directly subway and bus routes that will drop you off right near our location." },
      { q: "Do you carry products besides cannabis?", a: "Yes — we also carry native cigarettes, rolling papers, grinders, and other accessories. Many Mississauga customers appreciate the one-stop convenience." },
    ],
  },

  {
    slug: "dispensary-near-me-york",
    title: "Cannabis Dispensary Near Me Mississauga — High Coastal Cannabis | Open 24 Hours",
    metaDescription: "Find a cannabis dispensary near you in Mississauga. High Coastal Cannabis at 1720 Lakeshore Rd W has 200+ strains from $3/g. Open 24 hours. Walk in anytime, no appointment needed.",
    h1: "Cannabis Dispensary Near Me — Mississauga",
    icon: "🗺️",
    heroTagline: "Walk-In Welcome · Open 24 Hours · 200+ Strains In Stock",
    banner: "/banners/welcome_banner.webp",
    sections: [
      {
        heading: "Find Premium Cannabis Near You in Mississauga",
        body: "If you're searching for a cannabis dispensary near you in Mississauga, High Coastal Cannabis is conveniently located at 1720 Lakeshore Rd W — in the heart of Lakeshore Rd W & Clarkson Rd N area. We serve customers from across Mississauga, North Mississauga, Etobicoke, Mississauga, and Toronto.",
      },
      {
        heading: "Why Choose High Coastal Cannabis Over Other Dispensaries?",
        body: "What sets High Coastal Cannabis apart from other Mississauga dispensaries is our combination of selection, pricing, and convenience. We carry 200+ strains across five clear quality tiers — no confusing markups, no inconsistent pricing. Our 3g bundle pricing applies to every tier, every purchase. And unlike most dispensaries that close at midnight, we're open 24 hours a day, 7 days a week. Whether you need flower, edibles, vapes, or concentrates at any hour, High Coastal Cannabis is here.",
      },
      {
        heading: "Areas We Serve in Greater Toronto Area",
        body: "High Coastal Cannabis is centrally located and easily accessible from anywhere in Mississauga and West Toronto. We regularly serve customers from: Lakeshore Rd W & Clarkson Rd N and surrounding areas including Mississauga, Mississauga, and nearby neighbourhoods."
      },
    ],
    faqs: [
      { q: "Where is the closest dispensary in Lakeshore Rd W & Clarkson Rd N?", a: "High Coastal Cannabis at 1720 Lakeshore Rd W is conveniently located in the heart of Mississauga — easily accessible from Lakeshore Rd W & Clarkson Rd N." },
      { q: "Is High Coastal Cannabis walk-in friendly?", a: "Absolutely! No appointment needed. Walk in anytime — we're open 24 hours a day, 7 days a week. Our friendly staff is always ready to help." },
      { q: "What neighbourhoods does High Coastal Cannabis serve?", a: "We serve all of Mississauga and surrounding areas, including Lakeshore Rd W & Clarkson Rd N and surrounding areas." },
      { q: "How do I check what's in stock?", a: "Visit highcoastalcannabis.com for our live menu with real-time stock, pricing, and THC levels for all products." },
      { q: "Do you sell edibles and vapes?", a: "Yes! In addition to 200+ flower strains, we carry edibles (gummies, chocolates), vape pens, disposable vapes, concentrates, pre-rolls, and accessories." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

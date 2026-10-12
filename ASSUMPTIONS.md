0. Decisions already made
Topic	Decision
Business	DJ Fruits and Dry Fruits Exports
Reference	kaybeeexports.com (structure and credibility style only, see section 2)
Website type	Showcase and lead generation. Not e-commerce: no cart, checkout, payments, accounts or product prices
Visitors	Local Indian farmers and dealers who want to sell their produce to us. Mostly on mid-range or low-end Android phones, on 4G or weaker networks, many reading in Marathi
Primary action	Send a "sell to us" enquiry on WhatsApp (form with email as backup)
Sections	Hero, Farmers, Products, Origin, Contact Us, Blog
Languages	English everywhere, with a Marathi translation option at the top of every page
Look	Premium, in a green shade that suits an agriculture business. Palette and type are mine to propose (section 4)
Motion	Level 3 of 5: one scroll-scrubbed background video plus purposeful element animation (section 6)

Defaults I applied where unanswered (change them in docs/ASSUMPTIONS.md if I object):

Stack changed to Astro (static output, deployed on Vercel) instead of plain Vite, because a bilingual site with a blog needs clean routing, Markdown content and fast pages on weak phones. GSAP and ScrollTrigger for animation. One Vercel serverless function (api/rates.js) for mandi rates. No other backend, no database.
No Three.js and no 3D in this build. The visitors are on low-end phones and I have no model files. The signature moment is the scroll-scrubbed video and the "weighing slip" (section 5.2).
The earlier "today's mandi rates" and "best rate for farmers" ideas are folded into the Farmers section, since you asked for both earlier but did not list them as separate sections.
Images: generate products, produce, landscapes and hands-only process scenes. Real photos are required for the team, premises, collection centre and certificates (section 7).
Hosting on Vercel, content kept in simple files, no CMS.
1. Business facts (fill from content/site.json; never invent)

Create content/site.json with these keys and TODO: confirm as the value for everything not given. Every page reads from this file.

json
{
  "name": "DJ Fruits and Dry Fruits Exports",
  "year_started": "TODO: confirm",
  "owner_names": "TODO: confirm",
  "address": "TODO: confirm",
  "collection_centres": ["TODO: confirm (village/taluka/district)"],
  "phone": "TODO: confirm",
  "whatsapp": "TODO: confirm (international format, no +)",
  "email": "TODO: confirm",
  "hours": "TODO: confirm",
  "products_we_buy": ["Grapes", "Almonds", "Dates", "TODO: confirm others (pomegranate, banana, cashew, raisins...)"],
  "districts_we_source_from": ["TODO: confirm"],
  "pickup_from_farm": "TODO: confirm yes/no and radius",
  "payment_terms": "TODO: confirm (for example same day or within X days)",
  "minimum_lot": "TODO: confirm",
  "certifications": [],
  "social": {}
}

Rules: no invented years, tonnage, farmer counts, certifications, awards, testimonials, prices, rates or promises. A claim without a confirmed value shows as a visible TODO in development and is hidden in the production build.

2. Reference analysis: what to take from kaybeeexports.com and what not to

What the reference does well (take the idea, not the content):

It builds credibility with specific facts (year founded, named founder, scale) in the first scroll. Do the same with our real facts from site.json, only once confirmed.
Clear product grouping with a short paragraph each, and one clear "Read more" path.
A section that explains the business model in a few labelled steps, and a "why us" grid of short, concrete points.
A floating WhatsApp button and a footer with grouped links, plus privacy and terms pages.
Simple, conventional navigation that a first-time visitor understands immediately.

What not to do:

Do not copy its text, images, logo, structure word-for-word, or icon set. Write original content.
Do not use its generic template look (WordPress icon grids, stock imagery, repeated identical blocks). Our design must be clearly different and more distinctive (section 4).
It targets overseas buyers. Our visitors are local sellers. Speak to growers and dealers in plain, respectful language, not to importers.
3. Information architecture
Home is one scrolling page with sections in this order: Hero, Farmers, Products, Origin, Contact. Blog is a separate section of the site: /blog (list) and /blog/{slug} (post).
Header (all pages): language toggle (top), logo, links Home, Farmers, Products, Origin, Blog, Contact, and a "Sell to us" button that opens WhatsApp with a prefilled message. On phones the links collapse into a menu; the language toggle and the "Sell to us" button stay visible outside the menu.
URLs: English at /, Marathi at /mr/ (same structure, for example /mr/blog/{slug}). Switching language keeps the current page and section.
Floating WhatsApp button (bottom right, not covering content or the form, with a text label in the active language).
Footer: link groups, address and phone from site.json, privacy policy, terms of use (both languages), small copyright line with the current year.
Also: 404 page, robots.txt, sitemap.xml (with hreflang alternates), favicon and apple-touch-icon, Open Graph and Twitter images (1200 x 630) per page.
4. Design direction

Concept: "the honest scale." Sellers in a mandi care about three things: honest weighing, a fair rate, and getting paid. The identity uses the visual language of the weighing scale, the weighing slip (pavti), crate stencils and a rubber stamp, executed with restraint so it feels premium, not rustic. Spend the boldness in two places only: the hero video moment and the weighing slip widget. Everything else stays quiet and disciplined.

Palette (propose these, then critique them against the tells below; adjust only with a reason):

Canopy green 
#0F3B2C (dark sections, headings on light)
Leaf green 
#2E7D4F (primary buttons, links)
Sprout 
#8FBF6A (small highlights, "fresh" indicators, used sparingly)
Mist 
#EEF3EA (light surface, a green-tinted white, not cream)
Dry-fruit amber 
#B9852B (only for rate values, the stamp and one accent; not a gradient)
Ink 
#13241C (body text)

No decorative gradients, no glow. Every text and background pair meets WCAG AA, including against the brightest video frame.

Type (must render Marathi well):

English display: a serif with character such as Gloock; English body and UI: Hanken Grotesk, tabular numerals for all weights and rates.
Marathi (Devanagari): Tiro Devanagari Marathi for headings and Noto Sans Devanagari for body. Load the Devanagari fonts only on /mr/ pages (separate @font-face with unicode-range, font-display: swap, subset to Devanagari and Latin). Body text at least 17px in Marathi with a taller line height (about 1.7), because Devanagari needs more vertical space.
Test the pairing with a rendered page in both languages before finalising; swap a family if either language looks weak. Sentence case, line length under about 70 characters, one real type scale.

Shape and surface: documents and slips have sharp corners and a thin ink border with a faint paper grain (inline SVG noise, under 2 KB). UI controls share one small radius (4px). Depth comes from hard offset shadows on a few raised elements only, never soft grey blurry shadows on everything. Asymmetric layouts on a visible grid, mixed scale, deliberate overlap; not every section centered; no run of identical rounded cards.

Avoid these generic tells: cream background with a serif and terracotta accent, or near-black with one acid accent; identical rounded cards with the same shadow; a tiny ALL-CAPS label above every heading; one word in a headline set in a different colour or italic; "01 / 02 / 03" numbering on non-sequential content; arrows on every button; every section fading up on entry and every card lifting on hover; glossy floating produce with splashes or sparkles; generic slogans.

Copy rules (English and Marathi): plain, respectful, active verbs; sentence case; no filler or stacked adjectives; no words like seamless, elevate, curated, tailored, premium experience. Name specific things (crop, grade, taluka, weighing, payment day). Buttons say what happens ("Send my details on WhatsApp"). Marathi must be natural spoken-written Marathi written by a native-level translator, not word-for-word English; flag every Marathi string needs native review in docs/i18n-review.md.

5. Sections
5.1 Hero
Full viewport (100svh), the scroll-scrubbed background video behind (section 6.1) with the shade overlay for contrast.
H1 (one per page), written plainly for the visitor, for example: "We buy fruit and dry fruit directly from growers and dealers." Sub-line states what the visitor does next and what we commit to, using only confirmed facts (for example payment terms from site.json). Two actions: Sell to us (WhatsApp, primary) and See today's rates (scrolls to the rates block in Farmers).
A trust strip under the headline with 3 to 4 confirmed facts (year started, districts covered, payment terms). If none are confirmed yet, hide the strip.
One short intro animation on load (under 1.2 seconds, text only). No auto-looping motion.
5.2 Farmers (the main section; this is where the site earns its keep)

Order of blocks:

How selling to us works. Four steps in a line that draws as you scroll (a real sequence, so numbering is allowed here): Tell us what you have, we quote our rate, we collect or you deliver to our centre, you are paid. Payment terms and pickup details come from site.json; unconfirmed items show TODO in development and are hidden in production.
Today's mandi rates. Real data from Agmarknet on data.gov.in, resource ID 9ef84268d588465aa308a864a43d0070, shown as wholesale min, max and modal prices per market, in ₹ per quintal with a ₹ per kg toggle.
Browser calls /api/rates?state=Maharashtra&market=...&commodity=.... The Vercel function api/rates.js calls the data.gov.in API with the key from process.env.DATA_GOV_API_KEY (I will register a free key). The key never appears in client code or the repo.
First inspect a real response and match the actual field names; do not guess them. Whitelist and validate query parameters. Cache with s-maxage=900, stale-while-revalidate=3600.
Filters: state (default Maharashtra), market (default Pune), crop chips using Marathi and English names (grapes द्राक्षे, almonds बदाम, dates खजूर, pomegranate डाळिंब, and so on).
Label it "Today's mandi rates" with a visible "Last updated {date}" and the source line "Source: Agmarknet, Government of India. Wholesale mandi prices, indicative only." It is daily data, so never call it "live" or "real-time".
If the API fails or has no row, show the last good snapshot from public/data/rates-fallback.json with its date. For crops the mandi data does not cover (dry fruits are thin), show our own entry from public/data/our-rates.json under a different label ("Our reference rate, {date}"). Never mix the two sources in one cell and never invent a number.
The weighing slip (signature widget). A styled slip on paper texture where the visitor picks I am a: Farmer / Dealer, crop, approximate quantity in quintals (slider plus number field), village, taluka, district, and phone. The slip updates live: date, crop, quantity, the mandi reference modal price (if available), and an estimated value at today's mandi price, clearly labelled "Estimate only. Our final rate is confirmed on inspection." Show our own rate only if our-rates.json has a dated number; never compute a premium. Dealers also see lot size, packing and availability date fields. Send my details on WhatsApp opens a prefilled message containing the slip; then a "Received" rubber stamp lands on the slip. Fallback: an email form with the same fields. Large inputs (48px high), numeric keypad (inputmode="numeric") for phone and quantity, one-line privacy note, no account, no payment.
What we promise. 3 to 4 plain statements, only those I confirm in site.json (for example fair weighing, same-day payment, farm pickup). If none are confirmed, omit the block rather than inventing promises. Do not claim "best rate guaranteed" unless I confirm it in writing.
5.3 Products
What we buy and export: Grapes, Almonds, Dates, plus the other confirmed crops from site.json. Not a shop: no prices, no cart.
One featured product larger than the rest and the others in varied sizes (not identical cards). Each product: a generated or real image, the crop's Marathi name, sourcing season (months, confirmed), the grades or sizes we look for (confirmed), packing we accept, and a button "Offer this product" that opens the weighing slip with that crop preselected.
A simple "season chart" row (months as a thin bar per crop) so a farmer can see when we buy. Drawn in SVG, animated once on first view.
5.4 Origin
Where we buy from: districts and villages we source from, from site.json. An interactive SVG map of the sourcing region (use a correctly drawn, open-licensed Maharashtra outline, credit the licence, and verify it is accurate; otherwise use a clean district grid). Tapping a district shows its crops, season and collection centre (if confirmed). Hit targets at least 44px. On phones the map sits above a list that works without the map.
One sentence each on why growing conditions suit each crop only if I supply facts; otherwise leave the sentence as a TODO.
5.5 Contact
WhatsApp as the main route, then phone (tel:), email, address and hours from site.json, and a short contact form (name, phone, I am a farmer or dealer, message) with validation, accessible errors, loading, success and failure states, and a honeypot against spam.
Map embed that loads only after a tap ("Show map") to save data. A "Get directions" link.
Collection centre details (and hours) are a block of their own if confirmed.
5.6 Blog
/blog list: featured post, then a clean list with category filter, reading time and date. /blog/{slug} post page: readable measure, headings, images with captions, "Share on WhatsApp" button, related posts, and Article JSON-LD.
Content as Markdown files with front matter in content/blog/{slug}.en.md and {slug}.mr.md. If a Marathi version is missing, show the English post with a note and still offer the toggle.
Create three draft starter posts (set draft: true so they do not publish until I review them): how to grade and pack grapes before selling to an exporter; how mandi modal prices are reported and how to read them; what to ask a buyer before you agree a rate. Write helpful, factual content with no invented statistics, regulatory claims or residue-limit numbers. Mark every factual statement that needs checking with TODO: verify.
6. Scroll animation

GSAP and ScrollTrigger (npm, pinned to an exact version). Register ScrollTrigger once. In Astro, run animation code in a client script or island and create triggers inside gsap.context(), reverting on page swap.

6.1 Background video scrubbed by scroll
One fixed layer as the first child of <body>: #bg-scrub with position: fixed; inset: 0; z-index: -1; width: 100vw; height: 100lvh; overflow: hidden; pointer-events: none; containing <video id="bgVideo" muted playsinline webkit-playsinline preload="auto" disablepictureinpicture tabindex="-1" poster="..."> (object-fit: cover, no autoplay, no loop) and a shade element (radial vignette plus dark linear gradient) for text contrast. The layer is aria-hidden="true".
html and body have transparent backgrounds; keep a dark green fallback colour on #bg-scrub. All content sits above it (position: relative; z-index: 1). Decide per section whether it is transparent (shows video) or opaque; list your decisions in the report. Where text sits directly over the video add a scrim.
Bind playback to total page progress, only once the duration is known:
js
const video = document.getElementById('bgVideo');
function initScrub() {
  if (!isFinite(video.duration) || video.duration <= 0) return;
  video.pause();
  gsap.fromTo(video, { currentTime: 0 }, {
    currentTime: video.duration, ease: 'none',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 1, invalidateOnRefresh: true }
  });
  ScrollTrigger.refresh();
}
if (video.readyState >= 1) initScrub();
else video.addEventListener('loadedmetadata', initScrub, { once: true });
const unlock = () => video.play().then(() => video.pause()).catch(() => {}); // iOS needs one touch
addEventListener('touchstart', unlock, { once: true, passive: true });
addEventListener('load', () => ScrollTrigger.refresh());
If seeking is jittery, use the eased variant: ScrollTrigger writes a target time and gsap.ticker eases video.currentTime toward it (current += (target - current) * 0.12, written only when the gap exceeds 0.02 s).
Weak-network rule (important for our visitors): load the video only when navigator.connection.saveData is false and effectiveType is 4g (or unknown), and only after the page is idle. Otherwise keep the poster only. prefers-reduced-motion also means poster only. A failed load leaves the poster and the dark green background with no console errors.
Encoding (nearly every frame must be a keyframe): ffmpeg -i source.mp4 -an -vf "scale=1280:-2,fps=30" -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -g 2 -keyint_min 2 -sc_threshold 0 -movflags +faststart bg-scrub.mp4. Make a portrait phone version (crop 9:16, 720 wide, 24 fps, aim for 5 MB or less) and choose the source in JavaScript before loading. Desktop file 10 MB or less, clip length 8 to 12 seconds, one slow consistent motion, no fast cuts.
The video theme: slow, steady, no people, no text; a vineyard row at first light, an almond orchard, a date palm grove, crates being filled (hands only). It must be dark enough and low contrast for white text. If I do not have the file, write 3 video-generator prompts to docs/VIDEO-PROMPTS.md, use the poster as the placeholder, and build so that dropping in public/backgrounds/bg-scrub.mp4 and bg-scrub-m.mp4 needs no code change.
6.2 Element animation (sparingly)

Each animation needs a reason. Allowed: the hero text intro; the "how selling works" line that draws with scroll; counters that count once (only for confirmed numbers); the season-chart bars drawing once; image mask reveals on one or two key images; subtle foreground-only parallax; interactions that answer a user action (slider updating the slip, the stamp landing, map pin selection, language switch). Not allowed: fade-and-slide-up on every section, hover lift on every card, any looping decorative motion.

Rules: animate only transform and opacity; one easing and two durations site-wide; ScrollTrigger.matchMedia to give phones a lighter alternative; kill and refresh triggers on resize and orientation change; prefers-reduced-motion shows final states with no movement. Smooth scrolling (Lenis) on desktop only, synced with ScrollTrigger; native scroll on touch.

7. Image generation

Use whatever image tool exists in this environment (for example Nano Banana). If none, write prompts to docs/IMAGE-PROMPTS.md and use labelled placeholders.

Style bible first, one paragraph reused at the start of every prompt: soft natural daylight, 35mm lens look, true-to-life matte colour, fine grain, green-leaning grade that matches the palette, honest and unstyled composition.
Slots to generate: a hero poster frame (first frame of the video); one image per crop for Products (grapes on the vine, almonds, dates on a palm); a landscape plate for Origin; two process images with hands only (harvest, weighing and sorting); blog covers.
Not allowed: realistic faces of people, fake team or farmer portraits, fake testimonials, fake certificates, documents or logos, text or letters inside images, anything that could pass as proof of our real premises.
Must be real photos (leave a labelled placeholder with a shot list): our collection centre and premises, the owners and team, our weighing scale and vehicles, certificates. If a generated image could be mistaken for documentation of the real business, caption it "Illustrative".
Specs: hero 2400 px wide, content 1600 px wide, WebP (AVIF if supported), hero 200 KB or less, others 120 KB or less, srcset, explicit width and height, lazy loading below the fold, descriptive alt text in both languages.
Keep docs/ASSETS.md: file, section, aspect ratio, prompt, source (generated, real, placeholder), status.
8. Language system (English and Marathi)
Toggle at the very top of every page: "English | मराठी" with the active language marked, large tap targets, keyboard accessible, aria-label in both languages.
Path-based routes (/ and /mr/), <html lang="en"> or <html lang="mr">, hreflang alternates and a canonical URL on every page, translated titles, descriptions and Open Graph tags. Remember the choice in localStorage and, only on the first visit, show a dismissible suggestion banner if the browser language is Marathi. Do not auto-redirect and never redirect crawlers.
All UI text, form labels, error messages, validation messages, the rate board, the weighing slip, the WhatsApp prefilled message and legal pages exist in both languages in src/i18n/en.json and mr.json. Design for text that is 20 to 30 percent longer in Marathi: no fixed-width buttons, no truncation.
Numbers use Western digits in both languages unless I ask for Devanagari numerals. Dates and currency formatted with Intl for en-IN and mr-IN.
Crop names and market names have a mapping file with English and Marathi names.
9. Functionality, performance, accessibility
Forms: client and server validation, accessible labels and errors, loading, success and failure states, honeypot, and a clear "what happens next" message. Submissions go to WhatsApp plus an email endpoint (a form service or serverless function, with secrets only in environment variables).
Performance for weak phones: LCP under 2.5 s on a mid-range Android on 4G, CLS under 0.1, INP under 200 ms, initial JavaScript at most 150 KB gzipped, initial page weight at most 1.2 MB before the video, Lighthouse mobile Performance at least 85. Use system font fallbacks with size-adjust to avoid layout shift. Do not drop the signature animation to hit the score; remove weight elsewhere first.
Accessibility: WCAG 2.2 AA, visible focus, semantic landmarks, one h1 per page, headings in order, skip link, alt text, aria-hidden on decorative layers, reduced-motion support, form fields usable with a screen reader, and body text never smaller than 16px (17px in Marathi).
Responsive: mobile first at 320, 360, 390, 768, 1024, 1440 and 1920 px, portrait and landscape; no horizontal scroll; tap targets at least 44 px; 100svh/lvh units; safe-area insets; fluid type with clamp().
SEO: unique title and description per page and language, Organization and LocalBusiness JSON-LD using only confirmed facts, Article JSON-LD for posts, real text (not text inside images), internal links. Propose English and Marathi keyword lists in docs/SEO.md (for example what farmers and dealers in Maharashtra search when they want to sell grapes, almonds or dates to an exporter) for me to approve.
Legal: privacy policy and terms of use in both languages (short, plain, based on what the site really collects); a cookie notice only if analytics is added; Google Analytics 4 wired up behind a config flag, off by default.
Security basics: no secrets in the repo or client bundle, sanitised inputs, HTTPS, sensible headers in vercel.json, long cache headers on static assets.
10. Build phases (checkpoint after each with screenshots at 390 px and 1440 px in both languages)
Project setup (Astro, GSAP, Vercel config), site.json, i18n skeleton, fonts, design tokens, header with the language toggle, footer, floating WhatsApp button.
Hero with the video layer, shade, poster fallback and the weak-network rules. Pause for my review.
Farmers section: how-it-works line, rates function and board, weighing slip and WhatsApp handoff.
Products and Origin (season chart, map).
Contact and the forms.
Blog (list, post, three drafts) and the Marathi versions.
Images (generate or placeholders) and the assets manifest. Pause for my review.
SEO files, legal pages, analytics flag, 404.
Polish: remove one decorative element from every section, check every state (hover, focus, loading, error, empty), and re-check the list of generic tells. Pause for my review.
11. Final QA (report each item with results)
Scroll the whole page slowly up and down: video and animations stay in sync, nothing jumps.
Switch language on every page: layout holds, no untranslated strings, fonts load only where needed.
Test on a real mid-range Android or a throttled "Slow 4G" profile, and iOS Safari for video seeking.
Every link, button, form and the language toggle works; WhatsApp messages open prefilled correctly in both languages.
Rates: real data shown for Pune and Maharashtra, date visible, fallback works, no API key visible in the Network tab or the bundle.
Reduced motion on, save-data on, video file missing: all fall back with no console errors.
Keyboard-only walkthrough and a screen-reader spot check on the form and the slip.
Lighthouse mobile and desktop scores with numbers.
Copy audit: every factual claim is confirmed or marked TODO: confirm; the Marathi review list is complete; no banned words.
Image audit against docs/ASSETS.md: nothing generated is passed off as real proof.
README: how to run, edit site.json, add a blog post in both languages, replace the video and images, set DATA_GOV_API_KEY, and deploy on Vercel.
12. Final report

List files added, the design concept in one paragraph, the motion table as built, which sections are transparent or opaque over the video, performance and accessibility numbers, all open TODO: confirm items, the Marathi strings needing native review, and recommended next steps.

Start now with phase 1. Do not ask the discovery questions again.
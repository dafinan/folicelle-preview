# Folicelle — Sitemap & Navigation UX

**Document version:** 1.0 (April 30, 2026)
**Owner:** Dafina Smith — dafina@covetandmane.com
**Audience:** Mindie, Alfie, future contributors
**Companion files:** `folicelle-shopify-build-spec.md`, `Folicelle Launch — Handoff Document for Claude Cowork.md`

---

## A. Full sitemap

Tree below uses status codes:
- `LIVE` — built and deployed
- `MOCKUP` — HTML mockup exists in this prototype
- `LAUNCH` — planned, must exist by mid-June 2026 launch
- `FUTURE` — planned post-launch
- `EXTERNAL` — hosted by another platform (Tevello, Klaviyo)

```
folicelle.com/
│
├── /                                          [MOCKUP] — index.html
│     Homepage. Primary entry point for organic, social, PR, direct.
│     Routes into 3 customer pathways. Mockup file: homepage-mockup-v2/.
│
├── /products/foundation                       [MOCKUP] — product/foundation.html
│     PDP for Folicelle Foundation. Lead SKU. Heaviest conversion work.
│     Mockup file: pdp-mockup-v2/.
│
├── /products/weekly                           [LAUNCH]
│     PDP for Weekly Ritual Packets. $29 starter pack. No mockup yet —
│     standard simple PDP, low priority. Used for trial conversion path.
│
├── /pages/method                              [MOCKUP] — method.html
│     Standalone $79 course landing page (The Hair Optimization Method).
│     Mockup file: method-mockup/.
│
├── /pages/membership                          [LAUNCH]
│     $19/month / $179/year community-only membership product page.
│     Lower priority for v1 — can launch as simple page with CTA.
│
├── /pages/welcome                             [LAUNCH]
│     QR code destination. Conditional flow:
│     - Existing customer match → routes to Hub
│     - New visitor → 14-day platform trial
│     - Trial ending → upsell to subscription or membership
│     Copy spec lives at: 03_welcome-funnel.md
│
├── /pages/assessment                          [MOCKUP — placeholder] — assessment.html
│     Hair Wellness Assessment. Primary cold-traffic CTA from homepage.
│     Embed of chosen tool (Typeform, VideoAsk, or Lovable build TBD).
│     60–90 second quiz routes to ailment-specific results.
│
├── Ailment landing pages — paid traffic destinations
│   ├── /pages/postpartum                      [LAUNCH] — no mockup
│   ├── /pages/perimenopause                   [LAUNCH] — no mockup
│   ├── /pages/glp1                            [LAUNCH] — no mockup
│   └── /pages/thinning                        [LAUNCH] — no mockup
│         All four follow the same architecture (10-module ailment LP per
│         master handoff doc Section 11). Cold paid traffic from Meta.
│         Each carries unique creative + matched LP H1 (ALO framework).
│
├── /pages/community                           [EXTERNAL — Tevello]
│     The Cohort — private community organized by hair stage.
│     Hosted on Tevello, accessed via /account for subscribers.
│     This URL becomes a marketing landing page describing the community,
│     with deep-link to Tevello-hosted experience for logged-in subscribers.
│
├── /pages/care-network                        [LAUNCH]
│     Care Network — at-home testing partner discounts page. Member pricing.
│     Launch partner: EverlyWell or LetsGetChecked (TBD).
│
├── About cluster
│   ├── /pages/about                           [LAUNCH] — Our Story (founder + brand)
│   ├── /pages/medical-advisor                 [LAUNCH] — Dr. Safahi profile
│   ├── /pages/ingredients                     [LAUNCH] — full ingredient deep-dive
│   ├── /pages/press                           [FUTURE] — hide for v1, build when placements exist
│   └── /blogs/journal                         [FUTURE] — content marketing, post-launch
│
├── Customer Account UI Extension              [EXTERNAL — Shopify Customer Accounts]
│   ├── /account                                The Hair Wellness Hub (logged in)
│   ├── /account → Toolkit tab                  Self-Advocacy Toolkit (UI Extension)
│   ├── /account → Course tab                   Tevello deep-link
│   ├── /account → Cohort tab                   Tevello deep-link
│   ├── /account → Care Network tab             Discount partner deep-link
│   └── /account/login                          New Customer Accounts login
│         The whole Hub is a separate parallel build (Customer Accounts UI
│         Extension). Homepage and PDP only need to link correctly to /account.
│
├── Shop / Cart / Checkout
│   ├── /products                              [LIVE — Shopify auto-generated]
│   ├── /cart                                  [LIVE — Stretch theme cart drawer]
│   └── /checkout                              [LIVE — Shopify-managed]
│
├── Future SKU products (2027+ rollout)
│   ├── /products/hormonal-balance             [FUTURE 2027]
│   ├── /products/metabolic                    [FUTURE 2027]
│   └── /products/stress-and-sleep             [FUTURE 2027]
│         Per master handoff doc Section 1: same brand, same pricing tier,
│         sequential launches. Each adds a PDP at /products/[name].
│
├── Support / Operational
│   ├── /pages/contact                         [LAUNCH]
│   ├── /pages/faq                             [LAUNCH] — top-level FAQ (PDP has its own)
│   ├── /pages/shipping-returns                [LAUNCH]
│   └── /pages/satisfaction-promise            [LAUNCH]
│
└── Legal / Footer-only
    ├── /pages/privacy                         [LAUNCH] — required
    ├── /pages/terms                           [LAUNCH] — required
    ├── /pages/accessibility                   [LAUNCH] — required (ADA)
    ├── /pages/fda-disclaimer                  [LAUNCH] — required (FDA structure/function claims)
    └── /pages/careers                         [FUTURE]
```

**Total page count for launch (mid-June 2026):** ~20 pages plus the 4 ailment LPs = 24. Customer Account UI Extension and Tevello surfaces are external builds with their own scope.

---

## B. Top Navigation UX Flow

### Visual structure

The header is a single sticky bar across all pages, three regions left-to-right:

```
[ FOLICELLE™ wordmark ]    [ Shop · Method · Community · About · Login ]    [ Subscribe button | cart icon ]
```

- **Left:** wordmark in Ancestral Gold, links to `/`
- **Center:** primary nav links, brown text uppercase 13px, hover terracotta
- **Right:** primary CTA "Subscribe" routing to `/products/foundation`, plus minimal circular cart icon showing item count

### Menu hierarchy

The header is a flat menu — no dropdowns at launch. Reasoning: only one core SKU at v1, dropdown overhead doesn't earn its complexity until 2027 when the line expands. When SKU 2 (Hormonal Balance) launches, "Shop" becomes a dropdown with Foundation / Hormonal Balance / Weekly Packets / Method.

| Label | URL | Customer state most relevant |
|---|---|---|
| Shop | `/products/foundation` | Cold visitor exploring the lead SKU |
| The Method | `/pages/method` | Curious, not-yet-committed customer |
| Community | `/pages/community` | Returning subscriber (Cohort access), or curious browser |
| About | `/pages/about` | Brand-evaluating visitor, editor, retail buyer |
| Login | `/account/login` | Returning customer |
| Subscribe (CTA button) | `/products/foundation` | Anyone ready to commit; primary conversion path |
| Cart icon | `/cart` (drawer) | Anyone with items; shows count |

### Mobile menu structure

Below 880 px viewport, the center nav links collapse into a hamburger button on the right. Tapping the hamburger opens a right-side drawer with overlay; the overlay grays out the page behind it.

Mobile drawer order:
1. Shop
2. The Method
3. Community
4. About
5. Login
6. Subscribe (CTA — distinguished by Brown background, Ancestral Gold text)

The drawer closes on: tap outside drawer, tap close × button, tap any link inside drawer, press Escape.

### Sticky behavior

The header is `position: sticky; top: 0` with z-index 100 (below mobile menu drawer's 200). On scroll past 8px, a subtle shadow appears (`box-shadow: 0 4px 20px rgba(86,54,34,0.08)`) to give the header presence over scrolling content. The header does NOT shrink, hide on scroll-down, or otherwise transform — taste-led brands keep persistent navigation.

### Account state variations

| State | What changes |
|---|---|
| **Logged out** | Default. "Login" link visible, cart icon shows 0 if empty |
| **Logged in, non-subscriber** | "Login" replaced with "My Account" → routes to `/account` (order history view). Cart icon syncs with logged-in cart |
| **Logged in, trial member (14-day platform trial)** | Same as non-subscriber, plus a small persistent banner below the nav: "X days left in your trial — Upgrade to Foundation" linking to `/products/foundation` |
| **Logged in, active subscriber** | "Login" replaced with "Hair Wellness Hub" → routes to `/account` (full Hub experience with Toolkit, Course, Cohort tabs visible). Subscribe CTA in header replaced with "Hub" CTA. Cart icon still functional but rarely used since subscription auto-renews |

### Cart icon behavior

The cart is a thin circle with item count inside. Default state: `0`. Clicking opens the Stretch native cart drawer — does NOT route to a `/cart` page. If items contain a subscription, the drawer shows the frequency selector. The cart drawer is the only place we surface the upsell logic (no recommended products at v1; line is too narrow).

---

## C. Footer Navigation UX Flow

### Visual structure

5 columns across desktop, single column stack on mobile. Top row:

```
[ FOLICELLE wordmark + tagline + newsletter signup + social ]   [ Shop ]   [ Platform ]   [ About ]   [ Support ]
```

Bottom row (full-width): FDA disclaimer, copyright, privacy/terms/accessibility links.

### Newsletter placement

Brand block (left column). Email input + Join button. Submits to a Klaviyo list (separate "Folicelle Pre-purchase" list distinct from subscriber list). Below the form: 3 small social icons — IG, TikTok, Pinterest.

### Required legal links

Bottom row, after copyright line: Privacy · Terms · Accessibility. FDA structure/function disclaimer renders as italic 11px serif text above these links, max-width 700px:

> *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before beginning any new supplement, particularly if you are pregnant, nursing, or taking prescription medication.*

### Column links

| Column | Label | URL | Status |
|---|---|---|---|
| Shop | Folicelle Foundation | `/products/foundation` | MOCKUP |
| | Weekly Ritual Packets | `/products/weekly` | LAUNCH |
| | The Hair Optimization Method | `/pages/method` | MOCKUP |
| | Folicelle Membership | `/pages/membership` | LAUNCH |
| | Welcome (gift trial) | `/pages/welcome` | LAUNCH |
| Platform | The Method | `/pages/method` | MOCKUP |
| | The Cohort | `/pages/community` | EXTERNAL |
| | Self-Advocacy Toolkit | `/account` | EXTERNAL |
| | Care Network | `/pages/care-network` | LAUNCH |
| | Take the Assessment | `/pages/assessment` | MOCKUP |
| About | Our Story | `/pages/about` | LAUNCH |
| | Medical Advisor | `/pages/medical-advisor` | LAUNCH |
| | Ingredients | `/pages/ingredients` | LAUNCH |
| | Journal | `/blogs/journal` | FUTURE |
| | Press | `/pages/press` | FUTURE |
| Support | Contact Us | `/pages/contact` | LAUNCH |
| | FAQ | `/pages/faq` | LAUNCH |
| | Shipping & Returns | `/pages/shipping-returns` | LAUNCH |
| | 90-day Promise | `/pages/satisfaction-promise` | LAUNCH |
| | Sign In | `/account/login` | LIVE |

### Mobile collapse behavior

Below 720 px, the footer columns stack into a single column. On tablet (720–1000 px), columns reflow to a 2-column grid. Brand block always sits on top. Social icons remain inline below newsletter form.

---

## D. Customer Pathway Flow Diagrams

Four primary journeys mapped page-by-page. References to Master Handoff Doc Section 6 (Customer Pricing Pathways) and Section 8 (Launch Plan).

### Pathway 1 — DTC Subscriber (the conversion-priority path)

```
Entry: organic search, social, PR, direct → Homepage (/)
   ↓
   Take the Assessment CTA → /pages/assessment
   ↓
   8 questions, ~60s → assessment results screen
   ↓
   Recommended pathway: Foundation subscription
   → /products/foundation
   ↓
   Buy box: 90-day prepaid pre-selected ($184 / $61.30 effective)
   ↓
   Add to Cart → Cart drawer → Checkout
   ↓
   Order confirmation
   ↓
   Welcome email sequence (Day 0–90): 10 touchpoints
       Day 0  · Order confirmation + brand voice + platform welcome
       Day 3  · Shipping notification
       Day 4  · Pre-delivery content drop (He Shou Wu story or Safahi explainer)
       Day 5  · Out for delivery + delivered
       Day 6–10 · How-to-use trio (ritual setup, when/how to take, platform invitation)
       Day 14 · First expectation-setter ("you should notice X by now")
       Day 30 · Second expectation-setter + Course Module 3 reminder
       Day 66 · Habit-formation email (66-day neuroscience)
       Day 90 · Review request + sub conversion (for one-time buyers)
   ↓
   Customer Account / Hair Wellness Hub /account
       → Course Module 1 unlocks
       → Cohort assignment based on assessment cohort tag
       → Toolkit (Doctor Script Generator, Photo Tracker, Lab Results)
       → Care Network discount tab
   ↓
   Day 90+: Cycle repeat (90-day prepaid auto-renews)
```

### Pathway 2 — TikTok Trial → Subscription

```
Entry: TikTok creator video featuring Folicelle weekly packets
   ↓
   TikTok Shop product page — Weekly Ritual Packets ($24)
   ↓
   In-app checkout → Order placed
   ↓
   Order confirmation email from TikTok Shop, plus Folicelle welcome email
   with platform-light access (4 of 8 course modules, 7-day community trial)
   ↓
   Day 5 email · "Continue your journey" — the subscription upsell
       Frame: "Loved your week? Foundation subscription includes all 8 course
       modules, ongoing community, full Toolkit, and Care Network."
   ↓
   Click → folicelle.com/products/foundation
   ↓
   90-day prepaid signup with first-time-customer discount
   ↓
   Joins Pathway 1 from this point onward (welcome sequence, Hub, etc.)
```

### Pathway 3 — Standalone Course Buyer

```
Entry: organic discovery, content sharing, friend recommendation
   ↓
   Homepage → "Start the Method" CTA → /pages/method
   OR direct link from someone who took the course
   ↓
   Method LP (method.html)
   ↓
   Begin the Method CTA — $79 → Add to Cart → Checkout
   ↓
   Order confirmation
   ↓
   Course access email — login to Customer Accounts /account
   ↓
   Course Module 1 unlocks immediately
   ↓
   30-day Cohort community trial begins (full access for 30 days)
   ↓
   Toolkit basic version (assessment + protocol page)
   ↓
   Day 7 email · "How's the Method landing?"
       Soft check-in + Module 2 reminder
   ↓
   Day 30 email · "Your community trial ends in 7 days"
       Two paths offered:
       (a) Subscribe to Foundation — Method becomes free, community continues full
       (b) Continue Folicelle Membership at $19/month — Method + community without supplement
       (c) Do nothing — keep lifetime course access, lose community
   ↓
   Conversion path varies by customer
```

### Pathway 4 — Ulta Retail → DTC (Future state, August 2026+)

```
Customer buys Folicelle Foundation at Ulta retail
   ↓
   Opens carton at home
   ↓
   Finds QR code insert card (Version B — retail variant)
   ↓
   Scans QR with phone camera
   ↓
   Routes to folicelle.com/welcome
   ↓
   Welcome page — State 1 (new visitor) renders
       Hero: "Welcome to Folicelle"
       Email capture: first name + email, no card required
       CTA: Begin your 14-day platform trial
   ↓
   Email submitted → Welcome page State 3 (no match found)
       Confirmation: "Your trial has begun, [Name]"
       3 suggested first actions:
           - Take the Assessment (~2 min)
           - Watch Module 1 of the Method (~11 min)
           - Browse Care Network options
   ↓
   14 days of platform access
   ↓
   Day 12 + Day 14 email · "Your fourteen days are nearly up"
       Two paths:
       (a) Folicelle Foundation subscription — platform stays free, daily ritual joins
       (b) Folicelle Membership at $19/month — platform on its own
   ↓
   Conversion or no-conversion (capture remarketing audience either way)
```

**Note on Pathway 4:** Master handoff doc treats this as "future state" pending Ulta deal closure (August 2026 pitch target). The QR insert card design is finalized; the welcome page copy is finalized in `03_welcome-funnel.md`. Build is post-Ulta-pitch.

---

## E. Navigation Decision Documentation

Reasoning behind navigation choices that aren't obvious. Future contributors should reference these before changing nav structure.

### 1. Why is "The Method" in the top nav, not under Shop?

The standalone $79 course is a **primary customer pathway**, not a secondary product. Customers who aren't ready for a supplement subscription enter through the Method. Burying it under "Shop" treats it as a product variant when it's actually a separate top-of-funnel acquisition channel. Also: the Method's strategic role is brand-credentialing (taste-led, education-led brand) — surfacing it in primary nav reinforces that positioning.

### 2. Why is the assessment quiz the primary CTA on the homepage?

Assessment is the highest-conversion entry point for cold traffic. AG1's published data shows 9.5% conversion when ALO framework (Ad/Lander/Offer congruency) is applied with quiz-driven personalization. The assessment routes customers into the cohort that fits their hair stage (postpartum, perimenopause, metabolic, foundation), which then drives PDP messaging and course module sequencing. Putting "Shop Foundation" first sends most cold visitors to a cold checkout — bad math.

### 3. Why does the "Subscribe" button live in the header (not Shop, not Buy)?

"Shop" implies browsing. "Buy" implies a single transaction. "Subscribe" frames the purchase decision the way Folicelle wants it framed — a daily ritual, not a one-off. The label sets up the 90-day prepaid as the assumed default. The button routes to the PDP, not directly to checkout, because PDP is where subscription tier selection happens.

### 4. Why is there no "Sale" or "Bundle" option in the header?

Folicelle is a single-SKU launch with intentional pricing discipline. No flash sales, no bundles, no surface-level price competition. The premium positioning depends on the brand never appearing on sale. When SKU 2 launches in 2027, "Bundle" can become a header item.

### 5. Why is the cart icon a circle with a number, not a bag icon?

Brand book aesthetic: minimal, taste-led, not transactional. Bag icons signal "store"; the circle signals "your selection." Subtle. Also: the count sits inside the circle, not as a red badge — red badges read as urgency/notification, which conflicts with the warm Sage archetype voice.

### 6. Why does "Login" stay as text instead of becoming an icon?

For non-subscribers, Login is rare; it's an anchor for returning customers. Text is honest about what it is. Once they're logged in, it becomes "Hair Wellness Hub" — a branded label that signals the platform is theirs. An icon would obscure this state-based meaning.

### 7. Why is there no live chat icon on the homepage?

Reamaze chat is installed and active, but the widget is hidden on the homepage hero (visually) to keep the brand-book first impression clean. It surfaces on the PDP after the user scrolls past the buy box, on the FAQ section specifically, and across all support pages. Editor and Ulta-buyer impressions of the homepage shouldn't be a chat bubble — they should be the editorial photography.

### 8. Why does the QR welcome page handle three states instead of routing existing customers to /account directly?

Privacy. The page can't reveal whether an email exists in the customer database — that would leak which Ulta customers are also DTC customers. The page treats every visitor identically until email submission. Both "match found" and "no match found" states feel like clean welcome moments to the visitor; only the page knows the difference.

### 9. Why is the assessment a 60-second quiz instead of a longer baseline questionnaire?

Quiz length correlates inversely with completion rate. The 60-second version captures cohort assignment + recommended starting protocol, which is enough for routing. The deeper baseline intake (lab values, photos, goals) lives inside the Toolkit after account creation, where the customer is already committed and longer engagement is appropriate. The homepage assessment is for sorting; the Hub assessment is for diagnosis.

### 10. Why are the four ailment LPs not in the homepage nav?

ALO framework rule: cold paid traffic for postpartum, perimenopause, GLP-1, thinning lands on dedicated LPs that match the ad creative word-for-word. Surfacing the LPs in the homepage nav would confuse organic traffic ("which one am I?") and dilute the assessment's role as the segmenting mechanism. The ailment LPs are not destinations the homepage should send people to — they are *origin points* for paid traffic that flows into the same checkout funnel.

### 11. Why does the footer list "Self-Advocacy Toolkit" under Platform but not in the header?

The Toolkit is a subscriber-only feature, accessed via /account. Header links should be relevant to logged-out cold visitors. Footer is where we tell the full brand story including subscriber-only experiences for context. When the header eventually shows "Hair Wellness Hub" (for logged-in subscribers), the Toolkit becomes accessible inside that surface — no separate nav link needed.

### 12. Why is "Welcome (gift trial)" listed in the Shop column instead of being hidden?

The welcome page exists as a public URL specifically so editors, friends-of-brand, and stakeholders can preview the trial flow without needing a QR code or retail purchase. Listing it in Shop signals "yes, you can try this" without forcing the QR scan path. Once Ulta launches and QR scans drive volume, this footer link becomes secondary to QR-driven traffic.

---

**End of sitemap and navigation document.**

For any navigation question not answered here:
1. Check the master handoff doc Section 6 (Customer Pricing Pathways)
2. Check the build spec doc Section 2 (Global Setup) for menu link details
3. Open the prototype mockups — they are the visual source of truth
4. If still unclear, return to Dafina before committing nav changes

Last reviewed: April 30, 2026.

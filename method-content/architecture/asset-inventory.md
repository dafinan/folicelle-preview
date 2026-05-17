---
title: The Folicelle Method, Asset Inventory
version: v1 (May 2026)
owner: Dafina Smith
audience: Mindie, Alfie, production lead, community moderator
status: Master ship list. Drives Cowork Prompts 2 and 3.
---

# Premise

Every asset required to ship the Method by January 2027 kickoff. Three columns per row: asset name, type, status. Status values: **EXISTS** (asset is in hand today), **CREATE** (must be produced), **REVIEW** (asset exists but needs editing or repurposing), **CONFIRM** (decision pending from Dafina or partner).

Production deadline working backward from January 6, 2027 kickoff: all core module videos and PDFs locked by November 30, 2026. Tevello configuration and brand customization complete by December 14, 2026. Soft beta with founding members December 15 through January 5, 2027. Public kickoff January 6, 2027.

---

# 1. Video assets

## Core module videos (8)

| Asset | Type | Status |
|---|---|---|
| Module 1, How Hair Actually Works (12–15 min) | Founder talking head + B-roll | CREATE |
| Module 2, Reading Your Body's Signals (6–8 min) | Founder talking head | CREATE |
| Module 3, The Hormonal Layer (15–18 min) | Founder talking head + Safahi cut-ins | CREATE (founder), REVIEW (Safahi cut-ins) |
| Module 4, The Nutritional Layer (15–18 min) | Founder talking head + Safahi cut-ins | CREATE (founder), REVIEW (Safahi cut-ins) |
| Module 5, The Stress and Sleep Layer (5–7 min) | Founder talking head | CREATE |
| Module 6, The Environmental Layer (5–7 min) | Founder talking head | CREATE |
| Module 7, Advocating for Yourself (18–22 min) | Founder talking head, story-driven | CREATE |
| Module 8, Your Protocol (6–8 min) | Founder talking head | CREATE |

## Quarterly bonus videos (3 in Year 1)

| Asset | Type | Status |
|---|---|---|
| April Bonus, Heat Water Topicals Deep Dive (8–12 min) | Founder talking head + B-roll | CREATE |
| July Bonus, HRT GLP-1 Hair Loss (8–12 min) | Founder talking head + Safahi review | CREATE |
| October Bonus, Hairstylist Relationship (8–12 min) | Founder talking head + Sitting Pretty cross-pollination | CREATE |

## Kickoff and reflection (live)

| Asset | Type | Status |
|---|---|---|
| Kickoff week welcome video (3 min, intro to year) | Founder talking head | CREATE |
| Kickoff week "How this year will work" (3 min) | Founder talking head | CREATE |
| January Friday live kickoff (45–60 min livestream) | Zoom recording | CREATE (live event) |
| December Reflection (45–60 min livestream) | Zoom recording | CREATE (live event) |

## Existing video assets to mine

| Asset | Location | Purpose |
|---|---|---|
| Dr Safahi YouTube live interview 1 | https://www.youtube.com/live/BZ-yf3D1PJk | Cut-in clips for Modules 3 and 4 |
| Dr Safahi YouTube live interview 2 | https://www.youtube.com/live/dpedsUMowkU | Cut-in clips for Modules 3 and 4 |
| Dr Safahi Recording (audio) | /Downloads/Folicelle Assets/Dr Safahi Recording .m4a (10MB) | Audio cut-ins or transcript material for Modules 3 and 4 |
| Existing C&M and SP founder content | TBD with Dafina | Voice and tone reference, possible B-roll |

REVIEW pass: Dafina to identify 60-90 seconds per Safahi YouTube interview that maps to Modules 3 and 4. Editor cuts to 20-40 second segments with captions. No clinical claims that fall outside FTC-safe language per master handoff Section 3.

---

# 2. PDF downloadables (one per core module, plus generated assets)

| Asset | Type | Status |
|---|---|---|
| Module 1 reference card, "Hair growth cycle and He Shou Wu heritage" | One-page PDF | CREATE |
| Module 2 field guide, "Is it shedding or thinning" | One-page PDF | CREATE |
| Module 3 reference, "Hair changes by hormonal chapter" | One-page PDF | CREATE |
| Module 4 lab reference, "Labs that read the nutritional layer" | One-page PDF | CREATE |
| Module 5 reference, "Cortisol and hair cycle relationship" | One-page PDF | CREATE |
| Module 6 checklist, "What to change first" | One-page PDF | CREATE |
| Module 7 sample doctor script | One-page PDF | EXISTS (sample on /toolkit/index.html, needs polish as standalone PDF) |
| Module 8, Your Updated Protocol | Generated PDF per member | CREATE (logic) |
| Welcome kit insert (90-day prepaid bonus) | Multi-page PDF | EXISTS (referenced in master handoff Section 1, confirm with Dafina) |

Design: Folicelle brand book aesthetic. Canela display + Apercu Pro body where licensed fonts available, DM Serif Display + Inter substitutes otherwise. Brand color palette per `tevello-configuration.md`. Layout treatment matches `/toolkit/` sample doctor script and the existing site PDP. Designer hours per master handoff Section 20 (annual designer budget of roughly $3K to $5K).

---

# 3. Toolkit components

| Component | Status | Build phase |
|---|---|---|
| Public Hair Stage Assessment (folicelle.com/assessment) | CREATE (mockup exists, instrument needed) | Lovable prototype, then Shopify Customer Account UI Extension |
| In-Course Baseline Assessment (Tevello-gated) | CREATE | Same Lovable build, deeper instrument |
| Course-Completion Re-assessment (Module 8) | CREATE | Same Lovable build, post-course variant |
| Doctor Script Generator (AI-powered, personalized) | CREATE | Lovable + Claude API |
| Photo Tracker | CREATE | Shopify Customer Account UI Extension |
| Lab Results Module | CREATE | Shopify Customer Account UI Extension |
| Journey Dashboard | CREATE | Shopify Customer Account UI Extension |
| My Protocol page | CREATE | Shopify Customer Account UI Extension |

Build approach per master handoff Section 5: Lovable prototype for v1 (2 to 3 weeks), beta with 20 SP customers (1 week), port to Shopify Customer Account UI Extension (3 to 4 weeks). 5 to 7 weeks total, $5K to $8K incl. Shopify developer.

Doctor Script Generator prompt template lives at `/method-content/prompts/doctor-script-template.md`, produced in Cowork Prompt 3. Claims attorney review required before launch.

---

# 4. Tevello configuration

| Asset | Type | Status |
|---|---|---|
| Tevello Unlimited plan installation | Shopify app install | CREATE |
| Course shell with 13 sections (8 core + 3 bonus + kickoff + reflection) | Tevello config | CREATE |
| Brand customization (colors, typography, course thumbnail) | Tevello CSS + assets | CREATE |
| Shopify product variants linked to Tevello auto-enrollment | Tevello + Shopify config | CREATE |
| Community space with 4 cohort sections | Tevello community | CREATE |
| Certificate template | Tevello certificate editor | CREATE |
| Notification flows | Tevello notifications | CREATE |
| Tevello app block on customer account page | Shopify theme edit | CREATE |
| Tevello app block on thank-you / order-status page | Shopify theme edit | CREATE |

Full spec in `tevello-configuration.md`.

---

# 5. Email touchpoints (Klaviyo)

| Touchpoint | Status |
|---|---|
| January kickoff welcome email | CREATE |
| January Friday live kickoff invite | CREATE |
| January Friday live kickoff recap | CREATE |
| February Module 1–3 nudge | CREATE |
| March Doctor Script nudge | CREATE |
| April Q1 check-in prompt (2 sends) | CREATE |
| April Bonus 1 release email | CREATE |
| May labs interpretation nudge | CREATE |
| July Q2 check-in prompt (2 sends) | CREATE |
| July Bonus 2 release email | CREATE |
| September personal re-engagement | CREATE |
| October Q3 check-in prompt (2 sends) | CREATE |
| October Bonus 3 release email | CREATE |
| November finish-the-year email | CREATE |
| December pre-Reflection invite | CREATE |
| December post-Reflection recap | CREATE |

Total: ~18 scheduled emails Year 1 outside the post-purchase welcome flow. Welcome flow already specified in master handoff Section 10. Copy produced in Cowork Prompt 2 or a dedicated email prompt.

---

# 6. Community assets

| Asset | Status |
|---|---|
| Community guidelines document | CREATE |
| Crisis escalation protocol (self-harm, eating disorders, severe medical) | CREATE |
| Moderator playbook | CREATE |
| Founding member invitation copy (50 to 100 SP customers and friends-of-brand) | CREATE |
| Year 1 thread prompts (monthly) | CREATE |
| Cohort welcome posts (one per cohort) | CREATE |

Community moderator: hire 5 to 10 hours per week per master handoff Section 1. Crisis escalation triggers to Safahi for medical content.

---

# 7. Photography and B-roll

## Existing brand assets in `/Users/dafina/Downloads/Folicelle Assets/`

| Asset | Use |
|---|---|
| FolicelleRenders-Front.jpg | Module 1 + 8 B-roll |
| FolicelleRenders-Ingredients.jpg | Module 4 reference imagery |
| FolicelleRenders-SupplementFacts.jpg | Module 4 ingredient walkthrough |
| Gummies_0031, 0033, 0035, 0040 _selects_v1a (4 photos) | Module B-roll, lifestyle, PDP integration |
| Folicelle_WebLandingPage_MS_r1b.jpg | Tevello course thumbnail and Method landing |
| Folicelle_Image_1, _2, _3 (3 lifestyle webp) | Section header imagery in Tevello |
| Folicell_Icon_1 through _4 (4 brand icons) | UI accents, certificate, navigation |
| Folicelle Logo.webp | Tevello header, certificate signature |
| Folicelle_Product.webp | Module 4 product reference |

## Existing brand strategy and design assets

| Asset | Location | Use |
|---|---|---|
| FOLICELLE Brandbook v1.pdf (64 pages) | /Documents/Claude/Projects/Folicelle/ | Voice, color, typography source of truth |
| Brand Strategy 28May2024 v2.pdf | /Documents/Claude/Projects/Folicelle/ | Brand archetype and positioning context |
| Folicelle Marketing Sheets.pdf | /Documents/Claude/Projects/Folicelle/ | Ingredient and claim source material |

## Photography to shoot fresh

| Asset | Location | Status |
|---|---|---|
| Dafina founder portraits, editorial natural light | Chelsea office (primary) | CREATE |
| Dafina home and family B-roll | Westport home | CREATE |
| Dafina and sister outdoor conversation B-roll | Backyard | CREATE |
| He Shou Wu botanical illustration | Designer brief | CREATE |
| Hair growth cycle animated diagram (Module 1) | Motion designer brief | CREATE |
| Module 6 environmental B-roll (shower, blow dryer, salon chair) | Mixed | CREATE |

---

# 8. Filming logistics (per Dafina)

| Element | Detail |
|---|---|
| Primary location | Chelsea office (Covet & Mane editorial space, "perfect lighting" per the essay) |
| Secondary location | Westport home, for grounded conversational moments |
| Tertiary location | Westport backyard, with sister, for "back to nature" outdoor B-roll |
| Tone target | Grounded. Real conversations. Back to nature. Not studio-clinical. |
| Cinematographer | TBD (Lucas, external, or mixed per module) (confirm) |
| Audio | Lavalier per shoot day, room sound captured for ambience (confirm) |
| Wardrobe | Three to five rotations across the eight modules. Wardrobe stylist TBD (confirm) |
| Teleprompter | TBD per module. Module 7 likely no prompter for emotional authenticity (confirm) |
| Video hosting | Vimeo paid account exists. Default to Vimeo for core modules. Private YouTube acceptable for December reflection livestream capture |
| Shoot days estimated | 2 to 3 days for the 8 core modules + 3 bonus modules, plus 1 outdoor B-roll day with sister |

---

# 9. Reference material in this commit

| Asset | Status | Purpose |
|---|---|---|
| `/method-content/reference/essay-what-my-body-was-screaming.md` | EXISTS (this commit) | Source material for Module 7 spine, brand origin, Module 4 ferritin narrative, voice reference |

The essay is the canonical narrative spine. Modules 4 and 7 lean on it directly. The voice in this essay is the operating definition of Dafina's Method voice.

---

# 10. Open CONFIRM items for Dafina

1. **Cinematographer**: Lucas, external, or mixed. Affects shoot scheduling.
2. **Wardrobe stylist**: yes or no for the 8-module shoot.
3. **Teleprompter or scripted talking-head per module**: per-module decision.
4. **Care Network primary partner**: EverlyWell, LetsGetChecked, or Quest Labs as Tier 2 anchor. Affects Module 4 references and the Care Network module copy.
5. **Standalone $79 production polish**: master handoff suggests an additional $5K to $10K for higher production value on the standalone product. Confirm budget envelope.
6. **Welcome kit insert PDF**: confirm exists, or queue as CREATE.
7. **B-roll permissions and family-on-camera consent**: especially for the backyard with the sister, and any kids if they appear.
8. **Module 7 visual treatment**: founder-only talking head, or include actual lab printout B-roll (with personal information redacted).
9. **Sister identity on camera**: named or unnamed, what role she plays.

---

# 11. Production budget envelope

Per master handoff Section 20 platform launch budget ($32K to $48K for the Method launch):
- Course production (8 modules + standalone version): $20K to $30K
- Toolkit build (Lovable + Shopify extension): $5K to $8K
- Community moderator (initial 90 days): $3K to $5K
- Care Network BD: founder time
- Claims attorney review (FTC-safe language + Doctor Script template): $2K to $3K
- Platform integration testing/QA: $1K to $2K
- Designer hours for PDFs/certificate/brand customization: $3K to $5K

The asset list above can be produced inside this envelope if shoot days are kept to two or three plus one outdoor day, and the Doctor Script Generator launches as Lovable v1 rather than a full custom build.


---
title: Tevello Configuration Spec
version: v1 (May 2026)
owner: Dafina Smith
audience: Mindie, Alfie, future developer
status: For PR review. Implementation lives in Tevello admin and Shopify product variants.
---

# Plan

Tevello Unlimited plan, $29/month. Includes unlimited courses, members, communities, drip content, certificates, bundles, quizzes, and videos. One plan covers all Folicelle Method needs.

# Course structure inside Tevello

One course at launch: **The Folicelle Method**.

Course structure: course contains sections, sections contain lessons. Folicelle uses sections as modules and lessons as the video plus any downloadable.

```
The Folicelle Method (course)
├── Section: Kickoff
│   ├── Lesson: Welcome to the Method (video, ~3 min)
│   └── Lesson: How this year will work (video, ~3 min)
├── Section: Module 1, How Hair Actually Works
│   ├── Lesson: Module 1 video (12 to 15 min)
│   └── Lesson: Module 1 reference card (PDF download)
├── Section: Module 2, Reading Your Body's Signals
│   ├── Lesson: Module 2 video (6 to 8 min)
│   └── Lesson: Module 2 field guide (PDF download)
├── Section: Module 3, The Hormonal Layer
│   ├── Lesson: Module 3 video (15 to 18 min)
│   └── Lesson: Module 3 reference (PDF download)
├── Section: Module 4, The Nutritional Layer
│   ├── Lesson: Module 4 video (15 to 18 min)
│   └── Lesson: Module 4 lab reference (PDF download)
├── Section: Module 5, The Stress and Sleep Layer
│   ├── Lesson: Module 5 video (5 to 7 min)
│   └── Lesson: Module 5 reference (PDF download)
├── Section: Module 6, The Environmental Layer
│   ├── Lesson: Module 6 video (5 to 7 min)
│   └── Lesson: Module 6 checklist (PDF download)
├── Section: Module 7, Advocating for Yourself
│   ├── Lesson: Module 7 video (18 to 22 min)
│   └── Lesson: Sample doctor script (PDF download)
├── Section: Module 8, Your Protocol
│   ├── Lesson: Module 8 video (6 to 8 min)
│   ├── Lesson: Course-Completion Re-assessment (link out to Toolkit)
│   └── Lesson: Your updated protocol (generated PDF, delivered via Toolkit)
├── Section: Quarterly Bonus, April Year 1, Heat Water Topicals
│   └── Lesson: Bonus module video (8 to 12 min)
├── Section: Quarterly Bonus, July Year 1, HRT GLP-1 Hair Loss
│   └── Lesson: Bonus module video (8 to 12 min)
├── Section: Quarterly Bonus, October Year 1, Hairstylist Relationship
│   └── Lesson: Bonus module video (8 to 12 min)
└── Section: December Reflection
    └── Lesson: Year 1 reflection recording (added post-livestream)
```

# Drip schedule

**No drip on the eight core modules.** All eight modules unlock on day one of the kickoff week. This is explicit: the Method is not a 30-day cohort. Members watch at their own pace through the year.

**Drip on the three quarterly bonus modules.** Each bonus module is scheduled to release on a specific calendar date, year-agnostic:
- April bonus: releases April 14 each year
- July bonus: releases July 14 each year
- October bonus: releases October 13 each year

Tevello supports calendar-date drip release per lesson. Use scheduled release per bonus section.

**The December reflection lesson** is added manually after the live event. The recording lesson is created and published within 48 hours of the livestream.

# Enrollment

Auto-enrollment via Shopify product purchase. Tevello supports auto-enrollment by linking course access to a product variant. The Limited Time Access pattern (Tevello "recommended way") drives subscription gating.

Three Shopify products auto-enroll buyers into the Folicelle Method course. Each has variants with their own access durations:

| Shopify product | Variant | Access duration | Notes |
|---|---|---|---|
| Folicelle Foundation | 90-day prepaid subscription | 95 days | Renews on Shopify subscription cycle. Each renewal extends access. |
| Folicelle Foundation | Monthly subscription | 32 days | Access granted after first payment confirmed. Renews monthly. |
| Folicelle Foundation | One-time | 32 days | One-time buyer gets a month of course access. Designed as a trial. |
| The Hair Optimization Method | Standalone $79 | 99,999 days | Functions as lifetime access. |
| Folicelle Membership | Monthly $19 | 32 days | Course access included. Renews monthly. |
| Folicelle Membership | Annual $179 | 366 days | Course access included. Renews yearly. |
| Folicelle Membership | Welcome trial (14 days) | 14 days | QR code retail funnel per master handoff Section 1. Converts to subscription or membership. |

Access revocation is automatic. When a subscription cancels or expires and the limited-time window elapses, Tevello removes the member from the course. No manual revocation logic required.

# Community

Tevello native community feature, attached to the course. One community at launch, with four channel-style sections inside:

- The Postpartum Path
- The Perimenopause Path
- The Metabolic Path
- The Foundation Path

Plus a general "Method Members" cross-cohort space used for kickoff week, quarterly check-ins, and the December reflection.

Access to the community begins at course enrollment, not at completion. Members who do not finish the course retain community access for as long as their subscription, membership, or standalone access is active.

# Quizzes

**No quizzes at launch.** Per founder direction, the Method does not need a quiz to issue the certificate. The Course-Completion Re-assessment inside Module 8 serves as the completion signal. Quizzes can be added in Year 2 if member feedback indicates demand.

# Downloadable resources

Each core module attaches one PDF reference card. Each bonus module may optionally attach one PDF. PDFs are designed in Folicelle brand book aesthetic (Canela, Apercu, brand color palette) and hosted on Tevello's file system. PDF specs and content delivered in Cowork Prompt 3.

# Video hosting

Two options, decided per shoot:

1. **Vimeo (paid account already exists)**, embedded into Tevello lesson via Vimeo embed.
2. **Private YouTube** (unlisted), embedded via YouTube embed.

Recommendation: Vimeo for the eight core modules and the bonus drops. Higher quality control, no recommended-videos sidebar, password protection available. Private YouTube acceptable for the December reflection recording given the live-streamed origin and ease of capture from Zoom to YouTube.

Tevello also supports direct video upload to Tevello-hosted storage. Skip for v1 to avoid bandwidth limits.

# Certificates

Certificate of completion enabled. Triggered automatically when:
1. All eight core module lessons marked viewed by the member.
2. Module 8 Re-assessment submitted (tracked via the Toolkit, surfaced to Tevello via a manual mark-complete on the Re-assessment lesson, or via Shopify Flow if API integration is built).

Certificate template content per `course-map.md`. Tevello certificate editor supports custom text, signature image upload, and date stamp.

# Customer account integration

Tevello renders inside the Shopify customer account area. Members access the course via `/account` (the Hair Wellness Hub per master handoff Section 5). Tevello app block embedded on the customer account page.

Tevello app blocks required:
- Customer account page block, primary entry to the Method
- Thank-you / order-status page block, surfaces "Begin the Method" CTA immediately after purchase

# Brand customization

Tevello supports limited theme customization. Configure per FOLICELLE Brandbook v1 (September 2024):

**Colors** (from brand book color palette, page 33):
- Primary: `#563622` (Brown, PANTONE 7585 C)
- Accent: `#AF7153` (Terracotta, PANTONE 468 C)
- Secondary accent: `#DECCA5` (Ancestral Gold, PANTONE 4625 C)
- Tertiary accent: `#9A9762` (Moss Green, PANTONE 5835 C)
- Background: `#F5EFE2` (Cream, working extension)

**Typography**:
- Primary typeface (brand book): Apercu Pro (sans)
- Secondary typeface (brand book): Canela (display)
- **Recommendation for Tevello**: use Google Font substitutes since Tevello likely does not support licensed custom-font hosting. DM Serif Display in place of Canela for display, Inter in place of Apercu Pro for body. This matches the existing site pattern in `/css/prototype.css`.
- **If Tevello supports CSS injection** with custom @font-face declarations and hosted font files: load Apercu Pro and Canela via Tevello's custom CSS to match the marketing site. Confirm with Tevello support before promising this.

**Typography hierarchy** (mirror brand book page 39):
- Display headlines: Canela (or DM Serif Display), tracking +60, leading 33
- Body copy primary: Canela (or DM Serif Display) for editorial moments, tracking +60, leading 19
- Body copy secondary: Apercu Pro (or Inter), tracking 0, leading 24
- Floating Highlights: Apercu Pro Medium (or Inter Medium), tracking +11, leading 44, uppercase

**Floating Highlights treatment**: the brand book formalizes short uppercase phrases that float through layouts. Use sparingly inside Tevello (course landing, certificate, lesson section dividers). Examples appropriate to the Method: `A DEEPER BEAUTY · THE METHOD`, `HAIR WELLNESS FOUNDATIONS`, `BENEATH THE SURFACE`.

**Course thumbnail and section imagery**: pull from `/Users/dafina/Downloads/Folicelle Assets/`. Approved imagery includes the gummy renders, the editorial Folicelle web landing page composition (`Folicelle_WebLandingPage_MS_r1b.jpg`), and the four Folicell_Icon files. Avoid the legacy DNA-test imagery from the brand book; that product framing is deprecated. Use He Shou Wu botanical illustration treatment for Module 1.

**Member portal copy**: warm, first-person Dafina voice in welcome messages and onboarding. Voice rules per `tone-of-voice-sample.md`.

# Notifications

Member notifications enabled for:
- Welcome email on enrollment
- New bonus module released
- New lesson comment reply (for members who post)
- Certificate issued
- 7-day "you haven't visited in a while" nudge (Year 1 test)

Founder notifications (to Dafina):
- New community thread in the general Method Members channel
- Flagged community content from the moderator
- Weekly digest of activity

# Refund and access revocation rules

- Standalone $79: 90-day satisfaction promise per master handoff Section 1. Refund issued, access revoked, certificate held only if already earned.
- Foundation subscription: cancellation stops next renewal, access continues through paid period, then revoked automatically.
- Membership: cancellation stops next renewal, access continues through paid period.
- 14-day welcome trial: converts or revokes automatically per Shopify subscription rules.

Tevello access revocation is automatic via the Limited Time Access pattern. No manual intervention required for routine cancellations.

# Build sequence

1. Install Tevello Unlimited plan on the Folicelle Shopify store.
2. Create the course shell. Empty sections and lessons matching the structure above.
3. Configure brand customization.
4. Set up four Shopify products (Foundation, Method, Membership, Welcome trial). Confirm subscription variants per master handoff.
5. Link each variant to the Folicelle Method course via Tevello auto-enrollment with the access durations specified.
6. Create the community space with the four cohort sections.
7. Configure certificate template.
8. Configure notifications.
9. Test enrollment flow with a $0 internal product or a $79 sandbox purchase. Verify access duration is correctly applied to each variant.
10. Upload videos and PDFs as they are produced.

# Open Tevello questions

- Tevello community feature does not support fine-grained role permissions. Confirm with Tevello support whether community moderator can be granted edit privileges without granting course-edit access.
- Tevello certificate editor may not support custom typography. Confirm whether the certificate can carry the brand display font, or whether a static PNG certificate generated outside Tevello is the better path.
- Tevello mobile app: confirm that custom-domain courses render correctly in the Tevello mobile app, and whether Folicelle wants to surface the course there in v1.

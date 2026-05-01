# Folicelle — Design Preview Prototype

A clickable preview of the Folicelle launch pages for stakeholder review.

**Live preview:** [pending GitHub Pages deploy — URL goes here]

## What's in this preview

| Page | URL | Purpose |
|---|---|---|
| Homepage | `/` | Brand front door, three customer pathways |
| PDP | `/product/foundation.html` | Folicelle Foundation product detail page |
| Method | `/method.html` | Standalone $79 Hair Optimization Method course landing page |
| Assessment | `/assessment.html` | Placeholder for the live Hair Wellness Assessment quiz |
| Coming Soon | `/coming-soon.html` | Catch-all for sections not yet wired into the preview |

## What works

- Clickable navigation between the three real pages
- Mobile hamburger menu (try resizing your browser below 880 px)
- PDP: subscription tier selection updates the CTA + sticky cart price
- PDP: image carousel thumbnails change the main frame
- PDP: FAQ accordion (one open at a time)
- Method LP: FAQ accordion
- Anchor links scroll smoothly within each page
- Send Feedback link in footer opens email to Dafina

## What doesn't work (intentional)

- No real cart, no real checkout (this is a design preview, not a live store)
- Assessment quiz is a placeholder — the real tool decision is pending (Typeform / VideoAsk / Lovable)
- Subscribe / Login / Account / Cart icons all route to the Coming Soon page
- Email signup forms don't submit to Klaviyo yet
- Hero "play video" button is decorative — production swaps in a real `<video>` element

## How to give feedback

Tap **Send Feedback** at the bottom of any page. Opens an email to Dafina with the page name pre-filled.

## File structure

```
folicelle-prototype/
├── index.html                  Homepage
├── method.html                 Method LP
├── product/
│   ├── foundation.html         PDP
│   └── images/                 PDP-specific images
├── assessment.html             Assessment placeholder
├── coming-soon.html            Generic "coming with launch" page
├── images/                     Shared images (homepage, method)
├── css/
│   └── prototype.css           Shared additions: preview banner, mobile menu, feedback block
├── js/
│   └── prototype.js            Shared: mobile menu toggle, header scroll-shadow
├── sitemap-and-navigation.md   Full sitemap + navigation UX doc
└── README.md                   This file
```

## Production handoff

The prototype is the spec for production. Production goes into Shopify Stretch theme with custom Liquid sections — not as a port of this code. See `folicelle-shopify-build-spec.md` (sibling project folder) for the Shopify build plan.

---

© 2026 Folicelle, a Covet Brands Group company. Internal preview — not for public distribution.

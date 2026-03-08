# plan.md — The Healthtech Collective (THC) Website Implementation Plan (Updated)

## 1) Objectives (Current Status)
- ✅ Ship a responsive **7-page** marketing site matching the provided HTML skeleton + design guidelines (brand palette, typography, shadcn token overrides).
- ✅ Implement core backend data flows used by the site:
  - Events feed endpoint (seeded data for V1)
  - Partner inquiry form submission
  - (Also implemented) Newsletter subscribe + Contact endpoint for future use
  - MongoDB persistence for submitted forms
- ✅ Deliver a credible V1 UX:
  - Clear navigation (desktop + mobile)
  - Consistent component system (shadcn/ui + Tailwind)
  - Working CTAs
  - Forms with validation + success/error feedback (Sonner toasts)
- ✅ Validate via comprehensive testing: **100% pass rate** (backend + frontend).

---

## 2) Implementation Steps (Progress)

### Phase 1 — Core POC: Backend data flow + events feed (isolation) **COMPLETED**
**Goal:** prove the only failure-prone “dynamic” parts work end-to-end before building full UI.

**User stories (completed)**
1. ✅ As a visitor, I can submit a partnership inquiry and see a success confirmation.
2. ✅ As an admin/dev, I can verify inquiries are stored in MongoDB with timestamps.
3. ✅ As a visitor, I can submit a contact message and see clear validation errors.
4. ✅ As a visitor, I can load the Events page and see upcoming events returned by the backend.
5. ✅ As a developer, I can run a script to validate API health + data flow without the frontend.

**Steps (implemented)**
- ✅ Defined models + Mongo collections:
  - `partner_inquiries` (name, organisation, email, interest, message, created_at)
  - `contact_messages` (name, email, message, created_at)
  - `newsletter_subscribers` (email, subscribed_at)
  - (Events are seeded in-app for V1)
- ✅ Implemented FastAPI endpoints (all under `/api`):
  - `GET /` (API health)
  - `GET /events` (seeded JSON; supports filtering via `upcoming` query param)
  - `POST /partner-inquiry` (Mongo persistence)
  - `POST /contact` (Mongo persistence)
  - `POST /newsletter` (Mongo persistence)
- ✅ CORS configured.
- ✅ Backend verified via automated testing agent (100% pass rate).

**Deliverable:** ✅ working API endpoints + Mongo persistence + verified through testing.

---

### Phase 2 — V1 App Development (all 7 pages + shared layout) **COMPLETED**
**Goal:** build the full site around the proven backend flows; keep events as backend-seeded data.

**User stories (completed)**
1. ✅ As a visitor, I can navigate to all 7 pages via the top nav (desktop + mobile) and always know where I am.
2. ✅ As a visitor, I can click “Join the Community” CTAs and land on the Join page.
3. ✅ As a visitor, I can explore stakeholders on Home and then read deeper info on Who It’s For.
4. ✅ As a visitor, I can browse upcoming and past events and understand the event formats quickly.
5. ✅ As a visitor/partner, I can submit the Partner form and get reliable confirmation + error feedback.

**Steps (frontend) (implemented)**
- ✅ Foundation
  - Replaced CRA demo UI; implemented typography + shadcn HSL token overrides in `index.css`.
  - Added Google Fonts:
    - Playfair Display (headings)
    - DM Sans (body)
    - DM Mono (tags/meta)
  - Implemented React Router routes:
    - `/`, `/who-its-for`, `/events`, `/community`, `/join`, `/partner`, `/about`
  - Implemented shared layout:
    - Sticky Navbar with desktop links + mobile Sheet
    - Consistent Footer with links + social icons
- ✅ Shared components built
  - `LogoMarquee` (CSS animation; pause on hover; reduced-motion safe)
  - `FlywheelDiagram` (interactive segments + detail panel)
  - `StakeholderCard`, `StatsCounter`, `TestimonialCard`, `PricingTierCard`, `SectionTag`
- ✅ Page buildout (matches skeleton structure/copy)
  - Home: hero + marquee + flywheel + stakeholder grid + gallery + CTA banner
  - Who It’s For: stakeholder deep-dive tabs
  - Events: format cards + upcoming/past toggle + testimonials + chapters
  - Community: stats + network + benefits + engagement + testimonials + CTA
  - Join/Membership: pricing tiers + comparison table + FAQ accordion
  - Partner: partnership types + working form (POST `/api/partner-inquiry`)
  - About: story + team + mission/vision/values
- ✅ Data wiring
  - Created `/src/lib/api.js` to connect frontend to FastAPI.
  - Partner form uses client-side validation + Sonner toasts for outcomes.
  - Events page fetches from `GET /api/events` and supports upcoming/past filtering.

**End of phase validation:** ✅ testing agent confirmed navigation, UI rendering, API integration, and mobile responsiveness.

---

### Phase 3 — Testing, responsive check, polish **COMPLETED**
**Goal:** ensure the site is production-ready as a V1 marketing experience.

**User stories (completed)**
1. ✅ Consistent hover/focus states and premium readability.
2. ✅ Mobile nav sheet is usable and CTAs accessible.
3. ✅ Stats/testimonials scan well with strong hierarchy.
4. ✅ FAQ accordion smooth and accessible.
5. ✅ No console errors / regressions detected in test pass.

**Steps (completed)**
- ✅ Comprehensive QA via testing agent:
  - All routes reachable
  - All key components render
  - Partner form submit success flow works
  - Events fetch + toggle works
  - Mobile hamburger nav works
- ✅ Minor content rendering correction (em-dash escape issue addressed).

**End of phase validation:** ✅ 100% pass rate reported.

---

### Phase 4 — Optional: Luma events integration POC + rollout (only if credentials available) **NOT STARTED (Optional)**
**Goal:** replace seeded events with real Luma data safely.

**User stories (optional / future)**
1. As a visitor, I always see accurate upcoming events without manual updates.
2. As an admin/dev, failures in the external API don’t break the Events page.
3. As a visitor, I can click through to RSVP via Luma links.
4. As a visitor, I can filter events by city/format.
5. As a maintainer, I can configure API keys via env vars only.

**Steps (optional / future)**
- Research Luma API usage + rate limits.
- Implement backend caching + last-known-good fallback.
- Extend frontend events UI to support richer filtering + RSVP deep links.

---

## 3) Next Actions (Immediate)
All planned phases are complete. Optional next actions if desired:
1. Optional: add Luma integration + caching (Phase 4).
2. Optional: consolidate content into `/src/content/*.js` for easier editorial updates.
3. Optional: add SEO enhancements (OpenGraph images, meta descriptions per route) + sitemap.
4. Optional: add lightweight framer-motion entrance animations (respect reduced motion).

---

## 4) Success Criteria (Achieved)
- ✅ All 7 routes render with consistent nav/footer and match skeleton copy structure.
- ✅ Partner form validates, submits successfully, persists to Mongo, shows success/error feedback.
- ✅ Events page reliably loads events from backend (`GET /api/events`) and filters upcoming/past.
- ✅ Design system applied: brand palette, typography (Playfair/DM Sans/DM Mono), shadcn tokens, no centered layout.
- ✅ Testing: one full E2E pass with no broken links, no console errors, responsive nav works (100% pass rate).
# plan.md — The Healthtech Collective (THC) Website Implementation Plan

## 1) Objectives
- Ship a responsive 7-page marketing site matching the provided HTML skeleton + design guidelines (brand palette, typography, shadcn token overrides).
- Implement core backend data flows used by the site (Partner form + optional Contact, Events feed endpoint) with MongoDB persistence.
- Deliver a credible V1 UX: clear navigation, consistent components, working CTAs, forms with validation + success/error states.

---

## 2) Implementation Steps

### Phase 1 — Core POC: Backend data flow + events feed (isolation)
**Goal:** prove the only failure-prone “dynamic” parts work end-to-end before building full UI.

**User stories**
1. As a visitor, I can submit a partnership inquiry and see a success confirmation.
2. As an admin/dev, I can verify inquiries are stored in MongoDB with timestamps.
3. As a visitor, I can submit a contact message and see clear validation errors.
4. As a visitor, I can load the Events page and see upcoming events returned by the backend.
5. As a developer, I can run a single script to validate API health + data flow without the frontend.

**Steps**
- Define Pydantic models + Mongo collections:
  - `partner_inquiries` (name, organisation, email, interest, message, created_at)
  - `contact_messages` (name, email, message, created_at)
  - `events_cache` (optional, for static seed)
- Implement FastAPI endpoints (all under `/api`):
  - `POST /partner-inquiry`
  - `POST /contact`
  - `GET /events` (returns seeded JSON for V1; later switch to Luma integration)
  - keep existing `GET /` health.
- Add basic server-side validation (email format, required fields, length caps).
- Create a minimal Python test script in `/app/tests/poc_api.py`:
  - POST partner inquiry → assert 200 + returned id
  - POST contact → assert 200
  - GET events → assert list shape
- Run POC until stable; do not proceed until all endpoints pass and CORS is correct.

**Deliverable:** passing script + working API endpoints with Mongo persistence.

---

### Phase 2 — V1 App Development (all 7 pages + shared layout)
**Goal:** build the full site around the proven backend flows; keep events as backend-seeded data.

**User stories**
1. As a visitor, I can navigate to all 7 pages via the top nav (desktop + mobile) and always know where I am.
2. As a visitor, I can click “Join the Community” CTAs and land on the Join page.
3. As a visitor, I can explore stakeholders on Home and then read deeper info on Who It’s For.
4. As a visitor, I can browse upcoming and past events and understand the event formats quickly.
5. As a visitor/partner, I can submit the Partner form and get a reliable confirmation + error feedback.

**Steps (frontend)**
- Foundation
  - Replace CRA demo Home and styles; implement typography + shadcn HSL token overrides in `index.css`.
  - Add Google Fonts (Playfair Display, DM Sans, DM Mono).
  - Implement React Router routes:
    - `/`, `/who-its-for`, `/events`, `/community`, `/join`, `/partner`, `/about`
  - Create `SiteLayout`: sticky nav (NavigationMenu + mobile Sheet) + footer; consistent container.
- Shared components (minimal set for V1)
  - `LogoMarquee` (CSS animation; pause on hover; reduced-motion safe)
  - `FlywheelDiagram` (V1: clickable segments show details panel; no complex SVG required yet)
  - `StakeholderCard`, `TestimonialCard`, `PhotoMosaic`
  - `PricingTierCard`, `ComparisonTable`
- Page buildout (match skeleton copy/structure)
  - Home: hero + marquee + flywheel + stakeholder grid + gallery + CTA banner
  - Who It’s For: Tabs/Accordion deep dives
  - Events: formats grid + upcoming events (from `GET /api/events`) + past gallery + testimonials + chapters
  - Community: stats + network logos row + benefits + engagement cards + testimonials + CTA
  - Join/Membership: pricing tiers + comparison table + FAQ accordion
  - Partner: partnership types list + working form (POST `/api/partner-inquiry`)
  - About: story section + team placeholders + mission/vision/values
- Data wiring
  - Create `/src/lib/api.js` with axios instance using `REACT_APP_BACKEND_URL`.
  - Partner form: react-hook-form + zod validation + toast (sonner) on success/failure.
  - Events page: fetch events; show loading/empty/error states.

**End of phase validation**
- Run testing agent for one end-to-end pass across all pages (navigation, responsive, forms, events fetch).

---

### Phase 3 — Polish + content hardening + component upgrades
**Goal:** improve perceived quality and robustness while keeping scope MVP.

**User stories**
1. As a visitor, I see consistent hover/focus states and the site feels premium and readable.
2. As a visitor on mobile, I can use the nav sheet easily and CTAs remain accessible.
3. As a visitor, I can scan stats/testimonials quickly with good spacing and hierarchy.
4. As a visitor, I can use the FAQ accordion smoothly with keyboard navigation.
5. As a maintainer, I can update content (logos, events seed, testimonials) from single data files.

**Steps**
- Add entrance animations (light framer-motion) + respect `prefers-reduced-motion`.
- Refine FlywheelDiagram to SVG + hover highlight (if time) while keeping click-to-detail.
- Consolidate page content into data modules (`/src/content/*.js`) to reduce hardcoded JSX.
- Improve SEO basics: per-page titles/meta, OpenGraph defaults.
- Add image loading optimizations (AspectRatio, lazy loading), consistent rounded corners.

**End of phase validation**
- Testing agent: regression pass + responsive checks + form validation edge cases.

---

### Phase 4 — Optional: Luma events integration POC + rollout (only if credentials available)
**Goal:** replace seeded events with real Luma data safely.

**User stories**
1. As a visitor, I always see accurate upcoming events without manual updates.
2. As an admin/dev, failures in the external API don’t break the Events page.
3. As a visitor, I can click through to RSVP via Luma links.
4. As a visitor, I can filter events by city/format.
5. As a maintainer, I can configure API keys via env vars only.

**Steps**
- Web research best-practices for Luma API usage + rate limits.
- Create isolated backend script to fetch events and confirm schema.
- Implement backend caching + fallback to last-known-good events.
- Update frontend to support filters + RSVP links.

---

## 3) Next Actions (immediate)
1. Implement backend endpoints: `POST /partner-inquiry`, `POST /contact`, `GET /events` + Mongo persistence.
2. Add `/app/tests/poc_api.py` and run until green.
3. Replace frontend App with router + `SiteLayout` (nav/footer) and empty page shells.
4. Implement Partner page form wired to backend + sonner toasts.
5. Implement Events page fetch from backend with loading/empty/error states.

---

## 4) Success Criteria
- All 7 routes render with consistent nav/footer and match skeleton copy structure.
- Partner form: validated, submits successfully, persists to Mongo, shows success/error feedback.
- Events page: reliably loads upcoming events from backend (`GET /api/events`) with graceful fallbacks.
- Design system applied: brand palette, typography (Playfair/DM Sans/DM Mono), shadcn tokens, no centered layout.
- Testing: one full E2E pass with no broken links, no console errors, responsive nav works.
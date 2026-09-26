# Tatay Tim's Refrigeration and Air-conditioning Service

Mobile-first concept website for a local air-conditioning and refrigeration service business.

This is a public concept preview for client review, not a finished or approved business website. Preview mode keeps it out of search indexing but does not restrict access. The quote form is a demo, and no contact details are configured.

The tentative navy, cream, and red palette can be adjusted in `src/data/client.config.ts`.

## Stack

- Astro 7 with static output
- Tailwind CSS 4 through the Vite plugin
- TypeScript client configuration
- Minimal browser JavaScript for form behavior
- Optional GA4 traffic and lead-action tracking

The downloaded `hvac-new-1.0.0` directory remains reference material only. The production page does not load its Bootstrap, jQuery, plugin bundle, or stock images.

## Run locally

Requires Node.js 22.19 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Checks and build

```bash
npm run check
npm run build
npm run preview
```

`npm run build` runs Astro diagnostics before producing `dist/`.

## Personalize a prospect demo

Business content lives in one file:

```text
src/data/client.config.ts
```

For a first pass, update only that file and approved assets in `public/media/`.

1. Replace business name, logo letters, tagline, and preview label.
2. Set the four brand colors.
3. Replace phone, email, Messenger, and WhatsApp values.
4. Confirm service names, descriptions, service areas, and hours.
5. Choose `hero.variant: "graphic"` or `hero.variant: "media"`.
6. For a media hero, provide an approved image or video and required accessibility metadata.
7. Replace or hide every field marked `TODO_CLIENT_CONFIRMATION`.
8. Keep `site.previewMode: true` for private concept previews.
9. Keep `form.mode: "demo"` until a real endpoint is approved, configured, and tested.
10. Run checks and test every CTA on a phone-sized viewport.

### Analytics

GA4 is ready to configure in `src/data/client.config.ts` at `analytics.ga4MeasurementId`.
Set it to the client's measurement ID (format `G-XXXXXXXXXX`) after creating a GA4 web data stream.
Tracking loads only in production builds when preview mode is off and a valid measurement ID is set.
The template sends `contact_click` events for phone and messaging links, plus `generate_lead` after a configured enquiry endpoint accepts a form submission.
Events never include submitted form values or contact details.
Create a GA4 property for each client and have the client retain account ownership.

### Hero media requirements

Image configuration requires `src`, meaningful `alt`, and recorded permission. Video configuration requires `src`, a poster image, and captions when speech carries meaning. Use controls, muted inline playback if autoplay is later introduced, and a reduced-motion-safe fallback.

The reference theme images are not production assets. Do not move them into `public/` without separate license and client-usage confirmation.

## Fields requiring written approval

Search `src/data/client.config.ts` for:

```text
TODO_CLIENT_CONFIRMATION
```

Written confirmation is required before publishing:

- years of experience and credentials;
- warranties, workmanship promises, and exclusions;
- fees, prices, promos, and quote rules;
- response-time or emergency-service claims;
- business hours and exact service coverage;
- customer reviews and approved attribution;
- logos, job photos, technician photos, and videos;
- licenses, awards, accreditations, and performance claims.

Delete or hide a claim when confirmation is unavailable. Do not replace it with an assumption.

## Form modes

### Demo mode

`form.mode: "demo"` validates fields and displays an enquiry preview. It explicitly says nothing was sent and does not store the submitted data.

### Endpoint mode

`form.mode: "endpoint"` submits `FormData` to the configured endpoint. Enable it only after:

- the endpoint and recipient are approved;
- success and failure behavior is tested;
- privacy/contact information is published;
- the client approves collection of customer information.

## Pre-demo checklist

- [ ] Prospect gave permission to receive a concept preview.
- [ ] Preview is clearly labelled as a concept, not a finished website.
- [ ] Business identity and spelling match approved/public information.
- [ ] Phone and message links were tested on mobile.
- [ ] Services and service areas were confirmed or visibly marked as placeholders.
- [ ] Every `TODO_CLIENT_CONFIRMATION` item was replaced, hidden, or left conspicuously labelled.
- [ ] Every logo, photo, video, and review has usage permission.
- [ ] Demo form says nothing is sent.
- [ ] `site.previewMode` remains `true`; the page emits `noindex,nofollow`.
- [ ] Both narrow mobile and desktop layouts were checked.
- [ ] `npm run check` passes.
- [ ] `npm run build` passes.

## Before launch

- [ ] Obtain client approval for final copy, claims, assets, and contact channels.
- [ ] Replace the example canonical URL and enable structured data only with real confirmed business fields.
- [ ] Configure and test a real form endpoint, or remove the form.
- [ ] Add the correct privacy/contact notice.
- [ ] Set `site.previewMode: false` only when the site is ready for indexing.
- [ ] Test calls, Messenger, WhatsApp, email, and form delivery on the production URL.

## Repo-level agent tools

- `.agents/skills/userinterface-wiki/` contains the requested UI/UX review skill.
- `AGENTS.md` directs agents to use zero-setup `npx -y lavish-axi` for visual planning and browser-based design review.

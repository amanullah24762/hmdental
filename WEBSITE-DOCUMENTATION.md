# Family Dental Clinic — Website Documentation

**Location:** Mirpur, AJK  
**Document date:** 21 October 2026  
**Purpose:** Project overview, feature documentation, and handover notes

## 1. Project overview

The website introduces Family Dental Clinic, presents dental service categories, and helps visitors contact the clinic or prepare an appointment request.

The page structure and navigation take inspiration from the Al Qarn Dental Consultants reference website and the supplied screenshots. The website retains Family Dental Clinic branding, contact information, and local imagery already used in the project.

The project is an independent website demonstration. The footer identifies it as a demo rather than an official clinic website.

## 2. Technology

| Area | Implementation |
| --- | --- |
| Framework | Next.js App Router |
| Reported Next.js version | 16.4.2 |
| UI | React components |
| Styling | CSS with responsive media queries |
| Local image delivery | Next.js Image optimization |
| External images in the homepage Photo component | Next.js optimization restricted to three exact existing image URLs |
| Booking interface | Client-side, three-step dialog |
| Booking handoff | WhatsApp message opened for the visitor to review and send |
| Server-side booking storage | Not implemented |

## 3. Pages and navigation

The main navigation includes Home, Pages, Services, and Contact.

### Pages dropdown

| Label | Route | Main content |
| --- | --- | --- |
| About our clinic | `/about` | Clinic introduction, approach tabs, family care section, service cards, visit checklist, and directions |
| Services | `/services` | Searchable service cards, service category tabs, visit checklist, and enquiry planner |
| FAQ | `/faq` | Searchable questions and answers, expandable answers, and reasons for a dental visit |

### Services dropdown

| Service | Route |
| --- | --- |
| Dentist consultation | `/services/dentist-consultation` |
| Teeth whitening | `/services/teeth-whitening` |
| Orthodontics | `/services/orthodontics` |
| Cosmetic Dentistry | `/services/cosmetic-dentistry` |
| Root canals | `/services/root-canals` |
| Crowns & Bridges | `/services/crowns-bridges` |
| Dental implants | `/services/dental-implants` |
| Tooth Extractions | `/services/tooth-extractions` |

Contact links lead to `/#contact`. Service detail routes are generated from the shared services data. An unknown service slug returns the not-found page.

## 4. Main features

### Navigation

- Separate Pages and Services dropdowns.
- Desktop hover and button interaction.
- Expandable mobile navigation.
- Escape-key handling and focus support.
- Dropdown chevrons aligned with their labels.

### Service cards

Interior service grids use the homepage's flip-card styling and interaction pattern. This includes the Services page, About page, and related service cards.

- Hover reveals service details on desktop.
- Tap opens details on touch screens.
- Cards show a service title and discussion topics.
- A close control returns to the front face.
- Escape closes the details and returns focus to the card control.
- “Read more” opens the corresponding service detail page.

Homepage card enquiries open the shared booking popup with their treatment context. Interior cards retain links to service detail routes.

### Service search and category tabs

The Services page filters cards by service title and description as the visitor types. It displays a result count, a clear control, and an empty state when no services match.

Individual service lists have three selectable categories:

1. Pediatric Dentistry
2. Adult Dentistry
3. Dental prosthetics

These categories are demonstration content. Actual treatment availability should be confirmed with the clinic.

### FAQs

The FAQ page includes searchable, expandable answers covering appointments, fees, location, family visits, remote consultations, preparation, cancellations, and website booking behavior.

### First-visit checklist

Visitors can mark preparation items as complete. A progress indicator shows the completed count, and a completion message appears when all items are checked.

Checklist state is temporary and is not stored as a patient record or persisted after a reload.

### Clinic directions

The About page includes a location section with the address, arrival guidance, phone link, and a Google Maps directions link. The existing homepage also includes contact and map sections.

## 5. Three-step booking popup

A floating **Book a Visit** button is included through the root layout so it appears across pages.

### Step 1 — Your care

The visitor chooses one of the eight service categories or **Not sure? Help me choose**. A selection is required before continuing.

### Step 2 — Your time

The visitor selects a preferred date and one of these time periods:

- Morning
- Afternoon
- Evening

The date field uses the visitor's local date as its minimum when the popup opens and recalculates it on every continuation or WhatsApp submission, including retry submissions. These selections represent preferences, not live clinic availability.

### Step 3 — Your details

The visitor enters their name and mobile number. A summary shows the selected service, date, and time. Back and edit controls allow changes.

Basic validation checks that the name is not blank and that the mobile number contains 10–15 digits with permitted formatting characters. It does not verify ownership of the phone number.

### WhatsApp handoff

Selecting **Continue to WhatsApp** opens a prepared message addressed to the existing clinic number:

**+92 320 3771995**

The message contains the visitor's name, mobile number, selected service, preferred date, preferred time, and a request to confirm availability and the consultation fee.

The visitor must send the message in WhatsApp. The website does not send it automatically, reserve a slot, or confirm an appointment.

If the WhatsApp window does not open, the interface provides an explicit link to open it again and an option to copy the request. The clinic's WhatsApp availability at this number has not been verified.

### Booking status and storage

- Appointment confirmation happens directly with the clinic.
- There is no calendar availability integration.
- There is no booking database, admin dashboard, payment flow, or automated confirmation service.
- Details remain in component state until passed to WhatsApp by the visitor's action; no application storage is configured for them.
- Changing pages or reloading may reset interface state. It should not be treated as a saved booking.

## 6. Shared appointment entry points

Homepage, header, interior-page and service-page booking actions now open the same global BookingWidget through BookingAction. The old homepage dialog is retired. VisitPlanner retains its section, introduction and call link, but delegates booking to the shared popup rather than maintaining another form.

Matching service titles/slugs are preselected. Existing homepage consultation and root-canal labels have explicit mappings. Other enquiry topics are retained in the summary and WhatsApp message under “Help me choose” rather than inventing services.

The popup retains the copy-message fallback. Phone actions remain separate. Opening a request returns to step 1; date, time, name and mobile remain temporary in-memory form state.

## 7. Images and loading behavior

### Local images

Homepage photography and interior clinic photography use Next.js Image components with:

- Responsive `sizes` hints so the browser can select an appropriate image variant.
- Quality set to 75.
- Lazy loading for secondary images.
- Eager loading and high fetch priority for designated main images.
- Asynchronous decoding.
- Width and height attributes, with presentation controlled by existing CSS.

The homepage Photo component retains its fallback display for image loading failures.

### External image error and fix

A runtime error occurred when the homepage Photo component passed an image from `alqarndentalconsultants.pk` to Next.js Image without a configured remote host.

The previous temporary `unoptimized` bypass has been removed. `next.config.js` permits only HTTPS requests for the three existing reference image paths, with no query strings or redirects. Homepage reference photography and comparison images use Next.js Image. No replacement images were downloaded.

Homepage and interior images have accessible failure states; interior frames preserve the existing responsive dimensions. Comparison failure reserves the comparison aspect ratio. Existing gallery and comparison notices are visible again. Host availability and the actual optimized response still require runtime verification.

No measured loading-speed results are available for the latest implementation. AVIF output has not been explicitly configured as part of these changes.

## 8. Layout and accessibility

Shared alignment rules cover navigation, text, headings, cards, action buttons, input fields, footers, and the booking flow.

Implemented accessibility provisions include:

- Labels for form inputs.
- Semantic buttons and links.
- Radio inputs for service and time selections.
- Native dialog behavior for the booking popup.
- Keyboard focus styling and Escape support.
- Status messages for search results, checklist progress, and copied text.
- Reduced-motion handling for added effects.

Mobile CSS adjusts navigation, grids, form layouts, popup dimensions, and floating controls. These provisions have not undergone a complete accessibility or browser audit.

## 9. Important files

| File | Responsibility |
| --- | --- |
| `app/layout.js` | Root layout, shared styles, and global booking widget |
| `app/page.js` | Homepage, existing treatment cards, and Photo component |
| `app/globals.css` | Main website styles, interior layouts, and enquiry planner styles |
| `app/navigation.css` | Dropdown arrow alignment |
| `app/alignment.css` | Shared text, card, button, form, and layout alignment |
| `app/booking.css` | Booking popup and launcher styles |
| `app/components/SiteHeader.js` | Shared desktop and mobile navigation |
| `app/components/services.js` | Service names, slugs, descriptions, and discussion topics |
| `app/components/InnerPages.js` | Interior page components and shared service grid |
| `app/components/ServiceFlipCard.js` | Interactive interior service cards |
| `app/components/VisitExtras.js` | Enquiry planner, checklist, and location section |
| `app/components/BookingWidget.js` | Three-step booking popup and WhatsApp handoff |
| `app/components/OptimizedClinicImage.js` | Responsive interior image component |
| `app/about/page.js` | About route and page metadata |
| `app/services/page.js` | Services route and page metadata |
| `app/services/[slug]/page.js` | Individual service routes and metadata |
| `app/faq/page.js` | FAQ route and page metadata |
| `app/components/clinic.js` | Shared existing contact information |
| `app/components/BookingAction.js` | Shared booking trigger and service context |
| `app/components/ImageFallback.js` | Accessible image failure presentation |
| `next.config.js` | Exact remote image allowlist |
| `public/images/` | Local clinic imagery and logo |

## 10. Updating content

### Services

Update `app/components/services.js` to change interior service labels, descriptions, discussion topics, or slugs. The navigation and interior service grids use this data.

The homepage's original treatment data is separate in `app/page.js`; update it separately when changing those categories.

### Phone number and WhatsApp

Update `app/components/clinic.js`. The homepage, header, interior pages, visit sections and widget import the shared contact values.

The WhatsApp number in `clinic.js` uses digits only with the country code: `923203771995`.

### Address and maps

Update the address, map URL and existing map embed query in `clinic.js` after clinic confirmation.

### Images

Local image files are stored in `public/images/`. Homepage sources are defined in `app/page.js`; interior images are referenced in `InnerPages.js`.

The supplied local photography is described in existing alt text as illustrative or AI-generated. Do not present it as verified photographs of clinic staff or patients without replacing or confirming it.

## 11. Validation status

Verification was subsequently authorized and performed against a local production build using the installed Chrome browser and a dependency-free Chrome DevTools Protocol harness. No dependencies were installed and nothing was deployed.

| Check | Observed result |
| --- | --- |
| `npm run build` | Passed before verification and again after the final fixes; 14 generated entries, including framework routes |
| Page responses | Home, About, Services, FAQ and all eight services returned HTTP 200 |
| Unknown service | Returned HTTP 404 |
| Metadata | All 12 page routes rendered `noindex` |
| Navigation | Inspected internal route destinations and checked rendered anchor targets |
| Shared booking | Header entry checked on all 12 routes; booking-labelled CTAs exercised on Home, About, Services, FAQ and consultation detail |
| Service context | All eight service-page selections matched their page titles; homepage consultation alias also passed |
| Validation | Missing service/date/time/name, whitespace-only names, malformed phones and past dates were rejected with invalid-field focus |
| Midnight boundary | Advancing the browser date after preparation caused retry submission to return to the date field without opening WhatsApp again |
| WhatsApp message | Recipient, name, number, service, date/time and confirmation-request wording checked with `window.open` intercepted; no message sent |
| Responsive geometry | No horizontal document overflow on five representative pages at 320, 375, 768 and 1024 pixels; dialogs fit these viewports |
| Desktop geometry | No horizontal document overflow on all 12 routes at 1440 pixels |
| Image fallback | Simulated interior image error retained the 460 × 410 frame and an accessible image-unavailable label |
| Remote image optimizer | All three allowed reference images returned HTTP 200 with `image/webp`; an unapproved hostname returned HTTP 400 |
| Local image optimizer | Sample local clinic image returned HTTP 200 with `image/webp` |
| Notices and navigation | Gallery/comparison notices visible; mobile dropdown opened |
| Accessibility | Nine service radio names present in Chrome's accessibility tree; keyboard card activation and focus return passed |
| Final dialog focus | 20 Tab and 20 Shift+Tab presses on each of three steps remained inside the dialog; Escape restored the trigger |
| Console/runtime | No uncaught JavaScript exceptions captured by the completed browser harnesses |
| Source hygiene | Scoped `git diff --check` passed; package manifests unchanged |

The initial browser pass recorded 163 of 165 checks passing. Its two early focus-return failures passed three repeated trials each after explicitly waiting for dialog focus. A subsequent keyboard check required sending the complete Enter key event. Separate repeated Tab testing identified a real end-of-dialog focus escape; explicit focus wrapping was added and all ten final targeted checks passed. Screenshot review also found and corrected missing whitespace in the mobile welcome heading.

Optimized 640-pixel image response sizes observed were 23,916 bytes for the local sample, 14,286 bytes for the reference hero, 9,678 bytes for the after comparison and 8,930 bytes for the before comparison. These are response-size observations, not a Lighthouse score or a guarantee of loading speed.

Desktop Services and mobile Services/booking screenshots were reviewed. Some follow-up checks blocked the unrelated Google Maps iframe to keep the browser session responsive. This does not verify map-provider availability, every visual state, real-device touch behavior, Safari/Firefox, or a full assistive-technology audit.

The project has no configured lint or automated test script. Temporary verification scripts were used outside the project. Next.js still emits a non-fatal workspace-root warning because parent and project lockfiles both exist; no lockfiles or tracing settings were changed.

## 12. Suggested handover checks

Complete these clinic and real-device checks before public launch:

- Confirm clinic ownership details, phone number, WhatsApp availability, address, and actual services.
- Check each page and dropdown on desktop and mobile.
- Exercise flip cards with mouse, keyboard, and touch.
- Check searches, empty states, category tabs, and checklist progress.
- Walk through booking validation, editing, closing, and reopening.
- Confirm the WhatsApp message reaches the intended clinic account after the visitor sends it.
- Check image delivery, failure states, and actual loading performance.
- Confirm every appointment entry point opens the shared popup and retains the intended service context.
- Review demo labels and the root metadata's existing `noindex` settings before an official launch.

## 13. Possible next phase

If the clinic needs confirmed online bookings, the next phase would require clinic-managed availability, persistent booking records, conflict prevention, and confirmation handling. Doctor selection, cancellation links, and reminders can be designed around that booking system.

These capabilities are future work and are not included in the current WhatsApp enquiry flow.

## 14. Launch gate

Root concept metadata and `robots: { index: false, follow: false }` remain unchanged. No production domain was supplied. No canonical URL or domain-based sitemap has been invented; standalone robots/sitemap files were absent during source inspection. Confirm the production domain and obtain explicit launch approval before preparing these outputs or changing indexing settings.

Local build and Chrome verification results are recorded above. The clinic must still confirm that the existing WhatsApp recipient is active, approve the production domain and launch, and verify the actual WhatsApp handoff on its intended phones. No live message or production change was made.

# LifeCare Multispeciality Hospital — Static Website

A premium, fully responsive hospital website built with **HTML5, CSS3 and vanilla JavaScript only**.
No frameworks, no build step, no backend. Open `index.html` and it works.

**Live demo:** https://lifecarehospitaldemo.pages.dev · **Repo:** https://github.com/Shreeram214/DemoHospital

> ⚠️ **Demonstration content.** Doctor profiles, leadership, statistics, testimonials and
> accreditations are fictional samples. Forms validate in the browser but **do not submit
> anything**. Replace sample content with verified hospital information before going live.

---

## Pages

| Page | File | Notes |
|---|---|---|
| Home | `index.html` | Hero, stats, about, why-us, departments, featured doctors, conditions, facilities, testimonials, FAQ, CTA, map |
| About Us | `about.html` | Overview, journey timeline, mission/vision/values, leadership, infrastructure, accreditations |
| Departments | `departments.html` | 12 departments with category filter + search |
| Department Details | `department-details.html?id=cardiology` | One reusable page, content loaded by `id` |
| Doctors | `doctors.html` | Search by name, filter by department & specialty (`?dept=` supported) |
| Doctor Profile | `doctor-details.html?id=arjun-mehta` | One reusable page, content loaded by `id` |
| Treatments & Conditions | `treatments.html` | Grouped by department, filter + search (`?q=` / `?dept=`) |
| Facilities | `facilities.html` | Emergency, ICU, OT, diagnostics, lab, radiology, pharmacy, ambulance, rooms, OPD/IPD |
| Contact | `contact.html` | Contact details, demo form with validation, click-to-load Google Map, directions |
| Appointment | `appointment.html` | Department → doctor cascade, date/time, validation, demo summary (`?dept=&doctor=` prefill) |
| 404 | `404.html` | Used automatically by Cloudflare Pages |

## Project structure

```
hospital-website/
├── index.html … appointment.html   10 pages + 404.html
├── css/
│   ├── style.css         Design tokens + all components (mobile-first)
│   ├── responsive.css    Tablet / desktop breakpoints, print styles
│   └── animations.css    Scroll reveal, subtle motion, reduced-motion support
├── js/
│   ├── main.js           SITE config, icons, header/footer, nav, scroll effects, FAQ, form validation
│   ├── departments.js    DEPARTMENTS + FACILITIES data and their page renderers
│   ├── doctors.js        DOCTORS data, directory filters, profile page
│   ├── treatments.js     CONDITIONS data, treatments directory
│   └── appointment.js    Appointment + contact form logic (front-end only)
├── assets/
│   ├── icons/favicon.svg
│   ├── images/ doctors/ departments/   Local fallback placeholders
├── _headers              Cloudflare Pages security & cache headers
├── robots.txt, sitemap.xml
└── README.md
```

## Editing content (no coding experience needed)

| What to change | Where |
|---|---|
| Hospital name, phone, email, address, hours, social links, map location | `SITE` object at the top of `js/main.js` |
| Colours & fonts | `:root` variables at the top of `css/style.css` |
| Departments (text, conditions, treatments, image) | `DEPARTMENTS` in `js/departments.js` |
| Facilities | `FACILITIES` in `js/departments.js` |
| Doctors (name, photo, qualification, timings…) | `DOCTORS` in `js/doctors.js` — set `featured: true` to show on Home |
| Conditions / treatments info | `CONDITIONS` in `js/treatments.js` |
| Navigation menu | `navItems()` in `js/main.js` |

The header, footer, navigation menus, footer links, filters and detail pages all update automatically
from this data — add a department or doctor once and it appears everywhere.

### Images
Images are free-licence photos served directly from the **Unsplash CDN** (`images.unsplash.com`), referenced by
photo ID (e.g. `"1530026405186-ed1f139313f8"`). `LC.img(id, width, height)` builds a resized, compressed URL.
To use the hospital's own photos, put files in `assets/doctors/` or `assets/images/` and replace the `src`
(or change the `photo`/`image` value to a local path and adjust `LC.img` accordingly).
If any remote image fails to load, a local placeholder from `assets/` is shown automatically — no broken images.

## Run locally

**Option 1 — just open it:** double-click `index.html`. Everything works from the file system.

**Option 2 — local web server** (recommended, mirrors production):

```powershell
cd hospital-website
python -m http.server 8080
```
Then open <http://localhost:8080>. (Or use `npx serve .` or VS Code's *Live Server* extension.)

## Deploy to Cloudflare Pages

**A. Drag-and-drop (fastest, no Git)**
1. Log in to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Name the project (e.g. `lifecarehospitaldemo`) and upload the `hospital-website` folder (or a ZIP of it).
3. Click **Deploy** — the site is live at `https://<project>.pages.dev`.

**B. From GitHub (auto-deploys on every push)** — this is how the live demo is set up (Pages project `lifecarehospitaldemo` → repo `DemoHospital`, branch `main`).
1. Push this folder to a GitHub repository.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → choose the repo.
3. Build settings: **Framework preset:** None · **Build command:** *(leave empty)* · **Build output directory:** `/`
   (or `hospital-website` if it is a sub-folder of the repo).
4. **Save and Deploy.**

**C. From the command line**
```powershell
npx wrangler pages deploy hospital-website --project-name lifecarehospitaldemo
```

After deploying, add a custom domain under **Pages project → Custom domains**, and update the domain in
`sitemap.xml` and `robots.txt`.

## Making the forms live (optional)
The appointment and contact forms currently only validate in the browser. To receive real submissions,
post the validated data from `js/appointment.js` to a service such as a Cloudflare Pages Function,
Formspree, or the hospital's HIS/CRM — and add a proper privacy notice for patient data.

## Features checklist
- Responsive mobile-first layout, hamburger menu, mega dropdown, mobile quick-call bar
- Active navigation highlighting, smooth scrolling, back-to-top button
- Scroll reveal animations & animated counters (respect *reduce motion*)
- Doctor search by name, filters by department/specialty; condition filter & search
- Dynamic department and doctor pages via query parameters
- Appointment form validation (Indian mobile format, OPD days, date range, required fields)
- FAQ accordion, click-to-load Google Map, directions link
- Semantic HTML, skip link, ARIA labels, keyboard support, AA colour contrast
- SEO: unique titles & meta descriptions, Open Graph, JSON-LD Hospital schema, sitemap, robots.txt

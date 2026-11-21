/* =========================================================================
   LifeCare Multispeciality Hospital — main.js
   -------------------------------------------------------------------------
   Shared behaviour for every page:
     1. SITE config  ← edit hospital name, phone, email, address here
     2. Icon library (inline SVG, no external requests)
     3. Helpers (image URLs, query params, escaping)
     4. Header, mobile menu & footer (rendered once, used on all pages)
     5. Navigation: dropdowns, hamburger, active link highlighting
     6. Scroll effects: sticky header, reveal animations, counters, back-to-top
     7. FAQ accordion, map loader, image fallback
     8. Reusable form validation (contact + appointment forms)
   All functions are exposed on the global `LC` object for other scripts.
   ========================================================================= */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* -----------------------------------------------------------------------
     1. SITE CONFIGURATION — change these values to rebrand the website.
     ----------------------------------------------------------------------- */
  const SITE = {
    name: "LifeCare",
    fullName: "LifeCare Multispeciality Hospital",
    tagline: "Compassionate Care. Advanced Medicine. Better Lives.",
    phone: "+91 79724 07907",
    phoneHref: "+917972407907",
    emergencyPhone: "+91 79724 07907",
    emergencyHref: "+917972407907",
    ambulance: "108",                      // National ambulance helpline (India)
    email: "shreeram.developer214@gmail.com",
    hours: "Mon – Sat: 8:00 AM – 8:00 PM",
    hoursShort: "OPD Mon–Sat, 8 AM – 8 PM",
    emergencyHours: "Emergency & Pharmacy: 24 × 7",
    address: "LifeCare Avenue, Sector 21, Pune, Maharashtra 411001, India",
    addressShort: "Pune, Maharashtra, India",
    mapQuery: "Pune, Maharashtra, India",  // used for the Google Maps embed & directions
    founded: 2006,                          // sample value — used for "years of care"
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      youtube: "https://www.youtube.com/"
    }
  };

  /* -----------------------------------------------------------------------
     2. ICON LIBRARY — stroke icons (24×24), Lucide-inspired.
     Usage in HTML:  <i data-icon="phone"></i>
     Usage in JS:    LC.icon("phone")
     ----------------------------------------------------------------------- */
  const ICONS = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>',
    heartPulse: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
    brain: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>',
    bone: '<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5z"/>',
    stethoscope: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
    baby: '<path d="M9 12h.01M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>',
    venus: '<circle cx="12" cy="9" r="6"/><path d="M12 15v7M9 19h6"/>',
    sparkles: '<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/><path d="M19 3v4M17 5h4"/>',
    ribbon: '<path d="M12 13c-2-3-4-5-4-8a4 4 0 0 1 8 0c0 3-2 5-4 8z"/><path d="m10 10-5 10 3-1 1.5 3L13 14"/><path d="m14 10 5 10-3-1-1.5 3L11 14"/>',
    stomach: '<path d="M8 3v4a4 4 0 0 0 4 4h1a5 5 0 0 1 5 5 5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-1"/><path d="M14 3v2"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    ear: '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    ambulance: '<path d="M10 10H6M8 8v4"/><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.68-.95l-1.92-.64a1 1 0 0 1-.58-.5l-1.54-3.08A1 1 0 0 0 16.38 8H14"/><path d="M9 18h6"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    bed: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
    flask: '<path d="M9 3h6M10 3v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9.5V3"/><path d="M7 15h10"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3.5"/>',
    pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"/><path d="m8.5 8.5 7 7"/>',
    surgery: '<path d="M3 21l8.5-8.5"/><path d="M12.2 6.2 17.5 1l5.5 5.5-5.2 5.3a2 2 0 0 1-2.8 0l-2.8-2.8a2 2 0 0 1 0-2.8z"/><path d="m8 15 1 1"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 10h3l1.5-3 2.5 6 1.5-3H18"/>',
    hospital: '<path d="M12 6v4M10 8h4"/><path d="M14 14h-4M14 18h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    userDoc: '<circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/><path d="M12 14v4M10 16h4"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    calendarCheck: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    arrowUp: '<path d="M12 19V5M5 12l7-7 7 7"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" fill="currentColor" stroke="none"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><path d="M12 9v4M12 17h.01"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    graduation: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    lungs: '<path d="M12 4v8"/><path d="M12 12c-1 1-2 1.5-3 1.5"/><path d="M12 12c1 1 2 1.5 3 1.5"/><path d="M8.5 7C6 7 3 10 3 16c0 2.5 1.5 4 3.5 4S10 18.5 10 16v-5"/><path d="M15.5 7C18 7 21 10 21 16c0 2.5-1.5 4-3.5 4S14 18.5 14 16v-5"/>',
    thermometer: '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/>',
    navigation: '<path d="m3 11 19-9-9 19-2-8-8-2z"/>',
    clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h6"/>',
    microscope: '<path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
    syringe: '<path d="m18 2 4 4M17 7l3-3M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5M9 11l4 4M5 19l-3 3M14 4l6 6"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    language: '<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>',
    rupee: '<path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a5 5 0 0 0 0-10"/>',
    video: '<path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
    filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54z"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    handHeart: '<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12z"/>',
    lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.76-2.02-2-2H4c-1.25 0-2 .75-2 1.97V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .01-1 1.03V20c0 1 0 1 1 1z" fill="currentColor"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.76-2.02-2-2h-4c-1.25 0-2 .75-2 1.97V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    youtube: '<path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>'
  };

  /** Returns an inline SVG string for the given icon name. */
  function icon(name, extraClass) {
    const body = ICONS[name] || ICONS.plus;
    return '<span class="ico' + (extraClass ? " " + extraClass : "") + '" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + body + "</svg></span>";
  }

  /** Replaces every <i data-icon="name"> inside root with its SVG. */
  function hydrateIcons(root) {
    (root || document).querySelectorAll("i[data-icon]").forEach(function (el) {
      const tpl = document.createElement("template");
      tpl.innerHTML = icon(el.getAttribute("data-icon"), el.className);
      el.replaceWith(tpl.content.firstChild);
    });
  }

  /* -----------------------------------------------------------------------
     3. HELPERS
     ----------------------------------------------------------------------- */
  /** Builds an optimised Unsplash image URL from a photo id. */
  function img(id, w, h, opts) {
    let url = "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&q=" + ((opts && opts.q) || 72) + "&w=" + (w || 800);
    if (h) url += "&h=" + h;
    if (opts && opts.faces) url += "&crop=faces";
    return url;
  }
  function qs(name) { return new URLSearchParams(window.location.search).get(name); }
  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function initials(name) {
    return name.replace(/^Dr\.?\s*/i, "").split(/\s+/).map(function (p) { return p[0]; }).slice(0, 2).join("").toUpperCase();
  }
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }
  const yearsOfCare = new Date().getFullYear() - SITE.founded;

  /* -----------------------------------------------------------------------
     4. HEADER, MOBILE MENU & FOOTER
     ----------------------------------------------------------------------- */
  const LOGO_SVG = '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M12 4h8v8h8v8h-8v8h-8v-8H4v-8h8z" fill="#fff" opacity=".95"/><path d="M6 16h6l2-4 4 8 2-4h6" stroke="#0e9f9a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function logoHTML() {
    return '<a href="index.html" class="logo" aria-label="' + esc(SITE.fullName) + ' — Home">' +
      '<span class="logo__mark">' + LOGO_SVG + "</span>" +
      '<span class="logo__text"><span class="logo__name">Life<span>Care</span></span><span class="logo__sub">Multispeciality Hospital</span></span></a>';
  }

  // Main navigation structure (edit to add/remove menu items)
  function navItems() {
    const depts = (window.DEPARTMENTS || []);
    return [
      { key: "home", label: "Home", href: "index.html" },
      {
        key: "about", label: "About Us", href: "about.html", children: [
          { label: "Hospital Overview", href: "about.html#overview", icon: "hospital" },
          { label: "Our Journey", href: "about.html#history", icon: "calendar" },
          { label: "Mission & Vision", href: "about.html#mission", icon: "target" },
          { label: "Leadership", href: "about.html#leadership", icon: "users" },
          { label: "Accreditations", href: "about.html#accreditations", icon: "award" }
        ]
      },
      {
        key: "departments", label: "Departments", href: "departments.html", mega: true,
        children: depts.map(function (d) { return { label: d.name, href: "department-details.html?id=" + d.id, icon: d.icon }; })
      },
      { key: "doctors", label: "Doctors", href: "doctors.html" },
      { key: "treatments", label: "Treatments", href: "treatments.html" },
      { key: "facilities", label: "Facilities", href: "facilities.html" },
      { key: "contact", label: "Contact", href: "contact.html" }
    ];
  }

  function currentKey() {
    const page = document.body.getAttribute("data-page") || "";
    const map = { "department-details": "departments", "doctor-details": "doctors" };
    return map[page] || page;
  }

  function renderHeader() {
    const mount = document.getElementById("site-header");
    if (!mount) return;
    const active = currentKey();

    const desktopNav = navItems().map(function (item) {
      const isActive = item.key === active ? " is-active" : "";
      const aria = item.key === active ? ' aria-current="page"' : "";
      if (!item.children) {
        return '<li class="nav__item"><a class="nav__link' + isActive + '" href="' + item.href + '"' + aria + ">" + item.label + "</a></li>";
      }
      const children = item.children.map(function (c) {
        return '<a href="' + c.href + '"><span class="dropdown__icon">' + icon(c.icon) + "</span>" + esc(c.label) + "</a>";
      }).join("");
      const footer = item.mega ? '<div class="dropdown__footer"><a href="' + item.href + '">View all departments ' + icon("arrowRight") + "</a></div>" : "";
      return '<li class="nav__item has-dropdown">' +
        '<a class="nav__link' + isActive + '" href="' + item.href + '" aria-haspopup="true" aria-expanded="false"' + aria + ">" + item.label + icon("chevronDown") + "</a>" +
        '<div class="dropdown' + (item.mega ? " dropdown--mega" : "") + '" role="menu">' + children + footer + "</div></li>";
    }).join("");

    const mobileNav = navItems().map(function (item, i) {
      const isActive = item.key === active ? " is-active" : "";
      if (!item.children) {
        return '<li><a class="mobile-nav__link' + isActive + '" href="' + item.href + '">' + item.label + "</a></li>";
      }
      const sub = '<li><a href="' + item.href + '"><strong>All ' + item.label + "</strong></a></li>" +
        item.children.map(function (c) { return '<li><a href="' + c.href + '">' + esc(c.label) + "</a></li>"; }).join("");
      return '<li><button class="mobile-nav__link' + isActive + '" aria-expanded="false" aria-controls="mnav-' + i + '">' + item.label + icon("chevronDown") + "</button>" +
        '<ul class="mobile-nav__sub" id="mnav-' + i + '">' + sub + "</ul></li>";
    }).join("");

    mount.innerHTML =
      '<div class="topbar"><div class="container">' +
        '<ul class="topbar__list">' +
          '<li class="always">' + icon("phone") + '<a href="tel:' + SITE.phoneHref + '">' + SITE.phone + "</a></li>" +
          '<li class="lg">' + icon("mail") + '<a href="mailto:' + SITE.email + '">' + SITE.email + "</a></li>" +
          '<li class="md">' + icon("clock") + "<span>" + SITE.hoursShort + "</span></li>" +
          '<li class="lg">' + icon("pin") + "<span>" + SITE.addressShort + "</span></li>" +
        "</ul>" +
        '<a class="topbar__emergency" href="tel:' + SITE.emergencyHref + '">' + icon("ambulance") + '<span>Emergency 24×7</span></a>' +
      "</div></div>" +
      '<header class="header" id="header"><div class="container header__inner">' +
        logoHTML() +
        '<nav class="nav" aria-label="Main navigation"><ul class="nav__list">' + desktopNav + "</ul></nav>" +
        '<div class="header__actions">' +
          '<a href="appointment.html" class="btn btn--primary btn--sm header__cta">' + icon("calendarCheck") + "Book Appointment</a>" +
          '<button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">' + icon("menu") + "</button>" +
        "</div>" +
      "</div></header>" +
      '<div class="mobile-nav" id="mobile-nav" aria-hidden="true">' +
        '<div class="mobile-nav__overlay" data-close-nav></div>' +
        '<div class="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="Menu">' +
          '<div class="mobile-nav__head">' + logoHTML() + '<button class="nav-toggle" type="button" data-close-nav aria-label="Close menu">' + icon("x") + "</button></div>" +
          '<nav class="mobile-nav__body" aria-label="Mobile navigation"><ul>' + mobileNav + "</ul></nav>" +
          '<div class="mobile-nav__foot">' +
            '<a href="appointment.html" class="btn btn--primary btn--block">' + icon("calendarCheck") + "Book Appointment</a>" +
            '<a href="tel:' + SITE.emergencyHref + '" class="btn btn--danger btn--block">' + icon("phone") + "Emergency: " + SITE.emergencyPhone + "</a>" +
          "</div>" +
        "</div>" +
      "</div>";
  }

  function renderFooter() {
    const mount = document.getElementById("site-footer");
    if (!mount) return;
    const depts = (window.DEPARTMENTS || []).slice(0, 8);
    const year = new Date().getFullYear();

    mount.innerHTML =
      '<footer class="footer"><div class="container"><div class="footer__grid">' +
        "<div>" + logoHTML() +
          "<p>" + esc(SITE.fullName) + " — " + esc(SITE.tagline) + " A patient-first, multi-specialty hospital bringing advanced diagnostics, expert specialists and compassionate nursing under one roof.</p>" +
          '<div class="socials">' +
            '<a href="' + SITE.social.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">' + icon("facebook") + "</a>" +
            '<a href="' + SITE.social.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + icon("instagram") + "</a>" +
            '<a href="' + SITE.social.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + icon("linkedin") + "</a>" +
            '<a href="' + SITE.social.youtube + '" target="_blank" rel="noopener" aria-label="YouTube">' + icon("youtube") + "</a>" +
          "</div>" +
        "</div>" +
        "<div><h4>Quick Links</h4><ul class=\"footer__links\">" +
          [["About Us", "about.html"], ["Find a Doctor", "doctors.html"], ["Treatments & Conditions", "treatments.html"], ["Facilities", "facilities.html"], ["Book Appointment", "appointment.html"], ["Contact Us", "contact.html"]]
            .map(function (l) { return '<li><a href="' + l[1] + '">' + icon("chevronRight") + l[0] + "</a></li>"; }).join("") +
        "</ul></div>" +
        "<div><h4>Departments</h4><ul class=\"footer__links\">" +
          depts.map(function (d) { return '<li><a href="department-details.html?id=' + d.id + '">' + icon("chevronRight") + esc(d.name) + "</a></li>"; }).join("") +
          '<li><a href="departments.html">' + icon("chevronRight") + "All Departments</a></li>" +
        "</ul></div>" +
        "<div><h4>Contact Us</h4><ul class=\"footer__contact\">" +
          "<li>" + icon("pin") + "<span>" + esc(SITE.address) + "</span></li>" +
          "<li>" + icon("phone") + '<a href="tel:' + SITE.phoneHref + '">' + SITE.phone + "</a></li>" +
          "<li>" + icon("mail") + '<a href="mailto:' + SITE.email + '">' + SITE.email + "</a></li>" +
          "<li>" + icon("clock") + "<span>" + SITE.hours + "<br>" + SITE.emergencyHours + "</span></li>" +
        "</ul>" +
        '<div class="footer__emergency">Emergency &amp; Ambulance (24×7)<br><a href="tel:' + SITE.emergencyHref + '">' + SITE.emergencyPhone + '</a> · <a href="tel:' + SITE.ambulance + '">' + SITE.ambulance + "</a></div>" +
        "</div>" +
      "</div></div>" +
      '<div class="footer__bottom"><div class="container">' +
        "<span>© " + year + " " + esc(SITE.fullName) + ". All rights reserved.</span>" +
        '<span class="footer__disclaimer">Demonstration website: doctor profiles, statistics, testimonials and accreditations are fictional samples. Medical information is educational and not a substitute for professional advice. In an emergency, call ' + SITE.ambulance + " immediately.</span>" +
      "</div></div></footer>" +
      // Floating helpers
      '<button class="back-to-top" type="button" aria-label="Back to top">' + icon("arrowUp") + "</button>" +
      '<nav class="quickbar" aria-label="Quick actions">' +
        '<a href="tel:' + SITE.phoneHref + '">' + icon("phone") + "Call</a>" +
        '<a href="tel:' + SITE.emergencyHref + '" class="is-emergency">' + icon("ambulance") + "Emergency</a>" +
        '<a href="appointment.html" class="is-book">' + icon("calendarCheck") + "Book Visit</a>" +
      "</nav>";
  }

  /** Fills any element with data-site="key" / data-site-link="type" from SITE config. */
  function fillSiteData(root) {
    (root || document).querySelectorAll("[data-site]").forEach(function (el) {
      const key = el.getAttribute("data-site");
      if (key === "years") el.textContent = yearsOfCare;
      else if (SITE[key] != null) el.textContent = SITE[key];
    });
    (root || document).querySelectorAll("[data-site-link]").forEach(function (el) {
      const t = el.getAttribute("data-site-link");
      if (t === "phone") el.href = "tel:" + SITE.phoneHref;
      if (t === "emergency") el.href = "tel:" + SITE.emergencyHref;
      if (t === "ambulance") el.href = "tel:" + SITE.ambulance;
      if (t === "email") el.href = "mailto:" + SITE.email;
      if (t === "directions") { el.href = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(SITE.mapQuery); el.target = "_blank"; el.rel = "noopener"; }
    });
  }

  /* -----------------------------------------------------------------------
     5. NAVIGATION BEHAVIOUR
     ----------------------------------------------------------------------- */
  function initNav() {
    const mobile = document.getElementById("mobile-nav");
    const openBtn = document.querySelector(".header .nav-toggle");
    if (!mobile || !openBtn) return;

    function open() {
      mobile.classList.add("is-open");
      mobile.setAttribute("aria-hidden", "false");
      openBtn.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-open");
      const first = mobile.querySelector(".mobile-nav__link");
      if (first) setTimeout(function () { first.focus(); }, 300);
    }
    function close() {
      mobile.classList.remove("is-open");
      mobile.setAttribute("aria-hidden", "true");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
    openBtn.addEventListener("click", open);
    mobile.querySelectorAll("[data-close-nav]").forEach(function (el) { el.addEventListener("click", close); });
    mobile.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { close(); closeDropdowns(); } });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1100) close(); });

    // Mobile sub-menus (accordion style)
    mobile.querySelectorAll("button.mobile-nav__link").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const sub = document.getElementById(btn.getAttribute("aria-controls"));
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        sub.classList.toggle("is-open", !expanded);
      });
    });

    // Desktop dropdowns: hover works via CSS; this adds touch + keyboard support.
    function closeDropdowns(except) {
      document.querySelectorAll(".nav__item.has-dropdown.is-open").forEach(function (li) {
        if (li !== except) { li.classList.remove("is-open"); li.querySelector(".nav__link").setAttribute("aria-expanded", "false"); }
      });
    }
    document.querySelectorAll(".nav__item.has-dropdown").forEach(function (li) {
      const link = li.querySelector(".nav__link");
      li.addEventListener("mouseenter", function () { link.setAttribute("aria-expanded", "true"); });
      li.addEventListener("mouseleave", function () { link.setAttribute("aria-expanded", "false"); li.classList.remove("is-open"); });
      // On touch devices the first tap opens the menu, second tap follows the link.
      link.addEventListener("touchend", function (e) {
        if (!li.classList.contains("is-open")) {
          e.preventDefault();
          closeDropdowns(li);
          li.classList.add("is-open");
          link.setAttribute("aria-expanded", "true");
        }
      });
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".nav__item")) closeDropdowns(); });
  }

  /* -----------------------------------------------------------------------
     6. SCROLL EFFECTS
     ----------------------------------------------------------------------- */
  function initScrollEffects() {
    const header = document.getElementById("header");
    const toTop = document.querySelector(".back-to-top");
    let ticking = false;
    function onScroll() {
      const y = window.scrollY;
      if (header) header.classList.toggle("is-scrolled", y > 10);
      if (toTop) toTop.classList.toggle("is-visible", y > 600);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();
    if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    // Smooth scroll for same-page anchors (accounts for sticky header via CSS scroll-padding)
    document.addEventListener("click", function (e) {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const target = id && document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", "#" + id);
      }
    });
  }

  // Reveal-on-scroll animations
  let revealObserver = null;
  function observeReveals(root) {
    const els = (root || document).querySelectorAll(".reveal:not(.is-visible), .reveal-stagger:not(.is-visible)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-visible"); }); return; }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    els.forEach(function (el) { revealObserver.observe(el); });
  }

  // Animated number counters: <span data-count="250" data-suffix="+">0</span>
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;
    function run(el) {
      const target = el.getAttribute("data-count") === "years" ? yearsOfCare : parseFloat(el.getAttribute("data-count"));
      const duration = 1600;
      const start = performance.now();
      const format = function (n) { return Math.round(n).toLocaleString("en-IN"); };
      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = format(target * eased);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) { counters.forEach(run); return; }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { io.observe(c); });
  }

  /* -----------------------------------------------------------------------
     7. ACCORDION, MAP, IMAGE FALLBACK
     ----------------------------------------------------------------------- */
  function initAccordions(root) {
    (root || document).querySelectorAll(".accordion__btn:not([data-ready])").forEach(function (btn) {
      btn.setAttribute("data-ready", "1");
      const item = btn.closest(".accordion__item");
      const panel = item.querySelector(".accordion__panel");
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", function () {
        const isOpen = item.classList.contains("is-open");
        // Close siblings for a tidy single-open accordion
        item.parentElement.querySelectorAll(".accordion__item.is-open").forEach(function (other) {
          if (other !== item) {
            other.classList.remove("is-open");
            other.querySelector(".accordion__btn").setAttribute("aria-expanded", "false");
            other.querySelector(".accordion__panel").style.maxHeight = null;
          }
        });
        item.classList.toggle("is-open", !isOpen);
        btn.setAttribute("aria-expanded", String(!isOpen));
        panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
      });
    });
  }

  // Google Maps placeholder → loads the free embed only when the visitor asks (faster pages, better privacy)
  function initMaps() {
    document.querySelectorAll("[data-load-map]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const box = btn.closest(".map-box");
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.google.com/maps?q=" + encodeURIComponent(SITE.mapQuery) + "&output=embed";
        iframe.title = "Map showing " + SITE.fullName;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        box.appendChild(iframe);
      });
    });
  }

  // Swap any broken remote image for a local placeholder so layouts never show a broken icon.
  function fallbackFor(el) {
    if (el.closest(".doctor-card, .profile-photo, .avatar-stack, .leader")) return "assets/doctors/doctor-placeholder.svg";
    if (el.closest(".dept-card, .dept-full")) return "assets/departments/department-placeholder.svg";
    return "assets/images/placeholder.svg";
  }
  function handleImgError(el) {
    if (!el || el.tagName !== "IMG" || el.dataset.fallback) return;
    el.dataset.fallback = "1";
    el.classList.add("img-fallback");
    el.src = fallbackFor(el);
  }
  document.addEventListener("error", function (e) { handleImgError(e.target); }, true);
  function checkBrokenImages() {
    document.querySelectorAll("img").forEach(function (im) { if (im.complete && im.naturalWidth === 0 && im.src) handleImgError(im); });
  }

  /* -----------------------------------------------------------------------
     8. FORM VALIDATION (shared)
     Add data-validate="rule rule2" to any input, e.g.:
       required · name · phone · email · minlen:10 · future-date · opd-date · checked
     ----------------------------------------------------------------------- */
  const RULES = {
    required: function (v) { return v.trim() !== "" || "This field is required."; },
    name: function (v) { return /^[A-Za-z][A-Za-z .'-]{1,59}$/.test(v.trim()) || "Please enter a valid name (letters only, at least 2 characters)."; },
    phone: function (v) {
      const digits = v.replace(/[\s\-()]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, "");
      return /^[6-9]\d{9}$/.test(digits) || "Enter a valid 10-digit Indian mobile number (e.g. 98765 43210).";
    },
    email: function (v) { return v.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid email address."; },
    minlen: function (v, n) { return v.trim().length >= n || "Please write at least " + n + " characters."; },
    "future-date": function (v) {
      if (!v) return "Please choose a date.";
      const d = new Date(v + "T00:00:00"); const today = new Date(); today.setHours(0, 0, 0, 0);
      return d >= today || "Please choose today or a future date.";
    },
    "opd-date": function (v) {
      if (!v) return "Please choose a date.";
      const d = new Date(v + "T00:00:00"); const today = new Date(); today.setHours(0, 0, 0, 0);
      const max = new Date(today); max.setDate(max.getDate() + 90);
      if (d < today) return "Please choose today or a future date.";
      if (d > max) return "Appointments can be requested up to 90 days in advance.";
      if (d.getDay() === 0) return "OPD is closed on Sundays — please choose Monday to Saturday.";
      return true;
    },
    checked: function (v, n, el) { return el.checked || "Please confirm to continue."; }
  };

  function validateField(el) {
    const rules = (el.getAttribute("data-validate") || "").split(/\s+/).filter(Boolean);
    const field = el.closest(".field") || el.parentElement;
    const value = el.type === "checkbox" ? "" : (el.value || "");
    let message = true;
    for (let i = 0; i < rules.length; i++) {
      const parts = rules[i].split(":");
      const fn = RULES[parts[0]];
      if (!fn) continue;
      // Optional fields (no "required") skip other checks when empty
      if (parts[0] !== "required" && parts[0] !== "checked" && rules.indexOf("required") === -1 && value.trim() === "") continue;
      message = fn(value, parts[1] ? parseInt(parts[1], 10) : undefined, el);
      if (message !== true) break;
    }
    const err = field.querySelector(".error-msg");
    if (message === true) {
      field.classList.remove("has-error");
      if (value.trim() !== "" || el.checked) field.classList.add("is-valid");
      el.removeAttribute("aria-invalid");
      if (err) err.textContent = "";
      return true;
    }
    field.classList.add("has-error");
    field.classList.remove("is-valid");
    el.setAttribute("aria-invalid", "true");
    if (err) err.innerHTML = icon("alert") + esc(message);
    return false;
  }

  /**
   * Wires up live validation on a form. onValid(data, form) is called with
   * a plain object of field values when every field passes.
   */
  function setupForm(form, onValid) {
    if (!form) return;
    const inputs = form.querySelectorAll("[data-validate]");
    inputs.forEach(function (el) {
      // Link error messages for screen readers
      const field = el.closest(".field") || el.parentElement;
      const err = field.querySelector(".error-msg");
      if (err && el.id) { err.id = el.id + "-error"; el.setAttribute("aria-describedby", err.id); err.setAttribute("aria-live", "polite"); }
      el.addEventListener("blur", function () { if (el.value || field.classList.contains("has-error")) validateField(el); });
      el.addEventListener(el.tagName === "SELECT" || el.type === "checkbox" || el.type === "date" ? "change" : "input", function () {
        if (field.classList.contains("has-error") || el.tagName === "SELECT" || el.type === "checkbox") validateField(el);
      });
    });
    form.setAttribute("novalidate", "");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let firstInvalid = null;
      inputs.forEach(function (el) { if (!validateField(el) && !firstInvalid) firstInvalid = el; });
      if (firstInvalid) {
        firstInvalid.focus({ preventScroll: true });
        firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
        const card = form.closest(".form-card") || form;
        card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
        return;
      }
      const data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      onValid(data, form);
    });
  }

  /* -----------------------------------------------------------------------
     Public API + initialisation
     ----------------------------------------------------------------------- */
  window.SITE = SITE;
  window.LC = {
    SITE: SITE, icon: icon, img: img, qs: qs, esc: esc, initials: initials, ready: ready,
    hydrateIcons: hydrateIcons, setupForm: setupForm, validateField: validateField,
    /** Call after injecting HTML so icons, animations & accordions activate. */
    refresh: function (root) { hydrateIcons(root); fillSiteData(root); observeReveals(root); initAccordions(root); }
  };

  ready(function () {
    renderHeader();
    renderFooter();
    hydrateIcons(document);
    fillSiteData(document);
    initNav();
    initScrollEffects();
    observeReveals(document);
    initCounters();
    initAccordions(document);
    initMaps();
    checkBrokenImages();
  });
})();

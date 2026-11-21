/* =========================================================================
   LifeCare — appointment.js
   -------------------------------------------------------------------------
   Front-end only appointment request + contact form.
   ⚠ There is NO backend: nothing is sent or stored. On successful
   validation we show a summary so visitors can see how it would work.
   To make it live, connect the form to a service of your choice
   (e.g. a Cloudflare Pages Function, Formspree, or the hospital's HIS).
   ========================================================================= */
LC.ready(function () {
  const { icon, esc } = LC;

  /* ---------------- Appointment form ---------------- */
  const form = document.getElementById("appointment-form");
  if (form) {
    const deptEl = form.querySelector("#apt-dept");
    const docEl = form.querySelector("#apt-doctor");
    const dateEl = form.querySelector("#apt-date");
    const timeEl = form.querySelector("#apt-time");
    const docHint = form.querySelector("#apt-doctor-hint");

    // Departments
    deptEl.innerHTML = '<option value="">Select a department</option>' + DEPARTMENTS.map(function (d) {
      return '<option value="' + d.id + '">' + esc(d.name) + "</option>";
    }).join("");

    // Doctors depend on the chosen department
    function fillDoctors(selected) {
      const pool = DOCTORS.filter(function (d) { return d.dept === deptEl.value; });
      if (!deptEl.value) {
        docEl.innerHTML = '<option value="">Select a department first</option>';
        docEl.disabled = true;
        docHint.textContent = "Choose a department to see available doctors.";
        return;
      }
      docEl.disabled = false;
      docEl.innerHTML = '<option value="any">Any available specialist</option>' + pool.map(function (d) {
        return '<option value="' + d.id + '"' + (d.id === selected ? " selected" : "") + ">" + esc(d.name) + " — " + esc(d.specialty) + "</option>";
      }).join("");
      docHint.textContent = pool.length + " specialist" + (pool.length === 1 ? "" : "s") + " available in this department.";
      showDoctorTimes();
    }

    // Show the selected doctor's OPD timings as a helpful hint
    function showDoctorTimes() {
      const d = getDoctor(docEl.value);
      const box = document.getElementById("apt-doctor-times");
      if (!box) return;
      if (!d) { box.hidden = true; return; }
      box.hidden = false;
      box.innerHTML = icon("clock") + "<span><strong>" + esc(d.name) + "</strong> usually consults: " +
        d.schedule.map(function (s) { return esc(s[0]) + " (" + esc(s[1]) + ")"; }).join(", ") + "</span>";
      LC.hydrateIcons(box);
    }

    deptEl.addEventListener("change", function () { fillDoctors(); });
    docEl.addEventListener("change", showDoctorTimes);

    // Date limits: today … +90 days
    const today = new Date();
    const fmt = function (d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
    dateEl.min = fmt(today);
    const max = new Date(today); max.setDate(max.getDate() + 90); dateEl.max = fmt(max);

    // Pre-fill from URL: appointment.html?dept=cardiology&doctor=arjun-mehta
    const qDept = LC.qs("dept"), qDoc = LC.qs("doctor");
    const docFromUrl = qDoc && getDoctor(qDoc);
    if (docFromUrl) deptEl.value = docFromUrl.dept;
    else if (qDept && getDepartment(qDept)) deptEl.value = qDept;
    fillDoctors(docFromUrl ? docFromUrl.id : null);

    LC.setupForm(form, function (data) {
      const dept = getDepartment(data.department);
      const doc = getDoctor(data.doctor);
      const ref = "DEMO-" + Math.random().toString(36).slice(2, 8).toUpperCase();
      const dateStr = new Date(data.date + "T00:00:00").toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      const wrap = document.getElementById("appointment-card");
      wrap.innerHTML =
        '<div class="form-success pop-in" role="status" aria-live="polite">' +
          '<span class="icon-badge">' + icon("check") + "</span>" +
          "<h2>Request preview ready</h2>" +
          '<p class="lead" style="margin:0 auto;max-width:520px">Thank you, ' + esc(data.name.split(" ")[0]) + ". Your details passed validation.</p>" +
          '<dl class="summary-list">' +
            "<div><dt>Demo reference</dt><dd>" + ref + "</dd></div>" +
            "<div><dt>Patient</dt><dd>" + esc(data.name) + "</dd></div>" +
            "<div><dt>Mobile</dt><dd>" + esc(data.phone) + "</dd></div>" +
            (data.email ? "<div><dt>Email</dt><dd>" + esc(data.email) + "</dd></div>" : "") +
            "<div><dt>Department</dt><dd>" + esc(dept ? dept.name : "") + "</dd></div>" +
            "<div><dt>Doctor</dt><dd>" + esc(doc ? doc.name : "Any available specialist") + "</dd></div>" +
            "<div><dt>Preferred slot</dt><dd>" + esc(dateStr) + ", " + esc(data.time) + "</dd></div>" +
          "</dl>" +
          '<div class="notice" style="text-align:left;margin-bottom:22px">' + icon("alert") +
            "<p><strong>This request has NOT been sent.</strong> This is a demonstration website without a backend, so no appointment has been booked. To book a real appointment, please call <a data-site-link=\"phone\" href=\"#\"><span data-site=\"phone\"></span></a>.</p></div>" +
          '<div class="btn-row" style="justify-content:center"><a class="btn btn--primary" href="appointment.html">' + icon("calendar") + 'New request</a><a class="btn btn--outline" href="index.html">Back to Home</a></div>' +
        "</div>";
      LC.refresh(wrap);
      wrap.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------------- Contact form ---------------- */
  const contact = document.getElementById("contact-form");
  if (contact) {
    LC.setupForm(contact, function (data) {
      const wrap = document.getElementById("contact-card");
      wrap.innerHTML =
        '<div class="form-success pop-in" role="status" aria-live="polite">' +
          '<span class="icon-badge">' + icon("check") + "</span>" +
          "<h2>Message validated</h2>" +
          "<p>Thanks, " + esc(data.name.split(" ")[0]) + "! Your message about <strong>" + esc(data.subject) + "</strong> passed all checks.</p>" +
          '<div class="notice" style="text-align:left;margin:20px 0">' + icon("alert") +
            "<p><strong>Nothing was submitted.</strong> This contact form is a front-end demonstration only. Please call <a data-site-link=\"phone\" href=\"#\"><span data-site=\"phone\"></span></a> or email <a data-site-link=\"email\" href=\"#\"><span data-site=\"email\"></span></a> to reach the hospital.</p></div>" +
          '<a class="btn btn--primary" href="contact.html">Send another message</a>' +
        "</div>";
      LC.refresh(wrap);
      wrap.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});

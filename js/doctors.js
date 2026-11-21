/* =========================================================================
   LifeCare — doctors.js
   -------------------------------------------------------------------------
   • DOCTORS : FICTIONAL sample profiles for demonstration only.
               Names, qualifications and experience are placeholders —
               replace with the hospital's verified doctor information.
               Photos are free stock images from Unsplash.
   • doctorCardHTML() : shared card template (also used on department pages)
   • Renderers : featured doctors (home), directory with search & filters,
                 doctor profile page (doctor-details.html?id=…)
   ========================================================================= */

window.DOCTORS = [
  {
    id: "arjun-mehta", name: "Dr. Arjun Mehta", photo: "1612349317150-e413f6a5b16d", dept: "cardiology",
    specialty: "Interventional Cardiologist", qualification: "MBBS, MD (Medicine), DM (Cardiology)", experience: 18, featured: true,
    languages: ["English", "Hindi", "Marathi"], schedule: [["Mon – Wed – Fri", "10:00 AM – 2:00 PM"], ["Tue – Thu", "4:00 PM – 7:00 PM"]], mode: "In-person & video consult",
    bio: "Dr. Arjun Mehta (sample profile) leads the cardiac catheterisation programme. He focuses on minimally invasive heart procedures and believes in explaining every option clearly so patients can make confident decisions about their heart health.",
    conditions: ["Coronary artery disease", "Heart attack", "Angina", "High blood pressure", "Heart failure"],
    procedures: ["Coronary angiography", "Angioplasty & stenting", "Pacemaker implantation", "Echocardiography"]
  },
  {
    id: "rohan-kapoor", name: "Dr. Rohan Kapoor", photo: "1622902046580-2b47f47f5471", dept: "cardiology",
    specialty: "Clinical Cardiologist & Heart-Failure Specialist", qualification: "MBBS, MD (Medicine), DNB (Cardiology)", experience: 11,
    languages: ["English", "Hindi", "Punjabi"], schedule: [["Mon – Sat", "9:00 AM – 1:00 PM"]], mode: "In-person consult",
    bio: "Dr. Rohan Kapoor (sample profile) specialises in preventive cardiology and long-term heart-failure management, with a strong focus on lifestyle, medication adherence and cardiac rehabilitation.",
    conditions: ["Heart failure", "Arrhythmia", "High cholesterol", "Hypertension"],
    procedures: ["Stress testing (TMT)", "Holter analysis", "Heart-failure clinic", "Cardiac rehab planning"]
  },
  {
    id: "kavya-iyer", name: "Dr. Kavya Iyer", photo: "1659353888906-adb3e0041693", dept: "neurology",
    specialty: "Consultant Neurologist", qualification: "MBBS, MD (Medicine), DM (Neurology)", experience: 14, featured: true,
    languages: ["English", "Hindi", "Tamil"], schedule: [["Mon – Thu", "11:00 AM – 3:00 PM"], ["Sat", "10:00 AM – 1:00 PM"]], mode: "In-person & video consult",
    bio: "Dr. Kavya Iyer (sample profile) has a special interest in stroke and epilepsy. She coordinates the hospital's rapid stroke response pathway and runs a dedicated headache clinic.",
    conditions: ["Stroke", "Epilepsy", "Migraine", "Neuropathy", "Parkinson's disease"],
    procedures: ["EEG interpretation", "Nerve conduction studies", "Botulinum therapy", "Acute stroke thrombolysis"]
  },
  {
    id: "shalini-reddy", name: "Dr. Shalini Reddy", photo: "1614608682850-e0d6ed316d47", dept: "neurology",
    specialty: "Neurophysiologist & Memory Clinic Lead", qualification: "MBBS, DNB (Neurology)", experience: 9,
    languages: ["English", "Telugu", "Hindi"], schedule: [["Tue – Fri", "3:00 PM – 7:00 PM"]], mode: "In-person consult",
    bio: "Dr. Shalini Reddy (sample profile) focuses on memory disorders, sleep-related neurological issues and neurophysiology testing, working closely with families and caregivers.",
    conditions: ["Memory loss & dementia", "Sleep disorders", "Vertigo", "Peripheral neuropathy"],
    procedures: ["EMG & NCS", "Cognitive assessment", "Sleep study review"]
  },
  {
    id: "vikram-singh", name: "Dr. Vikram Singh", photo: "1622253692010-333f2da6031d", dept: "orthopedics",
    specialty: "Joint Replacement & Sports Injury Surgeon", qualification: "MBBS, MS (Orthopaedics)", experience: 16, featured: true,
    languages: ["English", "Hindi"], schedule: [["Mon – Wed – Fri", "9:00 AM – 1:00 PM"], ["Sat", "2:00 PM – 5:00 PM"]], mode: "In-person consult",
    bio: "Dr. Vikram Singh (sample profile) performs knee and hip replacements and arthroscopic sports surgery. He is passionate about helping patients return to pain-free movement as quickly and safely as possible.",
    conditions: ["Knee & hip arthritis", "ACL & meniscus tears", "Fractures", "Shoulder injuries"],
    procedures: ["Total knee replacement", "Total hip replacement", "Arthroscopic ACL reconstruction", "Fracture fixation"]
  },
  {
    id: "sanjay-rao", name: "Dr. Sanjay Rao", photo: "1712215544003-af10130f8eb3", dept: "general-medicine",
    specialty: "Senior Physician & Diabetologist", qualification: "MBBS, MD (General Medicine)", experience: 22,
    languages: ["English", "Hindi", "Kannada"], schedule: [["Mon – Sat", "9:00 AM – 1:00 PM"], ["Mon – Fri", "5:00 PM – 7:00 PM"]], mode: "In-person & video consult",
    bio: "Dr. Sanjay Rao (sample profile) manages diabetes, hypertension and complex medical illnesses. Patients value his calm approach and the time he takes to answer every question.",
    conditions: ["Diabetes", "High blood pressure", "Thyroid disorders", "Fever & infections"],
    procedures: ["Diabetes care plans", "Executive health check-ups", "Adult vaccination"]
  },
  {
    id: "neha-kulkarni", name: "Dr. Neha Kulkarni", photo: "1651008376811-b90baee60c1f", dept: "general-medicine",
    specialty: "Internal Medicine & Preventive Health", qualification: "MBBS, DNB (Family Medicine)", experience: 8, featured: true,
    languages: ["English", "Marathi", "Hindi"], schedule: [["Mon – Sat", "2:00 PM – 6:00 PM"]], mode: "In-person & video consult",
    bio: "Dr. Neha Kulkarni (sample profile) believes prevention is the best medicine. She runs wellness check-ups, women's health screening and lifestyle programmes for long-term health.",
    conditions: ["Lifestyle disorders", "Anaemia", "Respiratory infections", "Obesity"],
    procedures: ["Preventive health check-ups", "Lifestyle counselling", "Chronic disease follow-up"]
  },
  {
    id: "ananya-desai", name: "Dr. Ananya Desai", photo: "1623854767648-e7bb8009f0db", dept: "pediatrics",
    specialty: "Consultant Pediatrician & Neonatologist", qualification: "MBBS, MD (Pediatrics)", experience: 12, featured: true,
    languages: ["English", "Gujarati", "Hindi"], schedule: [["Mon – Sat", "10:00 AM – 2:00 PM"], ["Tue – Thu", "5:00 PM – 7:00 PM"]], mode: "In-person consult",
    bio: "Dr. Ananya Desai (sample profile) cares for newborns, infants and children. Her gentle, playful approach puts young patients at ease while giving parents clear, practical guidance.",
    conditions: ["Childhood infections", "Asthma in children", "Growth concerns", "Neonatal jaundice"],
    procedures: ["Vaccination", "Newborn care", "Developmental screening"]
  },
  {
    id: "priya-nair", name: "Dr. Priya Nair", photo: "1559839734-2b71ea197ec2", dept: "gynecology",
    specialty: "Obstetrician & Gynecologist", qualification: "MBBS, MS (Obstetrics & Gynaecology)", experience: 15, featured: true,
    languages: ["English", "Malayalam", "Hindi"], schedule: [["Mon – Fri", "10:00 AM – 2:00 PM"], ["Sat", "10:00 AM – 12:00 PM"]], mode: "In-person & video consult",
    bio: "Dr. Priya Nair (sample profile) supports women through pregnancy, childbirth and beyond. She has a special interest in high-risk pregnancies and laparoscopic gynecological surgery.",
    conditions: ["Pregnancy care", "PCOS", "Fibroids", "Menstrual disorders"],
    procedures: ["Normal & caesarean delivery", "Laparoscopic hysterectomy", "Antenatal care", "Colposcopy"]
  },
  {
    id: "meera-joshi", name: "Dr. Meera Joshi", photo: "1590650153855-d9e808231d41", dept: "gynecology",
    specialty: "Fertility & Menopause Specialist", qualification: "MBBS, DGO, DNB (Obstetrics & Gynaecology)", experience: 10,
    languages: ["English", "Marathi", "Hindi"], schedule: [["Tue – Sat", "3:00 PM – 7:00 PM"]], mode: "In-person consult",
    bio: "Dr. Meera Joshi (sample profile) helps couples with fertility evaluation and supports women through menopause with personalised, evidence-based care.",
    conditions: ["Infertility", "Menopause symptoms", "Hormonal imbalance", "Recurrent pregnancy loss"],
    procedures: ["Fertility evaluation", "Ovulation tracking", "Hysteroscopy", "Hormone therapy planning"]
  },
  {
    id: "ishita-sharma", name: "Dr. Ishita Sharma", photo: "1643297654416-05795d62e39c", dept: "dermatology",
    specialty: "Consultant Dermatologist", qualification: "MBBS, MD (Dermatology)", experience: 7,
    languages: ["English", "Hindi"], schedule: [["Mon – Sat", "11:00 AM – 3:00 PM"]], mode: "In-person & video consult",
    bio: "Dr. Ishita Sharma (sample profile) treats skin, hair and nail conditions with a balanced medical and aesthetic approach, focusing on safe, long-lasting results.",
    conditions: ["Acne", "Eczema", "Psoriasis", "Hair loss", "Pigmentation"],
    procedures: ["Chemical peels", "Laser therapy", "Skin biopsy", "Phototherapy"]
  },
  {
    id: "rahul-verma", name: "Dr. Rahul Verma", photo: "1612531385446-f7e6d131e1d0", dept: "oncology",
    specialty: "Medical Oncologist", qualification: "MBBS, MD (Medicine), DM (Medical Oncology)", experience: 13,
    languages: ["English", "Hindi"], schedule: [["Mon – Wed – Fri", "10:00 AM – 4:00 PM"]], mode: "In-person & video consult",
    bio: "Dr. Rahul Verma (sample profile) designs personalised chemotherapy, targeted therapy and immunotherapy plans, and believes in supporting the whole family through the cancer journey.",
    conditions: ["Breast cancer", "Lung cancer", "Blood cancers", "GI cancers"],
    procedures: ["Chemotherapy", "Immunotherapy", "Targeted therapy", "Tumour board planning"]
  },
  {
    id: "aditya-bose", name: "Dr. Aditya Bose", photo: "1612531386530-97286d97c2d2", dept: "gastroenterology",
    specialty: "Gastroenterologist & Hepatologist", qualification: "MBBS, MD (Medicine), DM (Gastroenterology)", experience: 12,
    languages: ["English", "Bengali", "Hindi"], schedule: [["Tue – Sat", "9:00 AM – 1:00 PM"]], mode: "In-person consult",
    bio: "Dr. Aditya Bose (sample profile) specialises in therapeutic endoscopy and liver disease, offering minimally invasive solutions for complex digestive problems.",
    conditions: ["GERD", "Fatty liver", "IBS", "Gallstones", "Hepatitis"],
    procedures: ["Upper GI endoscopy", "Colonoscopy", "ERCP", "FibroScan"]
  },
  {
    id: "karan-malhotra", name: "Dr. Karan Malhotra", photo: "1537368910025-700350fe46c7", dept: "urology",
    specialty: "Urologist & Laser Stone Surgeon", qualification: "MBBS, MS (Surgery), MCh (Urology)", experience: 9,
    languages: ["English", "Hindi", "Punjabi"], schedule: [["Mon – Fri", "4:00 PM – 8:00 PM"]], mode: "In-person consult",
    bio: "Dr. Karan Malhotra (sample profile) performs laser kidney-stone surgery and prostate procedures, with an emphasis on quick recovery and short hospital stays.",
    conditions: ["Kidney stones", "Enlarged prostate", "UTI", "Urinary incontinence"],
    procedures: ["RIRS / URS laser surgery", "TURP", "Cystoscopy", "PCNL"]
  },
  {
    id: "sneha-pillai", name: "Dr. Sneha Pillai", photo: "1594824476967-48c8b964273f", dept: "ent",
    specialty: "ENT & Head-Neck Surgeon", qualification: "MBBS, MS (ENT)", experience: 11,
    languages: ["English", "Malayalam", "Hindi"], schedule: [["Mon – Sat", "10:00 AM – 1:00 PM"]], mode: "In-person consult",
    bio: "Dr. Sneha Pillai (sample profile) treats ear, nose and throat conditions in adults and children, including endoscopic sinus surgery and hearing rehabilitation.",
    conditions: ["Sinusitis", "Hearing loss", "Tonsillitis", "Vertigo"],
    procedures: ["Endoscopic sinus surgery", "Tonsillectomy", "Tympanoplasty", "Audiometry"]
  },
  {
    id: "farhan-qureshi", name: "Dr. Farhan Qureshi", photo: "1556157382-97eda2d62296", dept: "ophthalmology",
    specialty: "Cataract & Glaucoma Specialist", qualification: "MBBS, MS (Ophthalmology)", experience: 14,
    languages: ["English", "Hindi", "Urdu"], schedule: [["Mon – Thu", "9:00 AM – 1:00 PM"], ["Sat", "9:00 AM – 12:00 PM"]], mode: "In-person consult",
    bio: "Dr. Farhan Qureshi (sample profile) performs day-care cataract surgery and manages glaucoma and diabetic eye disease to help patients protect their sight.",
    conditions: ["Cataract", "Glaucoma", "Diabetic retinopathy", "Dry eye"],
    procedures: ["Phaco cataract surgery", "Glaucoma laser", "OCT scan", "Retina screening"]
  }
];

window.getDoctor = function (id) { return window.DOCTORS.find(function (d) { return d.id === id; }); };

/** Shared doctor card markup. */
window.doctorCardHTML = function (doc) {
  const { icon, img, esc } = LC;
  const dept = window.getDepartment ? getDepartment(doc.dept) : null;
  return '<article class="doctor-card">' +
    '<div class="doctor-card__media">' +
      '<img src="' + img(doc.photo, 520, 560, { faces: true }) + '" alt="Portrait of ' + esc(doc.name) + '" loading="lazy" width="520" height="560">' +
      '<span class="tag tag--sample doctor-card__sample" title="Fictional demonstration profile">Sample profile</span>' +
      '<span class="doctor-card__exp">' + icon("award") + doc.experience + "+ yrs experience</span>" +
    "</div>" +
    '<div class="doctor-card__body">' +
      '<span class="doctor-card__dept">' + esc(dept ? dept.name : "") + "</span>" +
      "<h3>" + esc(doc.name) + "</h3>" +
      '<p class="doctor-card__qual">' + esc(doc.qualification) + "</p>" +
      '<p class="doctor-card__spec">' + esc(doc.specialty) + "</p>" +
      '<div class="doctor-card__meta">' +
        "<span>" + icon("calendar") + esc(doc.schedule[0][0]) + " · " + esc(doc.schedule[0][1]) + "</span>" +
        "<span>" + icon(doc.mode.indexOf("video") > -1 ? "video" : "hospital") + esc(doc.mode) + "</span>" +
      "</div>" +
      '<div class="doctor-card__actions">' +
        '<a class="btn btn--outline" href="doctor-details.html?id=' + doc.id + '">View Profile</a>' +
        '<a class="btn btn--primary" href="appointment.html?dept=' + doc.dept + "&doctor=" + doc.id + '">Book</a>' +
      "</div>" +
    "</div></article>";
};

LC.ready(function () {
  const { icon, img, esc } = LC;

  /* Home: featured doctors ------------------------------------------------ */
  const featured = document.getElementById("featured-doctors");
  if (featured) {
    featured.innerHTML = DOCTORS.filter(function (d) { return d.featured; }).slice(0, 4).map(doctorCardHTML).join("");
    LC.refresh(featured);
  }

  /* Doctors directory: search by name + filter by department & specialty -- */
  const list = document.getElementById("doctor-list");
  if (list) {
    const nameEl = document.getElementById("doctor-search");
    const deptEl = document.getElementById("doctor-dept");
    const specEl = document.getElementById("doctor-spec");
    const chipsEl = document.getElementById("doctor-chips");
    const metaEl = document.getElementById("doctor-meta");
    const resetBtn = document.getElementById("doctor-reset");

    // Populate department select & quick chips from data
    deptEl.innerHTML = '<option value="">All departments</option>' + DEPARTMENTS.map(function (d) {
      return '<option value="' + d.id + '">' + esc(d.name) + "</option>";
    }).join("");
    chipsEl.innerHTML = '<button type="button" class="chip is-active" data-dept="">All</button>' + DEPARTMENTS.filter(function (d) {
      return DOCTORS.some(function (doc) { return doc.dept === d.id; });
    }).map(function (d) { return '<button type="button" class="chip" data-dept="' + d.id + '">' + esc(d.name.split(" ")[0]) + "</button>"; }).join("");

    // Specialty options are derived from doctors' specialty keywords
    function fillSpecialties() {
      const pool = DOCTORS.filter(function (d) { return !deptEl.value || d.dept === deptEl.value; });
      const specs = Array.from(new Set(pool.map(function (d) { return d.specialty; }))).sort();
      const prev = specEl.value;
      specEl.innerHTML = '<option value="">All specialties</option>' + specs.map(function (s) { return '<option' + (s === prev ? " selected" : "") + ">" + esc(s) + "</option>"; }).join("");
    }

    // Pre-select from URL (?dept=cardiology or ?q=name)
    if (LC.qs("dept")) deptEl.value = LC.qs("dept");
    if (LC.qs("q")) nameEl.value = LC.qs("q");
    fillSpecialties();

    function syncChips() {
      chipsEl.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("is-active", c.getAttribute("data-dept") === deptEl.value); });
    }

    function render() {
      const q = nameEl.value.trim().toLowerCase();
      const items = DOCTORS.filter(function (d) {
        return (!deptEl.value || d.dept === deptEl.value) &&
          (!specEl.value || d.specialty === specEl.value) &&
          (!q || (d.name + " " + d.specialty).toLowerCase().indexOf(q) > -1);
      });
      metaEl.textContent = items.length + (items.length === 1 ? " doctor" : " doctors") + " found";
      list.innerHTML = items.length ? items.map(doctorCardHTML).join("") :
        '<div class="empty-state" style="grid-column:1/-1"><span class="icon-badge">' + icon("search") + '</span><h3>No doctors match your search</h3><p>Try another name, or clear the filters.</p><button type="button" class="btn btn--outline btn--sm" id="empty-reset">Clear filters</button></div>';
      const er = document.getElementById("empty-reset"); if (er) er.addEventListener("click", reset);
      syncChips();
      LC.refresh(list);
    }
    function reset() { nameEl.value = ""; deptEl.value = ""; fillSpecialties(); specEl.value = ""; render(); nameEl.focus(); }

    nameEl.addEventListener("input", render);
    deptEl.addEventListener("change", function () { fillSpecialties(); render(); });
    specEl.addEventListener("change", render);
    resetBtn.addEventListener("click", reset);
    chipsEl.addEventListener("click", function (e) {
      const b = e.target.closest(".chip"); if (!b) return;
      deptEl.value = b.getAttribute("data-dept"); fillSpecialties(); render();
    });
    render();
  }

  /* Doctor profile page --------------------------------------------------- */
  const profile = document.getElementById("doctor-profile");
  if (profile) {
    const doc = getDoctor(LC.qs("id"));
    const hero = document.getElementById("doctor-hero");
    if (!doc) {
      hero.innerHTML = '<div class="container"><ol class="breadcrumb"><li><a href="index.html">Home</a></li><li><a href="doctors.html">Doctors</a></li><li aria-current="page">Not found</li></ol><h1>Doctor not found</h1></div>';
      profile.innerHTML = '<div class="not-found"><span class="icon-badge">' + icon("userDoc") + '</span><h2>We couldn\'t find that profile</h2><p>Browse our directory to find the right specialist.</p><a class="btn btn--primary" href="doctors.html">Find a Doctor</a></div>';
      LC.refresh(document.body);
      return;
    }
    const dept = getDepartment(doc.dept);
    document.title = doc.name + " — " + doc.specialty + " | LifeCare Multispeciality Hospital";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", doc.name + ", " + doc.specialty + " at LifeCare Multispeciality Hospital. View qualifications, experience and consultation timings.");

    hero.innerHTML = '<div class="container">' +
      '<ol class="breadcrumb"><li><a href="index.html">Home</a></li><li><a href="doctors.html">Doctors</a></li><li aria-current="page">' + esc(doc.name) + "</li></ol>" +
      '<div class="profile-hero">' +
        '<div class="profile-photo reveal reveal--zoom"><img src="' + img(doc.photo, 700, 770, { faces: true }) + '" alt="Portrait of ' + esc(doc.name) + '" width="700" height="770"></div>' +
        '<div class="reveal">' +
          '<span class="tag tag--sample" style="margin-bottom:14px">' + icon("info") + " Fictional sample profile for demonstration</span>" +
          '<span class="eyebrow" style="display:flex">' + esc(dept.name) + "</span>" +
          "<h1>" + esc(doc.name) + "</h1>" +
          '<p class="lead" style="margin-bottom:6px">' + esc(doc.specialty) + "</p>" +
          '<p style="margin:0;color:var(--muted)">' + esc(doc.qualification) + "</p>" +
          '<div class="profile-facts">' +
            '<div class="profile-fact">' + icon("award") + "<div><small>Experience</small><strong>" + doc.experience + "+ years</strong></div></div>" +
            '<div class="profile-fact">' + icon(dept.icon) + '<div><small>Department</small><strong><a href="department-details.html?id=' + dept.id + '">' + esc(dept.name) + "</a></strong></div></div>" +
            '<div class="profile-fact">' + icon("language") + "<div><small>Languages</small><strong>" + esc(doc.languages.join(", ")) + "</strong></div></div>" +
          "</div>" +
          '<div class="btn-row"><a class="btn btn--primary" href="appointment.html?dept=' + doc.dept + "&doctor=" + doc.id + '">' + icon("calendarCheck") + 'Book Appointment</a>' +
          '<a class="btn btn--outline" data-site-link="phone" href="#">' + icon("phone") + "Call to Enquire</a></div>" +
        "</div>" +
      "</div></div>";

    const others = DOCTORS.filter(function (d) { return d.dept === doc.dept && d.id !== doc.id; });
    const checks = function (arr) { return '<ul class="check-list">' + arr.map(function (x) { return "<li>" + icon("check") + "<span>" + esc(x) + "</span></li>"; }).join("") + "</ul>"; };

    profile.innerHTML = '<div class="detail-layout">' +
      '<div class="detail-main">' +
        '<section class="reveal"><h2><span class="icon-badge">' + icon("user") + "</span>Professional Biography</h2><p>" + esc(doc.bio) + "</p>" +
          '<div class="info-grid info-grid--3" style="margin-top:20px">' +
            '<div class="info-tile"><h4>' + icon("graduation") + "Qualifications</h4><p>" + esc(doc.qualification) + "</p></div>" +
            '<div class="info-tile"><h4>' + icon("briefcase") + "Experience</h4><p>" + doc.experience + "+ years in " + esc(dept.name.toLowerCase()) + "</p></div>" +
            '<div class="info-tile"><h4>' + icon("target") + "Specialisation</h4><p>" + esc(doc.specialty) + "</p></div>" +
          "</div></section>" +
        '<section class="reveal"><div class="info-grid">' +
          '<div><h2><span class="icon-badge">' + icon("clipboard") + "</span>Conditions Treated</h2>" + checks(doc.conditions) + "</div>" +
          '<div><h2><span class="icon-badge">' + icon("surgery") + "</span>Procedures</h2>" + checks(doc.procedures) + "</div>" +
        "</div></section>" +
        '<section class="reveal"><h2><span class="icon-badge">' + icon("clock") + "</span>Consultation Timings</h2>" +
          '<div class="table-wrap"><table class="timings"><thead><tr><th scope="col">Days</th><th scope="col">Time</th><th scope="col">Mode</th></tr></thead><tbody>' +
            doc.schedule.map(function (s) { return "<tr><td>" + esc(s[0]) + "</td><td>" + esc(s[1]) + "</td><td>" + esc(doc.mode) + "</td></tr>"; }).join("") +
          "</tbody></table></div>" +
          '<p style="font-size:.92rem;color:var(--muted);margin-top:12px">' + icon("info") + " Timings are indicative and may change. Please confirm with the help desk before visiting.</p>" +
        "</section>" +
        (others.length ? '<section class="reveal"><h2><span class="icon-badge">' + icon("users") + "</span>Other " + esc(dept.name) + ' Specialists</h2><div class="doctor-grid">' + others.map(doctorCardHTML).join("") + "</div></section>" : "") +
      "</div>" +
      '<aside class="sidebar">' +
        '<div class="card help-card"><h3>Book a consultation</h3><p style="margin:0">Request a visit with ' + esc(doc.name) + ' or call our help desk.</p><a class="phone-big" data-site-link="phone" href="#"><span data-site="phone"></span></a><a class="btn btn--white btn--block" href="appointment.html?dept=' + doc.dept + "&doctor=" + doc.id + '">Request Appointment</a></div>' +
        '<div class="card"><h3>Associated Department</h3><a class="dept-tile" style="padding:14px" href="department-details.html?id=' + dept.id + '"><span class="icon-badge">' + icon(dept.icon) + "</span><div><h3>" + esc(dept.name) + "</h3><p>" + esc(dept.short) + "</p></div></a></div>" +
        '<div class="card"><h3>Before your visit</h3><ul class="check-list check-list--compact">' +
          "<li>" + icon("check") + "<span>Carry previous reports & prescriptions</span></li>" +
          "<li>" + icon("check") + "<span>Bring a valid photo ID</span></li>" +
          "<li>" + icon("check") + "<span>Arrive 15 minutes early for registration</span></li>" +
        "</ul></div>" +
      "</aside></div>";
    LC.refresh(document.body);
  }
});

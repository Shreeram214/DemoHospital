/* =========================================================================
   LifeCare — departments.js
   -------------------------------------------------------------------------
   • DEPARTMENTS : all medical departments (edit / add here — every page,
                   menu, filter and detail page updates automatically)
   • FACILITIES  : hospital infrastructure used on Home, Facilities and
                   Department Details pages
   • Renderers   : home department tiles, departments grid + filter,
                   department details page (department-details.html?id=…),
                   facilities page & home facility cards
   Images are hot-linked from Unsplash (free licence) via LC.img(photoId).
   ========================================================================= */

window.DEPT_CATEGORIES = [
  { id: "heart-brain", label: "Heart & Brain" },
  { id: "surgical", label: "Surgical Care" },
  { id: "women-children", label: "Women & Children" },
  { id: "internal", label: "Internal Medicine" },
  { id: "sensory-skin", label: "Eye, ENT & Skin" }
];

window.DEPARTMENTS = [
  {
    id: "cardiology", name: "Cardiology", category: "heart-brain", icon: "heartPulse",
    image: "1530026405186-ed1f139313f8",
    short: "Comprehensive heart care — from preventive check-ups to advanced interventional cardiology.",
    overview: [
      "Our Cardiology department provides complete care for disorders of the heart and blood vessels. A dedicated team of cardiologists, cardiac nurses and technicians works together to diagnose problems early and treat them with the latest evidence-based techniques.",
      "From a routine ECG to complex angioplasty in our cardiac catheterisation lab, patients receive coordinated care, clear explanations and structured cardiac rehabilitation to return to an active life."
    ],
    conditions: ["Coronary artery disease", "Heart attack (myocardial infarction)", "High blood pressure", "Heart failure", "Arrhythmia & palpitations", "Valvular heart disease"],
    symptoms: ["Chest pain, pressure or tightness", "Shortness of breath on exertion", "Palpitations or irregular heartbeat", "Swelling of feet or ankles", "Unexplained fatigue or dizziness"],
    treatments: ["Coronary angiography & angioplasty", "Pacemaker implantation", "Medical management of heart failure", "Preventive cardiology & lipid clinic", "Cardiac rehabilitation"],
    diagnostics: ["ECG & Holter monitoring", "2D Echocardiography", "Treadmill stress test (TMT)", "Cardiac CT angiography", "Ambulatory BP monitoring"],
    facilities: ["icu", "emergency", "diagnostics"]
  },
  {
    id: "neurology", name: "Neurology", category: "heart-brain", icon: "brain",
    image: "1559757148-5c350d0d3c56",
    short: "Expert diagnosis and treatment for disorders of the brain, spine and nervous system.",
    overview: [
      "The Neurology department cares for patients with conditions affecting the brain, spinal cord and nerves. We offer rapid stroke assessment, epilepsy care, headache management and long-term support for chronic neurological conditions.",
      "Our neurologists work closely with radiology, physiotherapy and rehabilitation teams so that every patient receives a complete, personalised treatment plan."
    ],
    conditions: ["Stroke", "Epilepsy & seizures", "Migraine & chronic headache", "Parkinson's disease", "Peripheral neuropathy", "Memory disorders"],
    symptoms: ["Sudden weakness or numbness of face, arm or leg", "Slurred speech or confusion", "Severe or recurrent headaches", "Seizures or fainting spells", "Tremors, imbalance or memory loss"],
    treatments: ["Acute stroke management", "Epilepsy medication planning", "Botulinum therapy for migraine & spasticity", "Movement-disorder clinic", "Neuro-rehabilitation"],
    diagnostics: ["MRI & CT brain", "EEG (electroencephalogram)", "Nerve conduction study (NCS)", "EMG", "Carotid Doppler"],
    facilities: ["icu", "radiology", "emergency"]
  },
  {
    id: "orthopedics", name: "Orthopedics", category: "surgical", icon: "bone",
    image: "1530213786676-41ad9f7736f6",
    short: "Bone, joint and spine care including sports injuries and joint replacement.",
    overview: [
      "Orthopedics at LifeCare treats injuries and diseases of bones, joints, ligaments and the spine. We combine conservative treatment, physiotherapy and minimally invasive surgery to restore mobility and relieve pain.",
      "Our joint replacement programme follows enhanced-recovery protocols so many patients start walking within a day of surgery."
    ],
    conditions: ["Osteoarthritis & joint pain", "Fractures & trauma", "Sports injuries (ACL, meniscus)", "Back & neck pain", "Osteoporosis", "Frozen shoulder"],
    symptoms: ["Persistent joint pain or stiffness", "Swelling after an injury", "Difficulty walking or climbing stairs", "Back pain radiating to the legs", "Reduced range of movement"],
    treatments: ["Total knee & hip replacement", "Arthroscopic (keyhole) surgery", "Fracture fixation", "Spine care & pain management", "Physiotherapy & rehabilitation"],
    diagnostics: ["Digital X-ray", "MRI of joints & spine", "Bone density (DEXA) scan", "CT scan", "Gait assessment"],
    facilities: ["operation-theatres", "radiology", "patient-rooms"]
  },
  {
    id: "general-medicine", name: "General Medicine", category: "internal", icon: "stethoscope",
    image: "1576765608535-5f04d1e3f289",
    short: "Your first point of care for fevers, infections, diabetes, BP and preventive health.",
    overview: [
      "General Medicine is the foundation of care at LifeCare. Our physicians diagnose and manage a wide range of acute and chronic illnesses and coordinate referrals to specialists when needed.",
      "We place a strong emphasis on prevention — annual health check-ups, vaccination and lifestyle counselling help patients stay healthy for longer."
    ],
    conditions: ["Diabetes", "High blood pressure", "Thyroid disorders", "Fever & infections (dengue, typhoid, malaria)", "Asthma & respiratory infections", "Anaemia"],
    symptoms: ["Fever lasting more than two days", "Excessive thirst or frequent urination", "Persistent cough or breathlessness", "Unexplained weight change", "General weakness or fatigue"],
    treatments: ["Chronic disease management", "Infection & fever management", "Executive health check-ups", "Adult vaccination", "Lifestyle & diet counselling"],
    diagnostics: ["Complete blood count & profiles", "HbA1c & sugar testing", "Thyroid function tests", "Chest X-ray", "Pulmonary function test"],
    facilities: ["laboratory", "pharmacy", "opd-ipd"]
  },
  {
    id: "pediatrics", name: "Pediatrics", category: "women-children", icon: "baby",
    image: "1632053002928-1919605ee6f7",
    short: "Gentle, child-friendly care for newborns, children and adolescents.",
    overview: [
      "Our Pediatrics department offers complete healthcare for children from birth through adolescence. Child-friendly consultation rooms and caring staff help little patients feel safe and relaxed.",
      "We provide well-baby check-ups, vaccinations, developmental assessments and treatment of childhood illnesses, supported by a neonatal care unit."
    ],
    conditions: ["Childhood fevers & infections", "Asthma & allergies", "Growth & nutrition concerns", "Neonatal jaundice", "Diarrhoea & dehydration", "Developmental delays"],
    symptoms: ["High or persistent fever", "Poor feeding or weight gain", "Breathing difficulty or wheezing", "Repeated vomiting or loose stools", "Unusual drowsiness or irritability"],
    treatments: ["Immunisation programme", "Newborn & neonatal care", "Growth & development monitoring", "Pediatric asthma clinic", "Adolescent health counselling"],
    diagnostics: ["Pediatric blood tests", "Newborn screening", "Allergy testing", "Ultrasound", "Developmental screening"],
    facilities: ["icu", "patient-rooms", "pharmacy"]
  },
  {
    id: "gynecology", name: "Gynecology & Obstetrics", category: "women-children", icon: "venus",
    image: "1632053651899-3389100579fb",
    short: "Women's health at every stage — pregnancy, fertility, menopause and more.",
    overview: [
      "The Gynecology & Obstetrics department supports women through every stage of life with respectful, private and compassionate care.",
      "We offer antenatal care, safe delivery suites, high-risk pregnancy management, minimally invasive gynecological surgery and menopause clinics."
    ],
    conditions: ["Pregnancy & antenatal care", "PCOS / PCOD", "Menstrual disorders", "Fibroids & ovarian cysts", "Infertility", "Menopause symptoms"],
    symptoms: ["Irregular or painful periods", "Heavy menstrual bleeding", "Pelvic pain", "Difficulty conceiving", "Hot flushes or mood changes"],
    treatments: ["Normal & caesarean delivery", "High-risk pregnancy care", "Laparoscopic gynec surgery", "Fertility evaluation", "Cervical cancer screening"],
    diagnostics: ["Obstetric ultrasound", "Pap smear", "Hormone profile", "Hysteroscopy", "Mammography"],
    facilities: ["operation-theatres", "patient-rooms", "laboratory"]
  },
  {
    id: "dermatology", name: "Dermatology", category: "sensory-skin", icon: "sparkles",
    image: "1570172619644-dfd03ed5d881",
    short: "Medical and aesthetic care for skin, hair and nails.",
    overview: [
      "Our Dermatology department diagnoses and treats conditions of the skin, hair and nails for patients of all ages.",
      "Alongside medical dermatology, we offer safe, evidence-based procedures for acne scars, pigmentation and hair loss."
    ],
    conditions: ["Eczema & dermatitis", "Psoriasis", "Acne & acne scars", "Fungal infections", "Hair loss", "Vitiligo & pigmentation"],
    symptoms: ["Persistent itching or rash", "Scaly or red patches", "Sudden hair fall", "Changes in a mole or skin spot", "Non-healing skin wounds"],
    treatments: ["Medical skin therapy", "Phototherapy", "Chemical peels", "Laser & scar treatments", "Hair restoration therapy"],
    diagnostics: ["Dermoscopy", "Skin biopsy", "Patch testing", "Fungal scraping", "Allergy screening"],
    facilities: ["opd-ipd", "pharmacy", "laboratory"]
  },
  {
    id: "oncology", name: "Oncology", category: "surgical", icon: "ribbon",
    image: "1598885159329-9377168ac375",
    short: "Compassionate, multidisciplinary cancer care from screening to survivorship.",
    overview: [
      "The Oncology department brings medical, surgical and radiation oncology specialists together in a tumour board to plan every patient's treatment.",
      "Patients and families are supported throughout with counselling, nutrition advice, pain management and palliative care."
    ],
    conditions: ["Breast cancer", "Head & neck cancers", "Lung cancer", "Gastrointestinal cancers", "Blood cancers", "Gynecological cancers"],
    symptoms: ["A lump or swelling that does not go away", "Unexplained weight loss", "Persistent cough or hoarseness", "Unusual bleeding", "Long-lasting fatigue"],
    treatments: ["Chemotherapy & day-care infusion", "Targeted & immunotherapy", "Cancer surgery", "Radiation therapy coordination", "Palliative & supportive care"],
    diagnostics: ["Cancer screening packages", "Biopsy & histopathology", "Tumour markers", "PET-CT coordination", "Mammography"],
    facilities: ["operation-theatres", "laboratory", "pharmacy"]
  },
  {
    id: "gastroenterology", name: "Gastroenterology", category: "internal", icon: "stomach",
    image: "1581595220975-119360b1c63f",
    short: "Digestive, liver and pancreas care with advanced endoscopy.",
    overview: [
      "Gastroenterology at LifeCare manages disorders of the oesophagus, stomach, intestines, liver, gallbladder and pancreas.",
      "Our endoscopy suite enables accurate, minimally invasive diagnosis and treatment, often as a day-care procedure."
    ],
    conditions: ["Acidity & GERD", "Irritable bowel syndrome", "Fatty liver & hepatitis", "Gallstones", "Peptic ulcers", "Pancreatitis"],
    symptoms: ["Frequent heartburn or acidity", "Abdominal pain or bloating", "Change in bowel habits", "Yellowing of eyes or skin", "Blood in stool or vomit"],
    treatments: ["Diagnostic & therapeutic endoscopy", "Colonoscopy & polyp removal", "ERCP", "Liver disease management", "Nutrition counselling"],
    diagnostics: ["Upper GI endoscopy", "Colonoscopy", "Liver function tests", "FibroScan", "Abdominal ultrasound"],
    facilities: ["diagnostics", "laboratory", "operation-theatres"]
  },
  {
    id: "urology", name: "Urology & Nephrology", category: "surgical", icon: "droplet",
    image: "1559757175-053139280de2",
    short: "Care for kidneys, urinary tract and male reproductive health.",
    overview: [
      "Our Urology & Nephrology team treats conditions of the kidneys, bladder, prostate and urinary tract using modern minimally invasive and laser techniques.",
      "We also provide dialysis support and long-term care for chronic kidney disease."
    ],
    conditions: ["Kidney stones", "Chronic kidney disease", "Urinary tract infections", "Enlarged prostate (BPH)", "Urinary incontinence", "Kidney & bladder tumours"],
    symptoms: ["Pain in the side or lower back", "Burning or frequent urination", "Blood in urine", "Weak urine stream", "Swelling with reduced urine output"],
    treatments: ["Laser stone removal (RIRS / URS)", "TURP for prostate", "Dialysis support", "Minimally invasive urologic surgery", "CKD management"],
    diagnostics: ["Kidney function tests", "Ultrasound KUB", "Uroflowmetry", "CT urography", "Cystoscopy"],
    facilities: ["operation-theatres", "laboratory", "radiology"]
  },
  {
    id: "ent", name: "ENT", category: "sensory-skin", icon: "ear",
    image: "1667581357884-383011327fd9",
    short: "Ear, nose and throat care including hearing, sinus and voice disorders.",
    overview: [
      "The ENT (Otorhinolaryngology) department treats conditions of the ear, nose, throat, head and neck in adults and children.",
      "We offer endoscopic sinus surgery, hearing assessments, tonsil and adenoid surgery and treatment for voice and swallowing disorders."
    ],
    conditions: ["Sinusitis", "Hearing loss", "Tonsillitis", "Ear infections", "Vertigo", "Snoring & sleep apnoea"],
    symptoms: ["Blocked nose or facial pressure", "Ear pain or discharge", "Ringing in the ears", "Sore throat that keeps returning", "Dizziness or spinning sensation"],
    treatments: ["Endoscopic sinus surgery", "Tonsillectomy & adenoidectomy", "Hearing aid fitting", "Ear microsurgery", "Vertigo rehabilitation"],
    diagnostics: ["Audiometry", "Nasal endoscopy", "Tympanometry", "CT sinuses", "Sleep study coordination"],
    facilities: ["operation-theatres", "diagnostics", "opd-ipd"]
  },
  {
    id: "ophthalmology", name: "Ophthalmology", category: "sensory-skin", icon: "eye",
    image: "1632054224659-280be3239aff",
    short: "Complete eye care — cataract, glaucoma, retina and vision correction.",
    overview: [
      "Ophthalmology at LifeCare provides comprehensive eye examinations and advanced treatment for common and complex eye conditions.",
      "Day-care cataract surgery, glaucoma management and diabetic eye screening help protect your vision for life."
    ],
    conditions: ["Cataract", "Glaucoma", "Diabetic retinopathy", "Refractive errors", "Dry eye", "Conjunctivitis"],
    symptoms: ["Blurred or cloudy vision", "Glare or halos around lights", "Eye pain or redness", "Sudden floaters or flashes", "Difficulty reading or seeing at night"],
    treatments: ["Phaco cataract surgery", "Glaucoma treatment", "Retina laser therapy", "Spectacle & contact lens clinic", "Pediatric eye care"],
    diagnostics: ["Computerised eye testing", "OCT scan", "Fundus photography", "Visual field test", "Tonometry"],
    facilities: ["operation-theatres", "diagnostics", "pharmacy"]
  }
];

window.FACILITIES = [
  { id: "emergency", name: "Emergency Care", icon: "ambulance", image: "1517120026326-d87759a7b63b",
    short: "24×7 emergency department with rapid triage and trauma care.",
    text: "Our emergency department is open around the clock with experienced emergency physicians, a dedicated trauma bay and fast access to imaging, laboratory and operation theatres. Patients are triaged on arrival so the most critical receive care first.",
    points: ["24×7 emergency physicians", "Dedicated trauma & resuscitation bays", "Rapid stroke & heart-attack pathways", "Direct link to ICU and operation theatres"] },
  { id: "icu", name: "Intensive Care Unit", icon: "monitor", image: "1580281657702-257584239a55",
    short: "Advanced critical care with continuous monitoring.",
    text: "The ICU provides round-the-clock monitoring and life support for critically ill patients. Separate medical, surgical, cardiac and neonatal units are staffed by intensivists and specially trained nurses.",
    points: ["Medical, surgical, cardiac & neonatal ICUs", "Ventilators & multi-parameter monitors", "High nurse-to-patient ratio", "Infection-control protocols"] },
  { id: "operation-theatres", name: "Operation Theatres", icon: "surgery", image: "1516549655169-df83a0774514",
    short: "Modular theatres with laminar airflow for safe surgery.",
    text: "Modular operation theatres with laminar airflow and HEPA filtration support general, laparoscopic, orthopedic and specialty surgery, with a dedicated recovery area.",
    points: ["Modular theatres with HEPA filtration", "Laparoscopic & endoscopic equipment", "Advanced anaesthesia workstations", "Post-operative recovery unit"] },
  { id: "diagnostics", name: "Advanced Diagnostics", icon: "activity", image: "1559000357-f6b52ddfbe37",
    short: "Cardiac, neuro and endoscopy diagnostics under one roof.",
    text: "Our diagnostic wing brings together cardiology tests, neuro-physiology and endoscopy so that patients can complete their evaluations quickly, often on the same day.",
    points: ["ECG, Echo, TMT & Holter", "EEG, NCS & EMG", "Endoscopy & colonoscopy suite", "Same-day reports for most tests"] },
  { id: "laboratory", name: "Diagnostic Laboratory", icon: "microscope", image: "1579154204601-01588f351e67",
    short: "Automated pathology lab with quality-controlled testing.",
    text: "A fully automated laboratory offers biochemistry, haematology, microbiology and histopathology services, with home sample collection available for convenience.",
    points: ["Automated analysers", "Internal & external quality control", "Home sample collection", "Digital reports"] },
  { id: "radiology", name: "Radiology & Imaging", icon: "scan", image: "1588776814546-1ffcf47267a5",
    short: "MRI, CT, digital X-ray and ultrasound imaging.",
    text: "The imaging department offers MRI, CT, digital X-ray, ultrasound and mammography, read by experienced radiologists for accurate diagnosis.",
    points: ["MRI & multi-slice CT", "Digital X-ray & mammography", "Ultrasound & Doppler", "Reports shared digitally with your doctor"] },
  { id: "pharmacy", name: "24×7 Pharmacy", icon: "pill", image: "1576602976047-174e57a47881",
    short: "In-house pharmacy open round the clock.",
    text: "Our in-house pharmacy stocks a wide range of medicines and surgical supplies and is open 24 hours a day, every day, with pharmacists available for guidance.",
    points: ["Open 24 hours, 7 days", "Qualified pharmacists", "Cold-chain storage for vaccines", "Discharge medication counselling"] },
  { id: "ambulance", name: "Ambulance Services", icon: "ambulance", image: "1619025873875-59dfdd2bbbd6",
    short: "Equipped ambulances with trained paramedics.",
    text: "A fleet of basic and advanced life-support ambulances with trained paramedics is available for emergencies and inter-hospital transfers.",
    points: ["Advanced life-support (ALS) ambulances", "Trained paramedics on board", "GPS-enabled dispatch", "Inter-hospital transfers"] },
  { id: "patient-rooms", name: "Patient Rooms", icon: "bed", image: "1512678080530-7760d81faba6",
    short: "Clean, comfortable rooms designed for recovery.",
    text: "Choose from general wards, semi-private and private rooms. Every room is designed for comfort, privacy and infection control, with nurse-call systems at every bed.",
    points: ["General, semi-private & private rooms", "Nurse-call system at every bed", "Family-friendly visiting areas", "Dietitian-planned meals"] },
  { id: "opd-ipd", name: "Inpatient & Outpatient Services", icon: "hospital", image: "1631248055158-edec7a3c072b",
    short: "Smooth OPD consultations and coordinated inpatient care.",
    text: "Spacious outpatient clinics with a simple registration process, and coordinated inpatient care with daily doctor rounds, clear discharge planning and follow-up.",
    points: ["Easy registration & help desk", "Specialist OPD clinics, Mon–Sat", "Insurance & cashless assistance desk", "Structured discharge & follow-up"] }
];

/* ---------------------------- Helpers ---------------------------- */
window.getDepartment = function (id) { return window.DEPARTMENTS.find(function (d) { return d.id === id; }); };
window.getFacility = function (id) { return window.FACILITIES.find(function (f) { return f.id === id; }); };
function deptCategoryLabel(id) { const c = window.DEPT_CATEGORIES.find(function (x) { return x.id === id; }); return c ? c.label : ""; }

/* ---------------------------- Renderers ---------------------------- */
LC.ready(function () {
  const { icon, img, esc } = LC;

  /* Home: department tiles ------------------------------------------------ */
  const homeGrid = document.getElementById("home-departments");
  if (homeGrid) {
    homeGrid.innerHTML = DEPARTMENTS.map(function (d) {
      return '<a class="dept-tile" href="department-details.html?id=' + d.id + '">' +
        '<span class="icon-badge">' + icon(d.icon) + "</span>" +
        "<div><h3>" + esc(d.name) + "</h3><p>" + esc(d.conditions.slice(0, 2).join(", ")) + "</p></div></a>";
    }).join("");
    LC.refresh(homeGrid);
  }

  /* Facility cards (home) ------------------------------------------------- */
  const homeFac = document.getElementById("home-facilities");
  if (homeFac) {
    // 10 cards, first & last span two columns → fills a clean 4-column grid (3 rows)
    const ids = ["emergency", "icu", "operation-theatres", "laboratory", "radiology", "pharmacy", "ambulance", "diagnostics", "patient-rooms", "opd-ipd"];
    homeFac.innerHTML = ids.map(function (id, i) {
      const f = getFacility(id);
      const wide = (i === 0 || i === ids.length - 1) ? " facility-card--wide" : "";
      return '<a class="facility-card' + wide + '" href="facilities.html#' + f.id + '">' +
        '<img src="' + img(f.image, wide ? 900 : 600, 600) + '" alt="' + esc(f.name) + '" loading="lazy" width="600" height="600">' +
        '<div class="facility-card__body"><span class="icon-badge">' + icon(f.icon) + "</span><h3>" + esc(f.name) + "</h3><p>" + esc(f.short) + "</p></div></a>";
    }).join("");
    LC.refresh(homeFac);
  }

  /* Facilities page: alternating rows ------------------------------------- */
  const facList = document.getElementById("facility-list");
  if (facList) {
    facList.innerHTML = FACILITIES.map(function (f) {
      const related = DEPARTMENTS.filter(function (d) { return d.facilities.indexOf(f.id) > -1; }).slice(0, 4);
      return '<article class="facility-row" id="' + f.id + '">' +
        '<div class="facility-row__media reveal"><img src="' + img(f.image, 1000, 625) + '" alt="' + esc(f.name) + ' at LifeCare" loading="lazy" width="1000" height="625"></div>' +
        '<div class="reveal">' +
          '<span class="icon-badge" style="margin-bottom:16px">' + icon(f.icon) + "</span>" +
          "<h2>" + esc(f.name) + "</h2><p>" + esc(f.text) + "</p>" +
          '<ul class="check-list">' + f.points.map(function (p) { return "<li>" + icon("check") + "<span>" + esc(p) + "</span></li>"; }).join("") + "</ul>" +
          (related.length ? '<p style="margin:20px 0 0;font-size:.95rem"><strong>Supports:</strong> ' +
            related.map(function (d) { return '<a href="department-details.html?id=' + d.id + '">' + esc(d.name) + "</a>"; }).join(" · ") + "</p>" : "") +
        "</div></article>";
    }).join("");
    LC.refresh(facList);
    // Jump to hash target once content exists (e.g. facilities.html#icu)
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView(); }, 50); }
  }

  /* Departments page: grid + category filter + search --------------------- */
  const listEl = document.getElementById("dept-list");
  if (listEl) {
    const chipsEl = document.getElementById("dept-filters");
    const searchEl = document.getElementById("dept-search");
    const metaEl = document.getElementById("dept-meta");
    let activeCat = LC.qs("category") || "all";

    chipsEl.innerHTML = [{ id: "all", label: "All Departments" }].concat(DEPT_CATEGORIES).map(function (c) {
      const count = c.id === "all" ? DEPARTMENTS.length : DEPARTMENTS.filter(function (d) { return d.category === c.id; }).length;
      return '<button type="button" class="chip' + (c.id === activeCat ? " is-active" : "") + '" data-cat="' + c.id + '" aria-pressed="' + (c.id === activeCat) + '">' + esc(c.label) + '<span class="count">(' + count + ")</span></button>";
    }).join("");

    function card(d) {
      const docs = (window.DOCTORS || []).filter(function (doc) { return doc.dept === d.id; });
      const docHTML = docs.length
        ? '<div class="dept-full__doctors"><div class="avatar-stack">' + docs.map(function (doc) {
            return '<img src="' + img(doc.photo, 80, 80, { faces: true }) + '" alt="' + esc(doc.name) + '" loading="lazy" width="38" height="38">';
          }).join("") + "</div><span><strong>Specialists:</strong> " + docs.map(function (doc) {
            return '<a href="doctor-details.html?id=' + doc.id + '">' + esc(doc.name) + "</a>";
          }).join(", ") + "</span></div>"
        : "";
      return '<article class="dept-full reveal">' +
        '<div class="dept-full__media"><img src="' + img(d.image, 700, 600) + '" alt="' + esc(d.name) + ' department" loading="lazy" width="700" height="600"><span class="dept-card__cat">' + esc(deptCategoryLabel(d.category)) + "</span></div>" +
        '<div class="dept-full__body">' +
          '<div class="dept-full__head"><span class="icon-badge">' + icon(d.icon) + "</span><h3>" + esc(d.name) + "</h3></div>" +
          "<p>" + esc(d.short) + "</p>" +
          '<div class="dept-full__cols">' +
            "<div><h4>Common conditions</h4><ul class=\"dot-list\">" + d.conditions.slice(0, 4).map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul></div>" +
            "<div><h4>Available treatments</h4><ul class=\"dot-list\">" + d.treatments.slice(0, 4).map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul></div>" +
          "</div>" + docHTML +
          '<div class="btn-row"><a class="btn btn--primary btn--sm" href="department-details.html?id=' + d.id + '">View Details ' + icon("arrowRight") + "</a>" +
          '<a class="btn btn--outline btn--sm" href="appointment.html?dept=' + d.id + '">Book Appointment</a></div>' +
        "</div></article>";
    }

    function render() {
      const q = (searchEl.value || "").trim().toLowerCase();
      const items = DEPARTMENTS.filter(function (d) {
        const inCat = activeCat === "all" || d.category === activeCat;
        const hay = (d.name + " " + d.short + " " + d.conditions.join(" ") + " " + d.treatments.join(" ")).toLowerCase();
        return inCat && (!q || hay.indexOf(q) > -1);
      });
      metaEl.textContent = "Showing " + items.length + " of " + DEPARTMENTS.length + " departments";
      listEl.innerHTML = items.length ? items.map(card).join("") :
        '<div class="empty-state"><span class="icon-badge">' + icon("search") + "</span><h3>No departments found</h3><p>Try a different search term or category.</p></div>";
      LC.refresh(listEl);
    }

    chipsEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".chip"); if (!btn) return;
      activeCat = btn.getAttribute("data-cat");
      chipsEl.querySelectorAll(".chip").forEach(function (c) { const on = c === btn; c.classList.toggle("is-active", on); c.setAttribute("aria-pressed", on); });
      render();
    });
    searchEl.addEventListener("input", render);
    render();
  }

  /* Department details page ----------------------------------------------- */
  const detailEl = document.getElementById("dept-detail");
  if (detailEl) {
    const d = getDepartment(LC.qs("id")) ;
    const heroEl = document.getElementById("dept-hero");
    if (!d) {
      heroEl.innerHTML = '<div class="container"><ol class="breadcrumb"><li><a href="index.html">Home</a></li><li><a href="departments.html">Departments</a></li><li aria-current="page">Not found</li></ol><h1>Department not found</h1><p>The department you are looking for may have moved.</p></div>';
      detailEl.innerHTML = '<div class="not-found"><span class="icon-badge">' + icon("search") + '</span><h2>Please choose a department</h2><p>Browse all our medical departments below.</p><a class="btn btn--primary" href="departments.html">View All Departments</a></div>';
      LC.refresh(document.body);
      return;
    }
    document.title = d.name + " Department | LifeCare Multispeciality Hospital";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", d.name + " at LifeCare Multispeciality Hospital — " + d.short);

    heroEl.innerHTML = '<div class="container page-hero__grid">' +
      "<div>" +
        '<ol class="breadcrumb"><li><a href="index.html">Home</a></li><li><a href="departments.html">Departments</a></li><li aria-current="page">' + esc(d.name) + "</li></ol>" +
        '<span class="eyebrow">' + esc(deptCategoryLabel(d.category)) + "</span>" +
        "<h1>" + esc(d.name) + "</h1><p>" + esc(d.short) + "</p>" +
        '<div class="btn-row" style="margin-top:26px"><a class="btn btn--primary" href="appointment.html?dept=' + d.id + '">' + icon("calendarCheck") + 'Book Appointment</a><a class="btn btn--outline" href="#specialists">' + icon("userDoc") + "Our Specialists</a></div>" +
      "</div>" +
      '<div class="page-hero__media"><img src="' + img(d.image, 900, 650) + '" alt="' + esc(d.name) + ' department" width="900" height="650"></div>' +
    "</div>";

    const docs = (window.DOCTORS || []).filter(function (doc) { return doc.dept === d.id; });
    const list = function (arr) { return '<ul class="check-list">' + arr.map(function (x) { return "<li>" + icon("check") + "<span>" + esc(x) + "</span></li>"; }).join("") + "</ul>"; };
    const facilities = d.facilities.map(getFacility).filter(Boolean);
    const conditionsLinked = (window.CONDITIONS || []).filter(function (c) { return c.dept === d.id; });

    detailEl.innerHTML =
      '<div class="detail-layout">' +
        '<div class="detail-main">' +
          '<section class="reveal"><h2><span class="icon-badge">' + icon(d.icon) + "</span>Department Overview</h2>" + d.overview.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</section>" +
          '<section class="reveal"><h2><span class="icon-badge">' + icon("clipboard") + "</span>Conditions We Treat</h2>" +
            '<ul class="tag-list" style="margin-bottom:18px">' + d.conditions.map(function (c) { return '<li class="tag tag--teal">' + esc(c) + "</li>"; }).join("") + "</ul>" +
            (conditionsLinked.length ? '<p style="font-size:.96rem">Learn more: ' + conditionsLinked.map(function (c) { return '<a href="treatments.html?q=' + encodeURIComponent(c.name) + '">' + esc(c.name) + "</a>"; }).join(" · ") + "</p>" : "") +
          "</section>" +
          '<section class="reveal"><h2><span class="icon-badge icon-badge--red">' + icon("alert") + "</span>Symptoms to Watch For</h2>" +
            '<div class="symptom-box"><p style="margin-bottom:12px">Consult a specialist if you notice any of the following:</p>' + list(d.symptoms) + "</div>" +
            '<p style="margin-top:14px;font-size:.92rem;color:var(--muted)">' + icon("info") + " This list is for general awareness only. If symptoms are sudden or severe, call emergency services immediately.</p>" +
          "</section>" +
          '<section class="reveal"><div class="info-grid">' +
            '<div class="info-tile"><h4>' + icon("handHeart") + "Treatment Services</h4>" + '<ul class="dot-list">' + d.treatments.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
            '<div class="info-tile"><h4>' + icon("microscope") + "Diagnostic Services</h4>" + '<ul class="dot-list">' + d.diagnostics.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
          "</div></section>" +
          '<section id="specialists" class="reveal"><h2><span class="icon-badge">' + icon("userDoc") + "</span>Available Specialists</h2>" +
            (docs.length ? '<div class="doctor-grid">' + docs.map(window.doctorCardHTML || function () { return ""; }).join("") + "</div>"
              : "<p>Specialist schedule coming soon. Please call us for consultations.</p>") +
          "</section>" +
          '<section class="reveal"><h2><span class="icon-badge">' + icon("hospital") + "</span>Related Facilities</h2>" +
            '<div class="info-grid">' + facilities.map(function (f) {
              return '<a class="info-tile" href="facilities.html#' + f.id + '"><h4>' + icon(f.icon) + esc(f.name) + "</h4><p>" + esc(f.short) + "</p></a>";
            }).join("") + "</div>" +
          "</section>" +
        "</div>" +
        '<aside class="sidebar">' +
          '<div class="card help-card"><h3>Need help choosing?</h3><p style="margin:0">Our patient care team can guide you to the right specialist.</p><a class="phone-big" data-site-link="phone" href="#"><span data-site="phone"></span></a><a class="btn btn--white btn--block" href="appointment.html?dept=' + d.id + '">Book Appointment</a></div>' +
          '<div class="card"><h3>All Departments</h3><ul class="side-links">' + DEPARTMENTS.map(function (x) {
            return '<li><a href="department-details.html?id=' + x.id + '"' + (x.id === d.id ? ' class="is-current" aria-current="page"' : "") + ">" + icon(x.icon) + esc(x.name) + "</a></li>";
          }).join("") + "</ul></div>" +
          '<div class="card"><h3>Visiting Hours</h3><p style="margin:0;font-size:.96rem"><strong>OPD:</strong> <span data-site="hours"></span><br><strong data-site="emergencyHours"></strong></p></div>' +
        "</aside>" +
      "</div>";
    LC.refresh(document.body);
  }
});

/* =========================================================================
   LifeCare — treatments.js
   -------------------------------------------------------------------------
   • CONDITIONS : patient-friendly educational information about common
                  diseases and conditions, mapped to departments.
                  This is general information, NOT medical advice.
   • Renderers  : home condition list, treatments directory with
                  department filter + keyword search (treatments.html?q=…)
   ========================================================================= */

window.CONDITIONS = [
  { id: "heart-disease", name: "Heart Disease", dept: "cardiology", icon: "heartPulse",
    summary: "Conditions such as coronary artery disease that reduce blood flow to the heart and raise the risk of heart attack.",
    symptoms: ["Chest pain or pressure", "Breathlessness", "Fatigue", "Pain in arm, jaw or back"],
    treatments: ["ECG & Echo", "Angiography & angioplasty", "Medication & lifestyle care", "Cardiac rehab"] },
  { id: "hypertension", name: "High Blood Pressure", dept: "cardiology", icon: "activity",
    summary: "Persistently raised blood pressure that silently strains the heart, brain and kidneys if left untreated.",
    symptoms: ["Often no symptoms", "Headache", "Dizziness", "Blurred vision"],
    treatments: ["BP monitoring", "Medication management", "Diet & exercise plan", "Kidney & heart screening"] },
  { id: "diabetes", name: "Diabetes", dept: "general-medicine", icon: "droplet",
    summary: "A long-term condition where blood sugar stays high because the body cannot use insulin effectively.",
    symptoms: ["Excessive thirst", "Frequent urination", "Slow-healing wounds", "Unexplained weight loss"],
    treatments: ["HbA1c & sugar testing", "Personalised medication", "Diet counselling", "Eye, kidney & foot screening"] },
  { id: "thyroid", name: "Thyroid Disorders", dept: "general-medicine", icon: "stethoscope",
    summary: "Over- or under-activity of the thyroid gland that affects metabolism, weight, energy and mood.",
    symptoms: ["Weight change", "Tiredness", "Hair fall", "Feeling too hot or cold"],
    treatments: ["Thyroid function tests", "Hormone therapy", "Ultrasound neck", "Regular follow-up"] },
  { id: "asthma", name: "Asthma & Respiratory Conditions", dept: "general-medicine", icon: "lungs",
    summary: "Inflammation and narrowing of the airways causing wheezing and breathlessness, often triggered by allergies or infections.",
    symptoms: ["Wheezing", "Cough at night", "Chest tightness", "Shortness of breath"],
    treatments: ["Pulmonary function test", "Inhaler therapy", "Allergy management", "Nebulisation"] },
  { id: "fever-infections", name: "Fever & Infections", dept: "general-medicine", icon: "thermometer",
    summary: "Seasonal and tropical infections such as dengue, malaria and typhoid that need timely diagnosis.",
    symptoms: ["High fever", "Body ache", "Rash", "Weakness"],
    treatments: ["Rapid blood tests", "Hydration & medication", "Inpatient monitoring if needed"] },
  { id: "arthritis", name: "Arthritis", dept: "orthopedics", icon: "bone",
    summary: "Inflammation or wear of the joints that causes pain and stiffness, most commonly in knees, hips and hands.",
    symptoms: ["Joint pain", "Morning stiffness", "Swelling", "Reduced movement"],
    treatments: ["X-ray & blood tests", "Physiotherapy", "Pain management", "Joint replacement"] },
  { id: "joint-pain", name: "Joint & Back Pain", dept: "orthopedics", icon: "bone",
    summary: "Pain in the joints, neck or back caused by injury, posture, disc problems or degeneration.",
    symptoms: ["Persistent pain", "Pain radiating to limbs", "Numbness or tingling", "Difficulty bending"],
    treatments: ["MRI evaluation", "Physiotherapy", "Spine care", "Minimally invasive surgery"] },
  { id: "stroke", name: "Stroke", dept: "neurology", icon: "brain",
    summary: "A medical emergency where blood supply to part of the brain is blocked or bleeds. Every minute matters.",
    symptoms: ["Face drooping", "Arm weakness", "Speech difficulty", "Sudden confusion"],
    treatments: ["Emergency CT/MRI", "Clot-dissolving therapy", "Stroke ICU", "Neuro-rehabilitation"] },
  { id: "neuro-disorders", name: "Brain & Neurological Disorders", dept: "neurology", icon: "brain",
    summary: "Conditions such as epilepsy, migraine, Parkinson's disease and neuropathy that affect the nervous system.",
    symptoms: ["Seizures", "Severe headaches", "Tremors", "Numbness or weakness"],
    treatments: ["EEG & NCS", "Medication planning", "Botulinum therapy", "Physiotherapy"] },
  { id: "skin-diseases", name: "Skin Diseases", dept: "dermatology", icon: "sparkles",
    summary: "Common skin conditions including eczema, psoriasis, acne, fungal infections and pigmentation.",
    symptoms: ["Itching", "Rash or redness", "Scaly patches", "Acne or scars"],
    treatments: ["Medical skin therapy", "Phototherapy", "Chemical peels", "Laser treatment"] },
  { id: "digestive", name: "Digestive Disorders", dept: "gastroenterology", icon: "stomach",
    summary: "Problems such as acidity, GERD, IBS, ulcers and gallstones affecting the digestive tract.",
    symptoms: ["Heartburn", "Bloating", "Abdominal pain", "Change in bowel habits"],
    treatments: ["Endoscopy", "Colonoscopy", "Medication & diet plan", "Minimally invasive surgery"] },
  { id: "liver", name: "Liver Diseases", dept: "gastroenterology", icon: "stomach",
    summary: "Fatty liver, hepatitis and cirrhosis that affect how the liver processes nutrients and toxins.",
    symptoms: ["Yellow eyes or skin", "Fatigue", "Abdominal swelling", "Loss of appetite"],
    treatments: ["Liver function tests", "FibroScan", "Antiviral therapy", "Nutrition counselling"] },
  { id: "kidney", name: "Kidney Diseases & Stones", dept: "urology", icon: "droplet",
    summary: "Kidney stones, infections and chronic kidney disease that affect how the body filters waste.",
    symptoms: ["Flank pain", "Blood in urine", "Burning urination", "Swelling of feet"],
    treatments: ["Ultrasound & CT KUB", "Laser stone removal", "Dialysis support", "CKD management"] },
  { id: "prostate", name: "Prostate Problems", dept: "urology", icon: "droplet",
    summary: "Enlargement of the prostate gland in men that commonly causes urinary difficulties with age.",
    symptoms: ["Weak urine stream", "Frequent night urination", "Incomplete emptying"],
    treatments: ["Uroflowmetry", "Medication", "TURP / laser prostate surgery"] },
  { id: "womens-health", name: "Women's Health Conditions", dept: "gynecology", icon: "venus",
    summary: "PCOS, menstrual disorders, fibroids and menopause concerns that affect women's wellbeing.",
    symptoms: ["Irregular periods", "Pelvic pain", "Heavy bleeding", "Hormonal changes"],
    treatments: ["Ultrasound & hormone tests", "Medical therapy", "Laparoscopic surgery", "Menopause clinic"] },
  { id: "pregnancy", name: "Pregnancy Care", dept: "gynecology", icon: "venus",
    summary: "Complete antenatal care, delivery and postnatal support for mother and baby.",
    symptoms: ["Regular check-ups recommended", "Seek care for bleeding or severe pain", "Reduced baby movements"],
    treatments: ["Antenatal scans", "High-risk pregnancy care", "Normal & C-section delivery", "Lactation support"] },
  { id: "childhood", name: "Childhood Illnesses", dept: "pediatrics", icon: "baby",
    summary: "Common illnesses in children such as fevers, coughs, ear infections and stomach upsets.",
    symptoms: ["Fever", "Cough & cold", "Vomiting or diarrhoea", "Poor feeding"],
    treatments: ["Pediatric consultation", "Vaccination", "Nebulisation", "Day-care observation"] },
  { id: "cancer", name: "Cancer", dept: "oncology", icon: "ribbon",
    summary: "Abnormal cell growth that can occur in any organ. Early detection greatly improves outcomes.",
    symptoms: ["Unexplained lump", "Weight loss", "Persistent cough", "Unusual bleeding"],
    treatments: ["Screening & biopsy", "Chemotherapy", "Surgery", "Palliative care"] },
  { id: "sinus-hearing", name: "Sinus, Throat & Hearing Problems", dept: "ent", icon: "ear",
    summary: "Sinusitis, tonsillitis, ear infections and hearing loss affecting the ear, nose and throat.",
    symptoms: ["Blocked nose", "Ear pain", "Sore throat", "Hearing difficulty"],
    treatments: ["Nasal endoscopy", "Audiometry", "Sinus surgery", "Hearing aids"] },
  { id: "eye", name: "Cataract & Eye Conditions", dept: "ophthalmology", icon: "eye",
    summary: "Clouding of the eye's lens and other conditions like glaucoma that gradually affect vision.",
    symptoms: ["Blurred vision", "Glare at night", "Faded colours", "Eye pain or redness"],
    treatments: ["Computerised eye test", "Phaco cataract surgery", "Glaucoma care", "Retina screening"] }
];

LC.ready(function () {
  const { icon, esc } = LC;
  const deptName = function (id) { const d = getDepartment(id); return d ? d.name : ""; };

  /* Home: quick condition list -------------------------------------------- */
  const home = document.getElementById("home-conditions");
  if (home) {
    const pick = ["heart-disease", "diabetes", "hypertension", "arthritis", "neuro-disorders", "skin-diseases", "asthma", "digestive", "kidney", "womens-health", "childhood", "eye"];
    home.innerHTML = pick.map(function (id) {
      const c = CONDITIONS.find(function (x) { return x.id === id; });
      return '<a class="cond-pill" href="treatments.html?q=' + encodeURIComponent(c.name) + '"><span class="icon-badge">' + icon(c.icon) + "</span><span>" + esc(c.name) + "<small>" + esc(deptName(c.dept)) + "</small></span>" + icon("chevronRight") + "</a>";
    }).join("");
    LC.refresh(home);
  }

  /* Treatments directory -------------------------------------------------- */
  const list = document.getElementById("condition-list");
  if (!list) return;
  const chipsEl = document.getElementById("condition-filters");
  const searchEl = document.getElementById("condition-search");
  const metaEl = document.getElementById("condition-meta");
  let active = LC.qs("dept") || "all";
  if (LC.qs("q")) searchEl.value = LC.qs("q");

  const deptsWithConditions = DEPARTMENTS.filter(function (d) { return CONDITIONS.some(function (c) { return c.dept === d.id; }); });
  chipsEl.innerHTML = '<button type="button" class="chip' + (active === "all" ? " is-active" : "") + '" data-dept="all">All</button>' +
    deptsWithConditions.map(function (d) { return '<button type="button" class="chip' + (active === d.id ? " is-active" : "") + '" data-dept="' + d.id + '">' + esc(d.name) + "</button>"; }).join("");

  function card(c) {
    return '<article class="cond-card">' +
      '<div class="cond-card__head"><span class="icon-badge">' + icon(c.icon) + "</span><div><h3>" + esc(c.name) + '</h3><span class="tag">' + esc(deptName(c.dept)) + "</span></div></div>" +
      "<p>" + esc(c.summary) + "</p>" +
      "<h4>Common symptoms</h4>" +
      '<ul class="tag-list">' + c.symptoms.map(function (s) { return '<li class="tag tag--teal">' + esc(s) + "</li>"; }).join("") + "</ul>" +
      "<h4>Available treatment services</h4>" +
      '<ul class="dot-list" style="margin-bottom:16px">' + c.treatments.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>" +
      '<div class="cond-card__foot">' +
        '<a class="link-arrow" href="department-details.html?id=' + c.dept + '">' + esc(deptName(c.dept)) + " " + icon("arrowRight") + "</a>" +
        '<a class="btn btn--primary btn--sm" href="doctors.html?dept=' + c.dept + '">' + icon("search") + "Find a Specialist</a>" +
      "</div></article>";
  }

  function render() {
    const q = searchEl.value.trim().toLowerCase();
    const items = CONDITIONS.filter(function (c) {
      const hay = (c.name + " " + c.summary + " " + c.symptoms.join(" ") + " " + deptName(c.dept)).toLowerCase();
      return (active === "all" || c.dept === active) && (!q || hay.indexOf(q) > -1);
    });
    metaEl.textContent = items.length + (items.length === 1 ? " condition" : " conditions") + (q ? ' matching "' + searchEl.value.trim() + '"' : "");
    if (!items.length) {
      list.innerHTML = '<div class="empty-state"><span class="icon-badge">' + icon("search") + '</span><h3>No conditions found</h3><p>Try a simpler word such as "pain", "fever" or "heart" — or <a href="contact.html">ask our help desk</a>.</p></div>';
    } else {
      // Group by department for easy scanning
      const groups = {};
      items.forEach(function (c) { (groups[c.dept] = groups[c.dept] || []).push(c); });
      list.innerHTML = Object.keys(groups).map(function (deptId) {
        const d = getDepartment(deptId);
        return '<section class="cond-group"><div class="cond-group__title"><span class="icon-badge icon-badge--blue">' + icon(d.icon) + "</span><h2>" + esc(d.name) + '</h2></div><div class="cond-grid reveal-stagger">' + groups[deptId].map(card).join("") + "</div></section>";
      }).join("");
    }
    LC.refresh(list);
  }

  chipsEl.addEventListener("click", function (e) {
    const b = e.target.closest(".chip"); if (!b) return;
    active = b.getAttribute("data-dept");
    chipsEl.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("is-active", c === b); });
    render();
  });
  searchEl.addEventListener("input", render);
  document.getElementById("condition-reset").addEventListener("click", function () {
    searchEl.value = ""; active = "all";
    chipsEl.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("is-active", c.getAttribute("data-dept") === "all"); });
    render();
  });
  render();
});

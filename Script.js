// Minimalist Quick Lab — Fonts fixed, i18n toggle fixed, map with Google+Leaflet fallback
(() => {
  "use strict";

  /*** i18n dictionary ***/
  const DICT = {
    en: {
      "brand": "Quick Lab",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.locations": "Locations",
      "nav.contact": "Contact",
      "hero.title": "Welcome to Quick Lab",
      "hero.sub":
        "Your solution for fast, reliable lab support — from method setup and purification workflows to on-demand documentation and QA-friendly deliverables.",
      "hero.cta1": "Contact",
      "hero.cta2": "Learn More",
      "about.title": "About Us",
      "about.body":
        "Quick Lab helps teams move faster in the lab with clean execution and clear documentation. We specialize in assay setup, purification (SPE, flash, prep-HPLC), stability planning, and practical, production-ready SOPs. We speak science and operations so you get results you can trust.",
      "services.title": "Services",
      "services.s1.title": "Assay & Method Setup",
      "services.s1.body": "Design, plate maps, stock calculations, and tidy data handoff. Built to fit your biology and throughput.",
      "services.s2.title": "Purification Workflows",
      "services.s2.body": "SPE, flash, and prep-HPLC strategies balancing recovery, purity, and speed — with settings you can reproduce.",
      "services.s3.title": "Docs & QA-Ready Outputs",
      "services.s3.body": "Concise SOPs, stability plans, and result summaries tailored for stakeholders, reviewers, and auditors.",
      "locations.title": "Locations",
      "locations.note": "Map shows our availability around Jerusalem and Rehovot.",
      "contact.title": "Contact",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.submit": "Submit",
      "footer.rights": "All rights reserved.",
      "social.twitter": "Twitter",
      "social.linkedin": "LinkedIn",
      "social.github": "GitHub"
    },
    he: {
      "brand": "Quick Lab",
      "nav.home": "בית",
      "nav.about": "אודות",
      "nav.services": "שירותים",
      "nav.locations": "מיקומים",
      "nav.contact": "יצירת קשר",
      "hero.title": "ברוכים הבאים ל-Quick Lab",
      "hero.sub":
        "הפתרון שלכם לתמיכה מהירה ואמינה במעבדה — מהקמת שיטות וזרימות ניקוי ועד תיעוד מסודר ותוצרים מוכנים לביקורת.",
      "hero.cta1": "יצירת קשר",
      "hero.cta2": "למדו עוד",
      "about.title": "אודות",
      "about.body":
        "Quick Lab מסייעת לצוותים לנוע מהר יותר במעבדה עם ביצוע נקי ותיעוד ברור. אנו מתמחים בהקמת מבחנים, ניקוי (SPE, פלאש, HPLC פרפ.), תכנון יציבות ו-SOPים פרקטיים ומוכנים לייצור. אנחנו מדברים מדע ותפעול — כדי שתקבלו תוצאות שאפשר לסמוך עליהן.",
      "services.title": "שירותים",
      "services.s1.title": "הקמת מבחנים ושיטות",
      "services.s1.body": "תכנון, מפות בארים, חישובי סטוקים והעברת נתונים מסודרת — מותאם לביולוגיה ולתפוקה שלכם.",
      "services.s2.title": "זרימות ניקוי",
      "services.s2.body": "אסטרטגיות SPE, פלאש ו-HPLC פרפ. שמאזנות תשואה, ניקיון ומהירות — עם פרמטרים ניתנים לשחזור.",
      "services.s3.title": "מסמכים ותוצרים מוכנים ל-QA",
      "services.s3.body": "SOPים תמציתיים, תוכניות יציבות וסיכומי תוצאות המותאמים לבעלי עניין, סוקרים ומבקרים.",
      "locations.title": "מיקומים",
      "locations.note": "המפה מציגה זמינות סביב ירושלים ורחובות.",
      "contact.title": "יצירת קשר",
      "contact.name": "שם",
      "contact.email": "אימייל",
      "contact.subject": "נושא",
      "contact.message": "הודעה",
      "contact.submit": "שליחה",
      "footer.rights": "כל הזכויות שמורות.",
      "social.twitter": "Twitter",
      "social.linkedin": "LinkedIn",
      "social.github": "GitHub"
    }
  };

  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /** Language handling **/
  function applyLanguage(lang){
    const dict = DICT[lang] || DICT.en;
    $$("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    const html = document.documentElement;
    html.lang = (lang === "he") ? "he" : "en";
    html.dir  = (lang === "he") ? "rtl" : "ltr";

    const toggle = document.getElementById("lang-toggle");
    if (toggle){
      if (lang === "he"){
        toggle.textContent = "ENG / אנ";
        toggle.setAttribute("aria-label", "Switch language to English");
        toggle.setAttribute("aria-pressed", "true");
      } else {
        toggle.textContent = "HEB / עב";
        toggle.setAttribute("aria-label", "Switch language to Hebrew");
        toggle.setAttribute("aria-pressed", "false");
      }
    }

    // Update marker titles if map exists
    if (window.__qlMarkers){
      const titles = lang === "he" ? { jeru: "ירושלים", reh: "רחובות" } : { jeru: "Jerusalem", reh: "Rehovot" };
      window.__qlMarkers.jeru?.setTitle?.(titles.jeru);
      window.__qlMarkers.reh?.setTitle?.(titles.reh);
      // Leaflet markers: update popups if present
      if (window.__qlMarkers.jeruPopup) window.__qlMarkers.jeru.bindPopup(titles.jeru);
      if (window.__qlMarkers.rehPopup)  window.__qlMarkers.reh.bindPopup(titles.reh);
    }
  }

  function initLang(){
    const saved = localStorage.getItem("qlang");
    const initial = (saved === "he") ? "he" : "en";
    applyLanguage(initial);

    const toggle = document.getElementById("lang-toggle");
    toggle?.addEventListener("click", ()=>{
      const current = document.documentElement.lang === "he" ? "he" : "en";
      const next = current === "he" ? "en" : "he";
      localStorage.setItem("qlang", next);
      applyLanguage(next);
    });
  }

  /** Footer year **/
  function setYear(){
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  /** Minimal scrollspy **/
  function initScrollspy(){
    const sections = $$("main[id], section[id]");
    const links = $$(".site-header .nav a");
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const io = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((a)=>{
          const active = (a.getAttribute("href") || "").slice(1) === id;
          a.classList.toggle("is-active", active);
          if (active) a.setAttribute("aria-current", "page");
          else a.removeAttribute("aria-current");
        });
      });
    }, { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0.01 });

    sections.forEach(s=>io.observe(s));

    links.forEach((a)=>{
      a.addEventListener("click", (e)=>{
        const hash = a.getAttribute("href");
        if (!hash || !hash.startsWith("#")) return;
        const t = document.querySelector(hash);
        if (!t) return;
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", hash);
      });
    });
  }

  /** Contact form **/
  function initForm(){
    const form = document.querySelector(".contact-form");
    if (!form) return;

    let status = form.querySelector(".form-status");
    if (!status){
      status = document.createElement("p");
      status.className = "form-status";
      status.setAttribute("aria-live", "polite");
      form.appendChild(status);
    }

    const setStatus = (msg, type="info")=>{
      status.textContent = msg;
      status.dataset.type = type;
    };

    form.addEventListener("submit", async (ev)=>{
      ev.preventDefault();
      if (!form.checkValidity()){
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid && firstInvalid.focus) firstInvalid.focus();
        setStatus(document.documentElement.lang === "he" ? "אנא מלאו את כל השדות הנדרשים." : "Please fill all required fields.", "error");
        return;
      }

      const endpoint = (form.getAttribute("action") || "").trim();
      const method = (form.getAttribute("method") || "POST").toUpperCase();

      if (!endpoint || endpoint === "#"){
        setStatus(document.documentElement.lang === "he" ? "מצב דמו: הוסיפו כתובת action כדי לאפשר שליחה." : "Demo mode: add an action URL to enable sending.", "info");
        return;
      }

      try{
        const res = await fetch(endpoint, {
          method,
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        if (res.ok){
          form.reset();
          setStatus(document.documentElement.lang === "he" ? "תודה! ההודעה נשלחה." : "Thanks! Your message was sent.", "success");
        } else {
          setStatus(document.documentElement.lang === "he" ? "שגיאה בשליחה. נסו שוב." : "Couldn’t send. Please try again.", "error");
        }
      }catch(_){
        setStatus(document.documentElement.lang === "he" ? "שגיאת רשת. נסו שוב." : "Network error. Please try again.", "error");
      }
    });
  }

  /** Map: Google if available, otherwise Leaflet (OSM) fallback **/
  function initLeaflet(){
    if (!window.L) return; // Leaflet not loaded
    const mapEl = document.getElementById("map");
    if (!mapEl) return;

    const jerusalem = [31.7683, 35.2137];
    const rehovot  = [31.8947, 34.8113];

    const map = L.map(mapEl, { scrollWheelZoom: true });
    const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    });
    tiles.addTo(map);

    const group = L.featureGroup();
    const isHe = document.documentElement.lang === "he";
    const titles = isHe ? { jeru: "ירושלים", reh: "רחובות" } : { jeru: "Jerusalem", reh: "Rehovot" };

    const m1 = L.marker(jerusalem).addTo(group).bindPopup(titles.jeru);
    const m2 = L.marker(rehovot).addTo(group).bindPopup(titles.reh);

    group.addTo(map);
    map.fitBounds(group.getBounds().pad(0.25));

    // store refs (and popup flags for i18n updates)
    window.__qlMarkers = {
      jeru: m1, reh: m2,
      jeruPopup: true, rehPopup: true
    };
    window.__qlMap = map;
    window.__mapReady = true;
  }

  // Called by Google Maps if it loads successfully
  window.initMap = function(){
    try{
      const mapEl = document.getElementById("map");
      if (!mapEl || !window.google || !google.maps) return;

      const jerusalem = { lat: 31.7683, lng: 35.2137 };
      const rehovot  = { lat: 31.8947, lng: 34.8113 };

      const map = new google.maps.Map(mapEl, {
        center: { lat: 31.83, lng: 35.02 },
        zoom: 10,
        disableDefaultUI: false
      });

      const isHe = document.documentElement.lang === "he";
      const titles = isHe ? { jeru: "ירושלים", reh: "רחובות" } : { jeru: "Jerusalem", reh: "Rehovot" };

      const m1 = new google.maps.Marker({ position: jerusalem, map, title: titles.jeru });
      const m2 = new google.maps.Marker({ position: rehovot,  map, title: titles.reh });

      const bounds = new google.maps.LatLngBounds();
      bounds.extend(jerusalem); bounds.extend(rehovot);
      map.fitBounds(bounds);

      window.__qlMap = map;
      window.__qlMarkers = { jeru: m1, reh: m2 };
      window.__mapReady = true;
    }catch(e){
      console.warn("Google Maps failed; falling back to Leaflet.", e);
      initLeaflet();
    }
  };

  function ensureMap(){
    // If Google didn't call initMap within ~3s, fall back to Leaflet.
    setTimeout(()=>{
      if (!window.__mapReady) initLeaflet();
    }, 3000);
  }

  /** Init **/
  document.addEventListener("DOMContentLoaded", ()=>{
    setYear();
    initLang();
    initScrollspy();
    initForm();
    ensureMap();
  });
})();

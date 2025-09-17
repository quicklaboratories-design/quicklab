// Scientist-style inspired template (original). i18n toggle + map (Google with Leaflet fallback) + minimal UX helpers.
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

      "hero.title": "A simpler way to run R&D work",
      "hero.sub": "Request services, compare proposals, and get results with clean documentation — all in one place.",
      "hero.cta1": "Get Started",
      "hero.cta2": "Learn More",

      "stats.days": "days avg. to proposals",
      "stats.savings": "average savings",
      "stats.suppliers": "pre-qualified suppliers",

      "trust.title": "Trusted by leading teams",

      "about.title": "About",
      "about.body": "Quick Lab helps teams move faster in the lab with clear handoffs and reproducible results. We streamline sourcing, tracking, and documentation so scientists can focus on science.",

      "services.title": "Services",
      "services.s1.title": "Assay & Method Setup",
      "services.s1.body": "Design, plate maps, stock calculations, and tidy data handoff.",
      "services.s2.title": "Purification Workflows",
      "services.s2.body": "SPE, flash, and prep-HPLC strategies with reproducible parameters.",
      "services.s3.title": "Docs & QA-Ready Outputs",
      "services.s3.body": "Concise SOPs, stability plans, and summaries for reviewers.",

      "process.title": "How it works",
      "process.s1.title": "Request",
      "process.s1.body": "Describe your study and requirements.",
      "process.s2.title": "Compare",
      "process.s2.body": "Review proposals and timelines.",
      "process.s3.title": "Run",
      "process.s3.body": "Track progress and receive clean deliverables.",

      "locations.title": "Locations",
      "locations.note": "Active around Jerusalem and Rehovot.",

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

      "hero.title": "דרך פשוטה יותר להפעיל עבודת מו״פ",
      "hero.sub": "מבקשים שירותים, משווים הצעות ומקבלים תוצאות עם תיעוד מסודר — הכול במקום אחד.",
      "hero.cta1": "התחילו",
      "hero.cta2": "למדו עוד",

      "stats.days": "ימים בממוצע עד קבלת הצעות",
      "stats.savings": "חיסכון ממוצע",
      "stats.suppliers": "ספקים מאומתים",

      "trust.title": "נאמנים על ידי צוותים מובילים",

      "about.title": "אודות",
      "about.body": "Quick Lab מסייעת לצוותים לנוע מהר יותר במעבדה עם מסירות מסודרות ותוצאות ניתנות לשחזור. אנחנו מפשטים רכש, מעקב ותיעוד כדי שהמדענים יתמקדו במדע.",

      "services.title": "שירותים",
      "services.s1.title": "הקמת מבחנים ושיטות",
      "services.s1.body": "תכנון, מפות בארים, חישובי סטוקים והעברת נתונים מסודרת.",
      "services.s2.title": "זרימות ניקוי",
      "services.s2.body": "אסטרטגיות SPE, פלאש ו-HPLC פרפ. עם פרמטרים ניתנים לשחזור.",
      "services.s3.title": "מסמכים ותוצרים מוכנים ל-QA",
      "services.s3.body": "SOPים תמציתיים, תוכניות יציבות וסיכומים למבקרים.",

      "process.title": "איך זה עובד",
      "process.s1.title": "בקשה",
      "process.s1.body": "תארו את המחקר והדרישות.",
      "process.s2.title": "השוואה",
      "process.s2.body": "בדקו הצעות ולוחות זמנים.",
      "process.s3.title": "ביצוע",
      "process.s3.body": "עקבו אחר התקדמות וקבלו תוצרים מסודרים.",

      "locations.title": "מיקומים",
      "locations.note": "פעילים סביב ירושלים ורחובות.",

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
      // Google
      window.__qlMarkers.jeru?.setTitle?.(titles.jeru);
      window.__qlMarkers.reh?.setTitle?.(titles.reh);
      // Leaflet popups
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
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    const group = L.featureGroup();
    const isHe = document.documentElement.lang === "he";
    const titles = isHe ? { jeru: "ירושלים", reh: "רחובות" } : { jeru: "Jerusalem", reh: "Rehovot" };

    const m1 = L.marker(jerusalem).addTo(group).bindPopup(titles.jeru);
    const m2 = L.marker(rehovot).addTo(group).bindPopup(titles.reh);

    group.addTo(map);
    map.fitBounds(group.getBounds().pad(0.25));

    // store refs for i18n updates
    window.__qlMarkers = { jeru: m1, reh: m2, jeruPopup: true, rehPopup: true };
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

// Minimalist Quick Lab — original build. i18n toggle + year + scrollspy + contact form + Leaflet map.
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

      "hero.title": "On-Demand Lab Services, Minimal Hassle",
      "hero.sub": "Request work, review proposals, and receive clean, QA-ready deliverables — all in one simple flow.",
      "hero.cta1": "Start",
      "hero.cta2": "Learn More",

      "vp.1.t": "Fast turnarounds",
      "vp.1.d": "Get proposals quickly and move experiments forward without waiting.",
      "vp.2.t": "Reproducible outputs",
      "vp.2.d": "SOPs, data, and summaries you can hand to stakeholders immediately.",
      "vp.3.t": "Clear pricing",
      "vp.3.d": "Simple estimates that make procurement painless.",

      "about.title": "About",
      "about.body": "We streamline assay setup, purification (SPE, flash, prep-HPLC), stability planning, and tidy documentation. Our focus is predictable execution and deliverables ready for review.",

      "services.title": "Services",
      "services.s1.title": "Assay & Method Setup",
      "services.s1.body": "Design, plate maps, stock calculations, and tidy data handoff.",
      "services.s2.title": "Purification Workflows",
      "services.s2.body": "SPE, flash, and prep-HPLC with reproducible parameters.",
      "services.s3.title": "Docs & QA-Ready Outputs",
      "services.s3.body": "Concise SOPs, stability plans, and summaries for reviewers.",

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

      "hero.title": "שירותי מעבדה לפי דרישה — בלי כאב ראש",
      "hero.sub": "מבקשים עבודה, בודקים הצעות ומקבלים תוצרים נקיים ומוכנים ל-QA — בתהליך פשוט אחד.",
      "hero.cta1": "התחילו",
      "hero.cta2": "למדו עוד",

      "vp.1.t": "זמני תגובה מהירים",
      "vp.1.d": "מקבלים הצעות במהירות ומקדמים ניסויים בלי לחכות.",
      "vp.2.t": "תוצרים ניתנים לשחזור",
      "vp.2.d": "‏SOPים, נתונים וסיכומים שמוכנים להציג לבעלי עניין.",
      "vp.3.t": "תמחור ברור",
      "vp.3.d": "הערכות פשוטות שמקלות על הרכש.",

      "about.title": "אודות",
      "about.body": "אנחנו מפשטים הקמת מבחנים, ניקוי (SPE, פלאש, HPLC פרפ.), תכנון יציבות ותיעוד מסודר. המיקוד הוא ביצוע צפוי ותוצרים מוכנים לביקורת.",

      "services.title": "שירותים",
      "services.s1.title": "הקמת מבחנים ושיטות",
      "services.s1.body": "תכנון, מפות בארים, חישובי סטוקים והעברת נתונים מסודרת.",
      "services.s2.title": "זרימות ניקוי",
      "services.s2.body": "‏SPE, פלאש ו-HPLC פרפ. עם פרמטרים ניתנים לשחזור.",
      "services.s3.title": "מסמכים ותוצרים מוכנים ל-QA",
      "services.s3.body": "‏SOPים תמציתיים, תוכניות יציבות וסיכומים למבקרים.",

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

    // Update marker titles if map exists (Leaflet)
    if (window.__qlMarkers){
      const titles = lang === "he" ? { jeru: "ירושלים", reh: "רחובות" } : { jeru: "Jerusalem", reh: "Rehovot" };
      window.__qlMarkers.jeru.bindPopup(titles.jeru);
      window.__qlMarkers.reh.bindPopup(titles.reh);
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

  /** Leaflet map (always on; no key needed) **/
  function initMap(){
    const mapEl = document.getElementById("map");
    if (!mapEl || !window.L) return;

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

    // store refs for language updates
    window.__qlMarkers = { jeru: m1, reh: m2 };
    window.__qlMap = map;
  }

  /** Init **/
  document.addEventListener("DOMContentLoaded", ()=>{
    setYear();
    initLang();
    initScrollspy();
    initForm();
    initMap();
  });
})();

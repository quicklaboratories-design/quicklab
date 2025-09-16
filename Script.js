// script.js — Quick Lab (warmer theme + i18n + scrollspy + contact form + Google Map)
(() => {
  "use strict";

  /*** i18n dictionary ***/
  const DICT = {
    en: {
      "brand": "Quick Lab",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.contact": "Contact",
      "hero.title": "Welcome to Quick Lab",
      "hero.sub":
        "Your solution for fast, reliable lab support — from method setup and purification workflows to on-demand documentation and QA-friendly deliverables.",
      "hero.cta1": "Get in touch",
      "hero.cta2": "Learn more",
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
      "contact.submit": "Send message",
      "footer.rights": "All rights reserved.",
      "social.twitter": "Twitter",
      "social.linkedin": "LinkedIn",
      "social.github": "GitHub"
    },
    he: {
      "brand": "Quick Lab",
      "nav.home": "בית",
      "nav.about": "אודות",
      "nav.contact": "יצירת קשר",
      "hero.title": "ברוכים הבאים ל-Quick Lab",
      "hero.sub":
        "הפתרון שלכם לתמיכה מהירה ואמינה במעבדה — מהקמת שיטות וזרימות ניקוי ועד תיעוד מסודר ותוצרים מוכנים לביקורת.",
      "hero.cta1": "דברו איתנו",
      "hero.cta2": "למדו עוד",
      "about.title": "אודות",
      "about.body":
        "Quick Lab מסייעת לצוותים לנוע מהר יותר במעבדה עם ביצוע נקי ותיעוד ברור. אנו מתמחים בהקמת מבחנים, ניקוי (SPE, פלאש, HPLC פרפ.), תכנון יציבות ו-SOPים פרקטיים ומוכנים לייצור. אנחנו מדברים מדע ותפעול — כדי שתקבלו תוצאות שאפשר לסמוך עליהן.",
      "services.title": "שירותים",
      "services.s1.title": "הקמת מבחנים ושיטות",
      "services.s1.body": "תכנון, מפות בארים, חישובי סטוקים והגשת נתונים מסודרת — מותאם לביולוגיה ולתפוקה שלכם.",
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

  /*** Language helpers ***/
  const $all = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function applyLanguage(lang) {
    const dict = DICT[lang] || DICT.en;
    $all("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const txt = dict[key];
      if (typeof txt === "string") el.textContent = txt;
    });

    // Set HTML lang + dir and toggle RTL layout/font
    const html = document.documentElement;
    html.lang = lang === "he" ? "he" : "en";
    html.setAttribute("dir", lang === "he" ? "rtl" : "ltr");

    // Update toggle button label
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      if (lang === "he") {
        toggle.textContent = "ENG / אנ";
        toggle.setAttribute("aria-label", "Switch language to English");
        toggle.setAttribute("aria-pressed", "true");
      } else {
        toggle.textContent = "HEB / עב";
        toggle.setAttribute("aria-label", "Switch language to Hebrew");
        toggle.setAttribute("aria-pressed", "false");
      }
    }

    // Update map marker titles if map is already initialized
    if (window.__qlMap && window.__qlMarkers) {
      const titles = lang === "he" ? { jeru: "ירושלים", reh: "רחובות" } : { jeru: "Jerusalem", reh: "Rehovot" };
      window.__qlMarkers.jeru.setTitle(titles.jeru);
      window.__qlMarkers.reh.setTitle(titles.reh);
    }
  }

  function initLang() {
    const saved = localStorage.getItem("qlang");
    const initial = saved === "he" ? "he" : "en";
    applyLanguage(initial);

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const current = document.documentElement.lang === "he" ? "he" : "en";
        const next = current === "he" ? "en" : "he";
        localStorage.setItem("qlang", next);
        applyLanguage(next);
      });
    }
  }

  /*** Footer year ***/
  function setYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  /*** Scrollspy: highlight active nav link while scrolling ***/
  function initScrollspy() {
    const sections = $all("main[id], section[id]");
    const navLinks = $all(".site-header .nav a");
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const active = (link.getAttribute("href") || "").slice(1) === id;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
          });
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01,
      }
    );
    sections.forEach((s) => io.observe(s));

    // Extra smooth scroll for browsers ignoring CSS scroll-behavior
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const hash = link.getAttribute("href");
        if (!hash || !hash.startsWith("#")) return;
        const target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", hash);
      });
    });
  }

  /*** Contact form handling (basic validation + optional AJAX submit) ***/
  function initContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    // Ensure there is a status region
    let status = form.querySelector(".form-status");
    if (!status) {
      status = document.createElement("p");
      status.className = "form-status";
      status.setAttribute("aria-live", "polite");
      form.appendChild(status);
    }

    const setStatus = (msg, type = "info") => {
      status.textContent = msg;
      status.dataset.type = type; // styles in CSS via [data-type]
    };

    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');

      if (!form.checkValidity()) {
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid && typeof firstInvalid.focus === "function") firstInvalid.focus();
        // Choose message based on language
        const isHe = document.documentElement.lang === "he";
        setStatus(isHe ? "אנא תקנו את השדות החסרים/שגויים." : "Please correct the highlighted fields.", "error");
        return;
      }

      const endpoint = (form.getAttribute("action") || "").trim();
      const method = (form.getAttribute("method") || "POST").toUpperCase();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.loading = "true";
      }
      form.setAttribute("aria-busy", "true");

      try {
        if (endpoint && endpoint !== "#") {
          const formData = new FormData(form);
          const res = await fetch(endpoint, {
            method,
            body: formData,
            headers: { Accept: "application/json" },
          });

          if (res.ok) {
            form.reset();
            setStatus(document.documentElement.lang === "he" ? "תודה! ההודעה נשלחה." : "Thanks! Your message was sent successfully.", "success");
          } else {
            let msg = document.documentElement.lang === "he"
              ? "לא ניתן לשלוח כעת. נסו שוב מאוחר יותר."
              : "Couldn’t send right now. Please try again later.";
            try {
              const data = await res.json();
              if (data && (data.error || data.message)) msg = data.error || data.message;
            } catch (_) {}
            setStatus(msg, "error");
          }
        } else {
          setStatus(document.documentElement.lang === "he"
            ? "מצב דמו: הוסיפו כתובת ‘action’ לטופס כדי לאפשר שליחה."
            : "Demo mode: add a form ‘action’ URL to enable sending.", "info");
        }
      } catch (err) {
        setStatus(document.documentElement.lang === "he" ? "שגיאת רשת. נסו שוב." : "Network error. Please try again.", "error");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          delete submitBtn.dataset.loading;
        }
        form.removeAttribute("aria-busy");
      }
    });
  }

  /*** Google Map (with Jerusalem + Rehovot markers) ***/
  // Called by Google Maps API when it loads
  window.initMap = function initMap() {
    try {
      const jerusalem = { lat: 31.7683, lng: 35.2137 };
      const rehovot  = { lat: 31.8947, lng: 34.8113 };

      const mapEl = document.getElementById("map");
      if (!mapEl) return;

      const map = new google.maps.Map(mapEl, {
        center: { lat: 31.83, lng: 35.02 }, // roughly between both
        zoom: 10,
        mapId: "DEMO_MAP", // optional
        disableDefaultUI: false
      });

      const isHe = document.documentElement.lang === "he";
      const titles = isHe ? { jeru: "ירושלים", reh: "רחובות" } : { jeru: "Jerusalem", reh: "Rehovot" };

      const m1 = new google.maps.Marker({ position: jerusalem, map, title: titles.jeru });
      const m2 = new google.maps.Marker({ position: rehovot,  map, title: titles.reh });

      // Fit bounds to include both markers
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(jerusalem);
      bounds.extend(rehovot);
      map.fitBounds(bounds);

      // Keep references for language updates
      window.__qlMap = map;
      window.__qlMarkers = { jeru: m1, reh: m2 };
    } catch (e) {
      console.warn("Google Maps initialization failed:", e);
    }
  };

  /*** Init on ready ***/
  document.addEventListener("DOMContentLoaded", () => {
    setYear();
    initLang();
    initScrollspy();
    initContactForm();
  });
})();

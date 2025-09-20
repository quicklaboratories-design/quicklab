(() => {
  "use strict";

  const translations = {
    en: {
      "brand": "Quicklab",
      "skip": "Skip to main content",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.locations": "Locations",
      "nav.contact": "Contact",
      "toggle.label": "HEB / עב",
      "toggle.aria": "Switch language to Hebrew",
      "hero.title": "On-demand lab support the moment you need it.",
      "hero.lead": "Quicklab mobilizes vetted specialists, equipment, and compliance in hours so your experiments stay on schedule.",
      "hero.ctaPrimary": "Request Support",
      "hero.ctaSecondary": "Explore Services",
      "trust.lead": "Trusted by teams running mission-critical research programs.",
      "trust.item1": "Company A",
      "trust.item2": "Company B",
      "trust.item3": "Company C",
      "trust.item4": "Company D",
      "about.title": "About",
      "about.body": "Quicklab provides on-demand lab support for R&D leaders, delivering bench-ready experts, calibrated instrumentation, and regulatory oversight from a single command center so you stay focused on discovery.",
      "services.title": "Services",
      "services.1.title": "Rapid Lab Staffing",
      "services.1.body": "Deploy project-ready scientists and technicians aligned to your protocols within hours.",
      "services.2.title": "Equipment & Logistics",
      "services.2.body": "Secure calibrated instruments, consumables, and facility access with Quicklab-managed delivery.",
      "services.3.title": "Run Monitoring",
      "services.3.body": "Track experiment milestones, documentation, and QA updates through continuous Quicklab oversight.",
      "process.title": "Process",
      "process.1.title": "Signal",
      "process.1.body": "Share experiment requirements, turnaround targets, and compliance needs.",
      "process.2.title": "Match",
      "process.2.body": "Review Quicklab's curated support pods and confirm the right blend of talent and tooling.",
      "process.3.title": "Execute",
      "process.3.body": "Launch with Quicklab coordinating scheduling, safety, and reporting through completion.",
      "locations.title": "Locations",
      "locations.note": "Quicklab coordination hubs in Jerusalem and Rehovot.",
      "map.jerusalem": "Jerusalem",
      "map.rehovot": "Rehovot",
      "contact.title": "Contact",
      "contact.intro": "Tell Quicklab what lab support you need and we'll assemble the right team.",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.subject": "Project Focus",
      "contact.message": "Support Details",
      "contact.submit": "Send Request",
      "status.invalid": "Please fill all required fields.",
      "status.demo": "Demo mode: add an action URL to enable sending.",
      "status.success": "Thanks! Your message was sent.",
      "status.error": "Could not send. Please try again.",
      "status.network": "Network error. Check your connection and try again.",
      "footer.rights": "All rights reserved.",
      "social.twitter": "Twitter",
      "social.linkedin": "LinkedIn",
      "social.github": "GitHub"
    },
    he: {
      "brand": "Quicklab",
      "skip": "דלגו לתוכן הראשי",
      "nav.home": "בית",
      "nav.about": "אודות",
      "nav.services": "שירותים",
      "nav.process": "תהליך",
      "nav.locations": "מיקומים",
      "nav.contact": "יצירת קשר",
      "toggle.label": "ENG / אנג",
      "toggle.aria": "החלפת שפה לאנגלית",
      "hero.title": "תמיכת מעבדה לפי דרישה ברגע שאתם צריכים.",
      "hero.lead": "Quicklab מגייסת מומחים מאומתים, ציוד וציות בתוך שעות כדי שהניסויים שלכם יישארו במסלול.",
      "hero.ctaPrimary": "בקשת תמיכה",
      "hero.ctaSecondary": "עיינו בשירותים",
      "trust.lead": "צוותים המנהלים מחקרים קריטיים סומכים עלינו.",
      "trust.item1": "חברה א'",
      "trust.item2": "חברה ב'",
      "trust.item3": "חברה ג'",
      "trust.item4": "חברה ד'",
      "about.title": "אודות",
      "about.body": "Quicklab מספקת תמיכת מעבדה לפי דרישה למובילי מו\"פ, עם מומחים מוכנים לעמדה, ציוד מכויל ופיקוח רגולטורי ממרכז שליטה אחד כדי שתתמקדו בגילוי.",
      "services.title": "שירותים",
      "services.1.title": "תיגבור צוות מעבדה מהיר",
      "services.1.body": "משבצים מדענים וטכנאים מוכנים לפרויקט המתאימים לפרוטוקולים שלכם בתוך שעות.",
      "services.2.title": "ציוד ולוגיסטיקה",
      "services.2.body": "מבטיחים מכשירים מכוילים, מתכלים וגישה למתקנים עם משלוח בניהול Quicklab.",
      "services.3.title": "ניטור ריצות",
      "services.3.body": "עוקבים אחר אבני דרך הניסוי, תיעוד ועדכוני בקרת איכות עם פיקוח רציף של Quicklab.",
      "process.title": "תהליך",
      "process.1.title": "איתות",
      "process.1.body": "משתפים דרישות ניסוי, יעדי זמן וצרכי ציות.",
      "process.2.title": "התאמה",
      "process.2.body": "בוחנים את צוותי התמיכה שאצרה Quicklab ומאשרים את שילוב הכישורים והציוד.",
      "process.3.title": "ביצוע",
      "process.3.body": "משיקים עם Quicklab שמנהלת תזמון, בטיחות ודיווח עד להשלמה.",
      "locations.title": "מיקומים",
      "locations.note": "תיאום Quicklab מירושלים ומרחובות.",
      "map.jerusalem": "ירושלים",
      "map.rehovot": "רחובות",
      "contact.title": "יצירת קשר",
      "contact.intro": "ספרו ל-Quicklab איזו תמיכת מעבדה אתם צריכים ונרכיב את הצוות הנכון.",
      "contact.name": "שם",
      "contact.email": "אימייל",
      "contact.subject": "מוקד הפרויקט",
      "contact.message": "פרטי התמיכה",
      "contact.submit": "שליחת בקשה",
      "status.invalid": "אנא מלאו את כל השדות הנדרשים.",
      "status.demo": "מצב הדגמה: הוסיפו כתובת action כדי לאפשר שליחה.",
      "status.success": "תודה! ההודעה נשלחה.",
      "status.error": "לא ניתן לשלוח. נסו שוב.",
      "status.network": "שגיאת רשת. בדקו את החיבור ונסו שוב.",
      "footer.rights": "כל הזכויות שמורות.",
      "social.twitter": "Twitter",
      "social.linkedin": "LinkedIn",
      "social.github": "GitHub"
    }
  };

  const storageKey = "quicklab-language";
  const mapContext = { map: null, markers: {} };
  let currentLang = "en";
  let formStatusEl = null;

  const hasStorage = (() => {
    try {
      const testKey = "__quicklab_test";
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    } catch (err) {
      return false;
    }
  })();

  const getTranslation = (lang, key) => {
    const dict = translations[lang] || translations.en;
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) {
      return dict[key];
    }
    const fallback = translations.en[key];
    return fallback != null ? fallback : key;
  };

  const updateDocumentLanguage = () => {
    const html = document.documentElement;
    html.lang = currentLang === "he" ? "he" : "en";
    html.dir = currentLang === "he" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-he", currentLang === "he");
  };

  const applyLanguage = () => {
    updateDocumentLanguage();
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = getTranslation(currentLang, key);
      if (value != null) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.setAttribute("placeholder", value);
        } else {
          el.textContent = value;
        }
      }
    });

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.setAttribute("aria-label", getTranslation(currentLang, "toggle.aria"));
      toggle.setAttribute("aria-pressed", currentLang === "he" ? "true" : "false");
    }

    updateFormStatusLanguage();
    updateMapLanguage();
  };

  const setLanguage = (lang) => {
    currentLang = translations[lang] ? lang : "en";
    applyLanguage();
    if (hasStorage) {
      window.localStorage.setItem(storageKey, currentLang);
    }
  };

  const readStoredLanguage = () => {
    if (!hasStorage) return null;
    const stored = window.localStorage.getItem(storageKey);
    return stored && translations[stored] ? stored : null;
  };

  const prefersReducedMotion = () => {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  const initSmoothScroll = () => {
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
    if (!anchors.length) return;

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
        if (history.replaceState) {
          history.replaceState(null, "", href);
        }
      });
    });
  };

  const initScrollSpy = () => {
    const navLinks = Array.from(document.querySelectorAll(".nav a[href^='#']"));
    if (!navLinks.length) return;

    const sections = navLinks
      .map((link) => {
        const selector = link.getAttribute("href");
        return selector ? document.querySelector(selector) : null;
      })
      .filter(Boolean);

    const setActive = (id) => {
      navLinks.forEach((link) => {
        const targetId = (link.getAttribute("href") || "").slice(1);
        const isActive = targetId === id;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    if (!sections.length) return;

    setActive(sections[0].id);

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-55% 0px -35% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));
  };

  const setFormStatusMessage = (key, type = "info") => {
    if (!formStatusEl) return;
    if (!key) {
      formStatusEl.textContent = "";
      delete formStatusEl.dataset.key;
      formStatusEl.removeAttribute("data-type");
      return;
    }
    formStatusEl.textContent = getTranslation(currentLang, key);
    formStatusEl.dataset.key = key;
    if (type === "info") {
      formStatusEl.removeAttribute("data-type");
    } else {
      formStatusEl.dataset.type = type;
    }
  };

  const updateFormStatusLanguage = () => {
    if (!formStatusEl) return;
    const key = formStatusEl.dataset.key;
    if (key) {
      formStatusEl.textContent = getTranslation(currentLang, key);
    }
  };

  const initContactForm = () => {
    const form = document.querySelector(".contact-form");
    if (!form) return;
    formStatusEl = form.querySelector(".form-status");
    if (formStatusEl) {
      formStatusEl.textContent = "";
      formStatusEl.removeAttribute("data-type");
      delete formStatusEl.dataset.key;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        if (typeof form.reportValidity === "function") {
          form.reportValidity();
        }
        const invalid = form.querySelector(":invalid");
        if (invalid && typeof invalid.focus === "function") {
          invalid.focus();
        }
        setFormStatusMessage("status.invalid", "error");
        return;
      }

      const endpoint = (form.getAttribute("action") || "").trim();
      const method = (form.getAttribute("method") || "POST").toUpperCase();

      if (!endpoint || endpoint === "#") {
        setFormStatusMessage("status.demo", "info");
        return;
      }

      try {
        const response = await fetch(endpoint, {
          method,
          body: new FormData(form)
        });
        if (response.ok) {
          form.reset();
          setFormStatusMessage("status.success", "success");
        } else {
          setFormStatusMessage("status.error", "error");
        }
      } catch (error) {
        setFormStatusMessage("status.network", "error");
      }
    });
  };

  const initMap = () => {
    const mapElement = document.getElementById("map");
    if (!mapElement || typeof L === "undefined") {
      return;
    }

    const jerusalem = [31.7683, 35.2137];
    const rehovot = [31.8947, 34.8113];

    const map = L.map(mapElement, { scrollWheelZoom: true });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    const jerusalemMarker = L.marker(jerusalem).addTo(map);
    const rehovotMarker = L.marker(rehovot).addTo(map);

    jerusalemMarker.bindPopup(getTranslation(currentLang, "map.jerusalem"));
    rehovotMarker.bindPopup(getTranslation(currentLang, "map.rehovot"));

    const group = L.featureGroup([jerusalemMarker, rehovotMarker]).addTo(map);
    map.fitBounds(group.getBounds().pad(0.25));

    mapContext.map = map;
    mapContext.markers = {
      jerusalem: jerusalemMarker,
      rehovot: rehovotMarker
    };
  };

  const updateMapLanguage = () => {
    if (!mapContext.markers.jerusalem || !mapContext.markers.rehovot) {
      return;
    }
    const jerusalemText = getTranslation(currentLang, "map.jerusalem");
    const rehovotText = getTranslation(currentLang, "map.rehovot");

    const jerusalemPopup = mapContext.markers.jerusalem.getPopup();
    if (jerusalemPopup) {
      jerusalemPopup.setContent(jerusalemText);
    } else {
      mapContext.markers.jerusalem.bindPopup(jerusalemText);
    }

    const rehovotPopup = mapContext.markers.rehovot.getPopup();
    if (rehovotPopup) {
      rehovotPopup.setContent(rehovotText);
    } else {
      mapContext.markers.rehovot.bindPopup(rehovotText);
    }
  };

  const setYear = () => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  };

  const initLanguageToggle = () => {
    const toggle = document.getElementById("lang-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "he" : "en";
      setLanguage(nextLang);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    const storedLang = readStoredLanguage();
    if (storedLang) {
      currentLang = storedLang;
    }

    applyLanguage();
    setYear();
    initLanguageToggle();
    initSmoothScroll();
    initScrollSpy();
    initContactForm();
    initMap();
  });
})();

(() => {
  "use strict";

  const translations = {
    en: {
      "brand": "NexiaBridge",
      "skip": "Skip to main content",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.locations": "Locations",
      "nav.contact": "Contact",
      "toggle.label": "HEB / עב",
      "toggle.aria": "Switch language to Hebrew",
      "hero.title": "Bring external science online with total clarity.",
      "hero.lead": "NexiaBridge orchestrates sourcing, compliance, and delivery so your R&D teams can activate new lab capacity without the administrative drag.",
      "hero.ctaPrimary": "Start",
      "hero.ctaSecondary": "Learn More",
      "trust.lead": "Trusted by teams focused on translational breakthroughs.",
      "trust.item1": "Company A",
      "trust.item2": "Company B",
      "trust.item3": "Company C",
      "trust.item4": "Company D",
      "about.title": "About",
      "about.body": "NexiaBridge is a curated marketplace bridging discovery leaders with audited research partners. We keep diligence, secure contracting, and reporting inside one traceable workspace so every stakeholder stays aligned.",
      "services.title": "Services",
      "services.1.title": "Sourcing Strategy",
      "services.1.body": "Scope your need, align compliance criteria, and surface the right labs within hours.",
      "services.2.title": "Quality Routing",
      "services.2.body": "Compare documentation, safety credentials, and run histories before you commit.",
      "services.3.title": "Delivery Oversight",
      "services.3.body": "Track milestones, samples, and data packages from kickoff to submission.",
      "process.title": "Process",
      "process.1.title": "Request",
      "process.1.body": "Submit a structured brief and governance guardrails.",
      "process.2.title": "Compare",
      "process.2.body": "Review curated lab responses, pricing, and compliance fit.",
      "process.3.title": "Run",
      "process.3.body": "Launch the selected program with automated updates and final reports.",
      "locations.title": "Locations",
      "locations.note": "Regional coordination from Jerusalem and Rehovot.",
      "map.jerusalem": "Jerusalem",
      "map.rehovot": "Rehovot",
      "contact.title": "Contact",
      "contact.intro": "Tell us about your upcoming program and we'll assemble the right collaborators.",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.submit": "Submit",
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
      "brand": "NexiaBridge",
      "skip": "דלגו לתוכן הראשי",
      "nav.home": "בית",
      "nav.about": "אודות",
      "nav.services": "שירותים",
      "nav.process": "תהליך",
      "nav.locations": "מיקומים",
      "nav.contact": "יצירת קשר",
      "toggle.label": "ENG / אנג",
      "toggle.aria": "החלפת שפה לאנגלית",
      "hero.title": "חיבורים מדעיים דיגיטליים עם שקיפות מלאה.",
      "hero.lead": "NexiaBridge מתזמרת רכש, ציות והעברת תוצרים כך שצוותי המו\"פ יפעילו קיבולת מעבדה חדשה בלי העומס האדמיניסטרטיבי.",
      "hero.ctaPrimary": "התחלה",
      "hero.ctaSecondary": "מידע נוסף",
      "trust.lead": "צוותים שבחרו בנו:",
      "trust.item1": "חברה א'",
      "trust.item2": "חברה ב'",
      "trust.item3": "חברה ג'",
      "trust.item4": "חברה ד'",
      "about.title": "אודות",
      "about.body": "NexiaBridge היא זירת תיווך אוצרת שמקשרת צוותי גילוי עם שותפי מחקר מבוקרים. אנו מרכזים בדיקות נאותות, הסכמים מאובטחים ודיווח בתיק עבודה אחד כך שכל בעלי העניין נשארים מסונכרנים.",
      "services.title": "שירותים",
      "services.1.title": "אסטרטגיית איתור",
      "services.1.body": "מגדירים צורך, מיישרים קריטריוני ציות ומוצאים מעבדות מתאימות בתוך שעות.",
      "services.2.title": "נתיבי איכות",
      "services.2.body": "משווים מסמכים, אישורי בטיחות והיסטוריות ריצה לפני שמתחייבים.",
      "services.3.title": "פיקוח אספקה",
      "services.3.body": "עוקבים אחר אבני דרך, דגימות וחבילות נתונים מההתחלה ועד למסירה.",
      "process.title": "תהליך",
      "process.1.title": "בקשה",
      "process.1.body": "מגישים תקציר מובנה והנחיות ממשליות.",
      "process.2.title": "השוואה",
      "process.2.body": "בודקים תגובות מעבדה, תמחור והתאמה רגולטורית.",
      "process.3.title": "הפעלה",
      "process.3.body": "מוציאים לדרך את התכנית עם עדכונים ודוחות אוטומטיים.",
      "locations.title": "מיקומים",
      "locations.note": "תיאום אזורי מירושלים ומרחובות.",
      "map.jerusalem": "ירושלים",
      "map.rehovot": "רחובות",
      "contact.title": "יצירת קשר",
      "contact.intro": "ספרו לנו על התכנית הקרובה ונרכיב את שיתוף הפעולה הנכון.",
      "contact.name": "שם",
      "contact.email": "אימייל",
      "contact.subject": "נושא",
      "contact.message": "הודעה",
      "contact.submit": "שליחה",
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

  const storageKey = "nexiabridge-language";
  const mapContext = { map: null, markers: {} };
  let currentLang = "en";
  let formStatusEl = null;

  const hasStorage = (() => {
    try {
      const testKey = "__nexia_test";
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

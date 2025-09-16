// script.js — Quick Lab
(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    /*** 1) Footer year ***/
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    /*** 2) Scrollspy: highlight active nav link while scrolling ***/
    const sections = [...document.querySelectorAll("main[id], section[id]")];
    const navLinks = [...document.querySelectorAll(".site-header .nav a")];

    if ("IntersectionObserver" in window && sections.length) {
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
          // Treat the middle of the viewport as "active"
          root: null,
          rootMargin: "-45% 0px -45% 0px",
          threshold: 0.01,
        }
      );
      sections.forEach((s) => io.observe(s));
    }

    // Optional: smooth-scroll via JS for browsers that ignore CSS scroll-behavior
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const hash = link.getAttribute("href");
        if (!hash || !hash.startsWith("#")) return;
        const target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update URL hash without jumping
        history.pushState(null, "", hash);
      });
    });

    /*** 3) Contact form handling (basic validation + optional AJAX submit) ***/
    const form = document.querySelector(".contact-form");
    if (form) {
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

        // Use native HTML5 constraint validation
        if (!form.checkValidity()) {
          const firstInvalid = form.querySelector(":invalid");
          if (firstInvalid && typeof firstInvalid.focus === "function") {
            firstInvalid.focus();
          }
          setStatus("Please correct the highlighted fields.", "error");
          return;
        }

        const endpoint = (form.getAttribute("action") || "").trim();
        const method = (form.getAttribute("method") || "POST").toUpperCase();

        // Loading state
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
              setStatus("Thanks! Your message was sent successfully.", "success");
            } else {
              let msg = "Couldn’t send right now. Please try again later.";
              try {
                const data = await res.json();
                if (data && (data.error || data.message)) {
                  msg = data.error || data.message;
                }
              } catch (_) {
                /* ignore JSON parse errors */
              }
              setStatus(msg, "error");
            }
          } else {
            setStatus('Demo mode: add a form “action” URL to enable sending.', "info");
          }
        } catch (err) {
          setStatus("Network error. Please try again.", "error");
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            delete submitBtn.dataset.loading;
          }
          form.removeAttribute("aria-busy");
        }
      });
    }
  });
})();


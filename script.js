/* ==========================================================================
   Schleinzer.app – script.js
   Minimales Vanilla JavaScript. Kein Tracking, keine externen Aufrufe.
   ========================================================================== */

(function () {
  "use strict";

  // Markiert das Dokument als JS-fähig, damit CSS-Animationen aktiviert
  // werden. Ohne JavaScript bleiben alle Inhalte regulär sichtbar.
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js-ready");

  // ---------- Aktuelles Jahr im Footer ----------
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // ---------- Dezentes Scroll-Reveal für Projektgruppen ----------
  var animatedItems = document.querySelectorAll("[data-animate]");

  if (animatedItems.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    animatedItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    // Kein IntersectionObserver verfügbar: Inhalte sofort sichtbar machen.
    animatedItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }
})();

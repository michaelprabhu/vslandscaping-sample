/* The page is fully usable without JavaScript.
   Hide the mobile call bar when primary contact actions are visible. */
(function () {
  "use strict";
  var bar = document.getElementById("call-bar");
  var hero = document.querySelector(".hero-actions");
  var contact = document.getElementById("contact");
  if (!bar || typeof IntersectionObserver === "undefined") {
    return;
  }
  var visible = new Set();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        visible.add(entry.target);
      } else {
        visible.delete(entry.target);
      }
    });
    bar.classList.toggle("is-hidden", visible.size > 0);
  }, { threshold: 0 });
  if (hero) { observer.observe(hero); }
  if (contact) { observer.observe(contact); }
})();

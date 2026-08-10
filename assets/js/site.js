// Theme toggle with OS-preference fallback. Uses no storage APIs.
(function () {
  var root = document.documentElement;

  function preferred() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark" : "light";
  }

  function apply(mode) {
    root.setAttribute("data-theme", mode);
    var btn = document.getElementById("themeToggle");
    if (btn) {
      btn.textContent = mode === "dark" ? "☀" : "☾";
      btn.setAttribute("aria-label", mode === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  apply(preferred());

  document.addEventListener("DOMContentLoaded", function () {
    apply(root.getAttribute("data-theme") || preferred());
    var btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", function () {
        apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
      });
    }
  });
})();

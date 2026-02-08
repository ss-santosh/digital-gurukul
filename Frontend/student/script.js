// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    updateIcon(true);
  }
});

function themeToggle() {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");

  // save theme globally
  localStorage.setItem("theme", isDark ? "dark" : "light");

  updateIcon(isDark);
}

function updateIcon(isDark) {
  const toggleBtn = document.querySelector(".theme-toggle");
  if (!toggleBtn) return;

  toggleBtn.innerHTML = isDark
    ? `<img src="../student/src/sun.png" width="30">`
    : `<img src="../student/src/moon.png" width="30">`;
}

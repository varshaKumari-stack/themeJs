 
const btn = document.querySelector("#toggleTheme");
const body = document.body;
const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Apply theme
function applyTheme(theme) {
  body.classList.remove("light", "dark");
  body.classList.add(theme);
}

// Get saved theme or OS preference
function getTheme() {
  return (
    localStorage.getItem("theme") ||
    (themeQuery.matches ? "dark" : "light")
  );
}

// Initial theme
applyTheme(getTheme());

// Listen for OS theme changes
themeQuery.addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    applyTheme(e.matches ? "dark" : "light");
  }
});

// Toggle theme
btn.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark")
    ? "light"
    : "dark";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

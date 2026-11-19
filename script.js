/*==== HAMBURGER MENU ====*/
const hamburgerButton = document.querySelector(".hamburger-button");
const navMenu = document.querySelector(".nav-menu");

function toggleMenu(open) {
  hamburgerButton.classList.toggle("hamburger-button-open", open);
  navMenu.classList.toggle("nav-menu-open", open);
  document.body.classList.toggle("no-scroll", open);
  hamburgerButton.setAttribute("aria-expanded", open);
  hamburgerButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

hamburgerButton.addEventListener("click", () => {
  toggleMenu(!navMenu.classList.contains("nav-menu-open"));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

/*==== SCROLL ON REFRESH ====*/
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

if (location.hash) {
  history.replaceState(null, "", location.pathname + location.search);
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

/*==== NAV LINKS (no #hash in the URL) ====*/
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

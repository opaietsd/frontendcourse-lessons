const siteNav = document.querySelector(".heade__nav__list");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = siteNav.getAttribute("data-visible")

    if (visibility === "false") {
        siteNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-extended", true);
    } else if (visibility === "true") {
        siteNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-extended", false);
    }
});
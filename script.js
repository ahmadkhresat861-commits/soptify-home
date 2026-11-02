// Get the current page name
const pathParts = window.location.pathname.split("/").filter(Boolean);
const lastPart = pathParts[pathParts.length - 1] || "index.html";

const currentPage = lastPart.includes(".")
    ? lastPart
    : "index.html";

// Select all navigation links
const navigationLinks = document.querySelectorAll(
    ".main-navigation .nav-item"
);

// Check which page is currently open
navigationLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});
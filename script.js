// ---------- 1. Highlight the current page in the sidebar ----------
const pathParts = window.location.pathname.split("/").filter(Boolean);
const lastPart = pathParts[pathParts.length - 1] || "index.html";

const currentPage = lastPart.includes(".")
    ? lastPart
    : "index.html";

const navigationLinks = document.querySelectorAll(
    ".main-navigation .nav-item"
);

navigationLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});


// ---------- 2. Cards that open another page ----------
const linkCards = document.querySelectorAll("[data-link]");

linkCards.forEach(function (card) {
    card.addEventListener("click", function () {
        window.location.href = card.dataset.link;
    });
});


// ---------- 3. Logout ----------
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn"); // forget that the user is logged in
        window.location.href = "signup.html"; // go back to the sign up page
    });
}
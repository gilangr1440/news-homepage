const menuButton = document.querySelector(".header__button");
const closeButton = document.querySelector(".top-navbar__close-button");
const overlay = document.querySelector(".header__navbar-overlay");
const navbar = document.querySelector(".top-navbar");

menuButton.addEventListener("click", () => {
  overlay.style.animation = "overlay 0.5s ease-in-out";
  navbar.style.animation = "topNavbar 0.5s ease-in-out";

  overlay.classList.add("active");
  navbar.classList.add("active");
});

closeButton.addEventListener("click", () => {
  overlay.style.animation = "overlayClose 0.5s ease-in-out";
  navbar.style.animation = "topNavbarClose 0.5s ease-in-out";

  setTimeout(() => {
    overlay.classList.remove("active");
    navbar.classList.remove("active");
  }, 400);
});

overlay.addEventListener("click", () => {
  overlay.style.animation = "overlayClose 0.5s ease-in-out";
  navbar.style.animation = "topNavbarClose 0.5s ease-in-out";

  setTimeout(() => {
    overlay.classList.remove("active");
    navbar.classList.remove("active");
  }, 400);
});

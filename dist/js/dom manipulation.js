//Toggle Menu
const menu = document.querySelector(".secondary-navigation");
const optBtn = document.querySelectorAll(".opt-btn");
const header = document.querySelector(".header");

optBtn[0].addEventListener("click", () => {
  menu.classList.add("show");
  optBtn[0].classList.add("opened");
});
optBtn[1].addEventListener("click", () => {
  menu.classList.remove("show");
  optBtn[0].classList.remove("opened");
});
const scroll = new SmoothScroll('.side-navigation a[href*="#"]', {
  speed: 500,
});
window.addEventListener("scroll", navbarSnap);

function navbarSnap() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Toggle Menu
const menu = document.querySelector(".secondary-navigation");
const optBtn = document.querySelectorAll(".opt-btn");

optBtn[0].addEventListener("click", () => {
  menu.classList.add("show");
  optBtn[0].classList.add("opened");
});
optBtn[1].addEventListener("click", () => {
  menu.classList.remove("show");
  optBtn[0].classList.remove("opened");
});

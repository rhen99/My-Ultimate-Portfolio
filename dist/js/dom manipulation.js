//Toggle Menu
const menu = document.querySelector(".secondary-navigation");
const optBtn = document.querySelectorAll(".opt-btn");
const header = document.querySelector(".header");
const sectionLinks = document.querySelectorAll(".side-navigation a");
//Contact Infos
const copyNum = document.querySelector(".copy-number");
const copySkype = document.querySelector(".copy-skype");
const phoneNumber = document.querySelector("#number");
const skypeHandle = document.querySelector("#skype");
const copyText = document.querySelectorAll(".copied-text");

optBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
//Use SmoothScroll for portfolio page.
const scroll = new SmoothScroll('.side-navigation a[href*="#"]', {
  speed: 500,
});
// Scrolling EventListeners
window.addEventListener("scroll", navbarSnap);
window.addEventListener("scroll", scrollActive);
//Sticky Navbar Function
function navbarSnap() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//Jump Scroll Function
function scrollActive() {
  const fromTop = window.scrollY;
  sectionLinks.forEach((link) => {
    const section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
}
copyNum.addEventListener("click", copyPhone);
copySkype.addEventListener("click", copySkypeHandle);
//Copy Phone Number
function copyPhone() {
  copyText[1].classList.add("copied");
  setTimeout(() => copyText[1].classList.remove("copied"), 2000);
  phoneNumber.select();
  phoneNumber.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
function copySkypeHandle() {
  copyText[0].classList.add("copied");
  setTimeout(() => copyText[0].classList.remove("copied"), 2000);
  skypeHandle.select();
  skypeHandle.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

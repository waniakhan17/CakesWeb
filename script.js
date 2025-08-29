const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");
const navLinks=document.querySelector(".nav-menu .nav-link");


menuOpenButton.addEventListener("click",()=>{
document.body.classList.toggle("show-mobile-menu");

})
menuCloseButton.addEventListener("click",()=>menuOpenButton.click());

//to close menu when the nav-link is clicked
navLinks.forEach(link=>{
    link.addEventListener("click",()=>menuOpenButton.click());
});
// Initialize swiper
const swiper = new Swiper('.slider-container', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

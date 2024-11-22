
const header = document.querySelector('header');
const logo = document.querySelector('.logo')

window.addEventListener('scroll' , ()=> {
  header.classList.toggle('shadow' , window.scrollY > 0)
  logo.classList.toggle('shadow' , window.scrollY > 0)
});

const menuicon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar');

menuicon.addEventListener('click' , ()=> {
   menuicon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
})
window.addEventListener('scroll' , ()=> {
  menuicon.classList.remove('bx-x');
  navbar.classList.remove('active');
});


var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  

  var swiper = new Swiper(".coming-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    breakpoints: {
      "@0.00": {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
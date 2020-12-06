let user_icon = document.querySelector('.user-icon');
user_icon.addEventListener('click', function(elem){
    let user_menu = document.querySelector('.user-menu');
    user_menu.classList.toggle('_active');
});

let body = document.querySelector('.body');
let menu_icon = document.querySelector('.menu-icon');
let menu_body = document.querySelector('.menu-body');
menu_icon.addEventListener('click', function(elem) {
    menu_icon.classList.toggle('_active');
    menu_body.classList.toggle('_active');
    body.classList.toggle('lock');
});


document.documentElement.addEventListener('click', function(elem){
    if(!elem.target.closest('.user')){
        let user_menu = document.querySelector('.user-menu');
        user_menu.classList.remove('_active');
    }
});


var mySwiper = new Swiper('.main-slider', {
    loop: true,
  
    navigation: {
      nextEl: '.main-control-arrow-next',
      prevEl: '.main-control-arrow-prev',
    },
    
  });

var mySwiper = new Swiper('.lots-slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 4,
  

  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    850: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    970: {
      slidesPerView: 3,
      // spaceBetween: 40
    }
  }
  
});

var mySwiper = new Swiper('.citation-slider', {
  loop: true,
  slidesPerView: 1,
  
  effect: "fade",

  navigation: {
    nextEl: '.citation-control-rotate-img',
  },
  
});








// let menu_icon = document.querySelector('.menu-icon');
// let menu_body = document.querySelector('.menu-body');
// menu_icon.addEventListener('click', function(elem) {
//     elem.preventDefault();
//     menu_icon.classList.toggle('_active');
//     menu_body.classList.toggle('_active');
// });

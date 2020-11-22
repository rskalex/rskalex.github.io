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
    // Optional parameters
    // odserver: true,
    // observeParents: true,
    // slidesPerView: 1,
    // spaceBetween: 0,
    // speed: 800,
    // direction: 'vertical',
    loop: true,
  
   
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.main-control-arrow-next',
      prevEl: '.main-control-arrow-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

// let menu_icon = document.querySelector('.menu-icon');
// let menu_body = document.querySelector('.menu-body');
// menu_icon.addEventListener('click', function(elem) {
//     elem.preventDefault();
//     menu_icon.classList.toggle('_active');
//     menu_body.classList.toggle('_active');
// });

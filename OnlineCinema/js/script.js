const schemeSvg = document.querySelector('.scheme-svg'),
      price = document.querySelector('.price-total'),
      cost = 12,
      btn = document.querySelector('.btn');
let totalPrice = 0;

price.textContent = totalPrice;

schemeSvg.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (!target.classList.contains('booked')) {
        target.classList.toggle('active');
        totalPrice = document.querySelectorAll('.active').length * cost;
        price.textContent = totalPrice;
    }
    
});

//burger

const burgerBtn = document.querySelector('.burger'),
      menu = document.querySelector('.nav-menu');

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('burger')) {
        burgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
    }
    console.log(burgerBtn)
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.header-nav')) {
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
    }
});

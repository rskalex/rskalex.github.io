//menu
let burger = document.querySelector('.menu-burger');
let body = document.querySelector('.body');
let menu = document.querySelector('.header-navbar');
let logo = document.querySelector('.header-logo');
let wrapper = document.querySelector('.wrapper');
const menuItem = document.querySelectorAll('.menu-item');

document.documentElement.addEventListener('click', (e) => {
    if(!e.target.closest('.header-wrapper')){
        burger.classList.remove('_active');
        menu.classList.remove('_active');
        logo.classList.remove('_hide');
        wrapper.classList.remove('_active');
        body.classList.remove('lock')
    }
});

burger.addEventListener('click', function(e){
    logo.classList.toggle('_hide');
    menu.classList.toggle('_active');
    burger.classList.toggle('_active');
    body.classList.toggle('lock');
    wrapper.classList.toggle('_active')

    menuItem.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            if(e.target){
                menu.classList.remove('_active');
                body.classList.remove('lock');
                logo.classList.remove('_hide');
                burger.classList.remove('_active');
                wrapper.classList.remove('_active')
            }
        })
        if(body.classList.contains('lock')){
            item.style.cssText = `font-size: 32px; margin-right: 0`;
        } else {
            item.style.cssText = `font-size: 15px;`;
        }
    })
});

let acc = document.querySelectorAll(".accordion");


menu.addEventListener('click', (e) => {
    let target = e.target;
    if(target.parentNode.classList.contains('menu-item')){
        menuItem.forEach((item, i) => item.classList.remove('active'))
        target.parentNode.classList.add('active')
    }
})

menuItem.forEach((item, i) =>{
    item.addEventListener('click', (e) => {
        let target = e.target;
        if(target){
            // acc[i].classList.add("active")
            console.log(acc[i])
            let panel = acc[i].nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    })
})

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
const headerLinkBtn = document.querySelectorAll('.menu-link');
const body = document.querySelector('.body');
const menuIcon = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');

menuIcon.addEventListener('click', function(elem) {
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    body.classList.toggle('lock');
});


headerLinkBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    headerLinkBtn.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
  });
})
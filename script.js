const menuShow = document.querySelector('.menu');
const menuIcon = document.querySelector('.menuBars');

function showMenu() {
  menuShow.classList.toggle('active');
  menuIcon.classList.toggle('fa-x');
}
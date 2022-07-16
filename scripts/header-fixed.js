// document.addEventListener('scroll', function () {
//   if ($(window).scrollTop() > 200) {
//     // если больше 1000 → добавляем класс
//     $('.header').addClass('header__container_fixed');
//   } else {
//     // если меньше 1000 → удаляем класс
//     $('.header').removeClass('header__container_fixed');
//   }    
// }) 

let header = document.querySelector('.header')

function myFunction() {
  if (window.pageYOffset > 300) {
    header.classList.add("header__container_fixed");
    document.getElementsByTagName('body')[0].classList.add('body_padding')
  } else {
    header.classList.remove("header__container_fixed");
    document.getElementsByTagName('body')[0].classList.remove('body_padding')
  }
}

window.onscroll = function() {myFunction()};
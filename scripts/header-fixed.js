
let header = document.querySelector('.header')

function myFunction() {
  if (window.pageYOffset > 300) {
    header.classList.add("header_fixed");
    document.getElementsByTagName('body')[0].classList.add('body_padding')
  } else {
    header.classList.remove("header_fixed");
    document.getElementsByTagName('body')[0].classList.remove('body_padding')
  }
}

window.onscroll = function() {myFunction()};
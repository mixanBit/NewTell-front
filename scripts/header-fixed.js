
let header = document.querySelector('.header')
let headerContainer = document.querySelector('.header__container')
let logoImg = document.querySelector('.logo-img')

function headerFixed() {
  if (window.pageYOffset > 50) {
    header.classList.add("header_fixed");
    headerContainer.classList.add('header__container_fixed')
    logoImg.classList.add('logo-img_fixed')
  } else {
    header.classList.remove("header_fixed");
    headerContainer.classList.remove('header__container_fixed')
    logoImg.classList.remove('logo-img_fixed')
  }
}

function initSize() {
  if(document.body.clientWidth < 1025){
    window.onscroll = function() {return false}
  } else{
    window.onscroll = function() {headerFixed()};
  }
}

initSize()

window.addEventListener('resize', initSize)



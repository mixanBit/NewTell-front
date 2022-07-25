let modalWindow = document.querySelectorAll('.js-modal-window')
let modalFon = document.querySelectorAll('.js-modal-fon')

$('[data-modal="btnOpenModal"]').each(function(index) {
  $(this).on('click', function() {
    modalWindow[index].classList.add('modal-window_active')
    modalFon[index].classList.add('data-received_active')
  })

  $('[data-modal="fonCloseModal"]').on('click', function(el) {
    if(el.target.classList.contains('modal-window_active')){
      modalWindow[index].classList.remove('modal-window_active')
      modalFon[index].classList.remove('data-received_active')
    }
  })

  $('[data-modal="btnCloseModal"]').on('click', function() {
    modalWindow[index].classList.remove('modal-window_active')
    modalFon[index].classList.remove('data-received_active')
  })
})

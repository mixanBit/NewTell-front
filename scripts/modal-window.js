let btnModal = document.querySelectorAll('.modal-btn')
let modalWindow = document.querySelectorAll('.modal-window')
let btnCloseModal = document.querySelector('.modal-close-btn')
let dataReceived = document.querySelector('.data-received')

for(let i = 0; i < btnModal.length; i++){
  btnModal[i].addEventListener('click', () => {
    modalWindow[i].classList.add('modal-window_active')
    dataReceived.classList.add('data-received_active')
  })

  modalWindow[i].addEventListener('click', (el) => {
    if(el.target.classList.contains('modal-window_active')){
      modalWindow[i].classList.remove('modal-window_active')
      dataReceived.classList.remove('data-received_active')
    }
  })

  btnCloseModal.addEventListener('click', () => {
    modalWindow[i].classList.remove('modal-window_active')
    dataReceived.classList.remove('data-received_active')
  })
}
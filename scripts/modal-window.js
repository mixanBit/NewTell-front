let btnModal = document.querySelectorAll('.modal-btn')
let modalWindow = document.querySelectorAll('.modal-window')
let btnCloseModal = document.querySelectorAll('.modal-close-btn')
let dataReceived = document.querySelectorAll('.data-received')

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

  btnCloseModal[i].addEventListener('click', () => {
    modalWindow[i].classList.remove('modal-window_active')
    dataReceived[i].classList.remove('data-received_active')
  })
}

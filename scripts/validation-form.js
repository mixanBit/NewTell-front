let feedbackInput = document.querySelectorAll('.feedback__input')
let errorText = document.querySelector('.error-text')
let inputEmail = document.querySelector('.input-email')
for(let i = 0; i < feedbackInput.length; i++){
  feedbackInput[i].addEventListener('invalid', errorInput)
  feedbackInput[i].addEventListener('input', resetErrorInput)
  inputEmail.addEventListener('invalid', errorInputEamil)
  inputEmail.addEventListener('input', resetErrorInputEmail)
}

function errorInput(el) {
  this.classList.add('input_error')
  el.preventDefault()
}

function resetErrorInput(el) {
  this.classList.remove('input_error')
}

function errorInputEamil(){
  errorText.classList.add('error-text_active')
  el.preventDefault()
}

function resetErrorInputEmail(){
  errorText.classList.remove('error-text_active')
}
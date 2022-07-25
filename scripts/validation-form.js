let errorText = document.querySelector('.js-error-text')

$('[data-input="inputCheckValidation"]').on('invalid', errorInput)
$('[data-input="inputCheckValidation"]').on('input', resetErrorInput)
$('[data-input-email="inputCheckValidation"]').on('invalid', errorInputEamil)
$('[data-input-email="inputCheckValidation"]').on('input', resetErrorInputEmail)


function errorInput(el) {
  this.classList.add('input_error')
  el.preventDefault()
}

function resetErrorInput() {
  this.classList.remove('input_error')
}

function errorInputEamil(el){
  errorText.classList.add('error-text_active')
  el.preventDefault()
}

function resetErrorInputEmail(){
  errorText.classList.remove('error-text_active')
}
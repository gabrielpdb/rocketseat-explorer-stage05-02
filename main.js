const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (e) {
  e.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
}

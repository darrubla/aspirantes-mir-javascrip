// Obtener elementos del DOM
const defaultStorage = {
  name: '',
  email: '',
}

let storage = getItemFromStorage()
const container = document.getElementById('user-info__container')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')

if (!storage) {
  storage = defaultStorage
  setItemOnStorage()
}

window.onload = setValues()

function getItemFromStorage() {
  let itemValue = JSON.parse(window.localStorage.getItem('user'))
  return itemValue
}

function setItemOnStorage() {
  return window.localStorage.setItem('user', JSON.stringify(storage))
}

function setValues() {
  const { name, email } = storage
  const nameElement = document.getElementById('user_name')
  const emailElement = document.getElementById('user_email')
  if (name && email) {
    container.classList.add('show')
    nameElement.innerText = name
    emailElement.innerText = email
  }
  isButtonDisabled()
}

function handleSubmit() {
  if (nameInput && emailInput) {
    storage = {
      name: nameInput.value,
      email: emailInput.value,
    }
    setItemOnStorage()
    setValues()
    handleClear()
  }
}

function handleDelete() {
  storage = defaultStorage
  setItemOnStorage()
  isButtonDisabled()
  container.classList.remove('show')
}

function handleClear() {
  nameInput.value = ''
  emailInput.value = ''
}

function isButtonDisabled() {
  const { name, email } = storage
  const button = document.getElementById('delete')
  button.disabled = !(name && email)
}

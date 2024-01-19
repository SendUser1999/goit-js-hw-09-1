import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const items = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

let dataForm = {};

items.form.addEventListener('input', throttle(onInput, 500));
items.form.addEventListener('submit', onFormSubmit);

onReload();

function onInput(event) {
  dataForm = {
    email: items.input.value.trim(),
    message: items.textarea.value.trim(),
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (items.input.value === '' || items.textarea.value === '') {
    return alert('Please fill in all the blanks');
  }
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(dataForm);
}

function onReload() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    dataForm = JSON.parse(savedMessage);
    items.input.value = dataForm.email;
    items.textarea.value = dataForm.message;
  }
}
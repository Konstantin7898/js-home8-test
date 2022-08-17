import throttle from 'lodash.throttle';

let formData = {};

const formEl = document.querySelector('form');

const localStorageData = localStorage.getItem('feedback-form-state');

if (localStorageData) {
  formData = JSON.parse(localStorageData);

  for (let key in formData) {
    formEl.elements[key].value = formData[key];
  }
}

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  localStorage.removeItem('feedback-form-state');
  console.log(formData);
  e.target.reset();
  formData = {};
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

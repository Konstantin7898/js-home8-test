import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const formData = {};
onPopulateInput();
formEl.addEventListener("input", throttle(onFormInputSubmit, 500));
function onFormInputSubmit(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
formEl.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onPopulateInput() {
  const datalocalStorage = localStorage.getItem(STORAGE_KEY);
  const parsedDatalocalStorage = JSON.parse(datalocalStorage);
  if (parsedDatalocalStorage) {
    Object.entries(parsedDatalocalStorage).forEach(([name, value]) => {
      formEl.elements[name].value = value;
      formData[name] = value;
    });
  }
}
console.log("Object", formData);

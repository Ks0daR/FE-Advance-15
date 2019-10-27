const refs = {
  form: document.querySelector('#validation-input'),
};

function lengthInput({ target }) {
  if (+target.dataset.length === +target.value.length) {
    refs.form.classList.remove('invalid');
    refs.form.classList.add('valid');
  } else {
    refs.form.classList.remove('valid');
    refs.form.classList.add('invalid');
  }
}

refs.form.addEventListener('blur', lengthInput);

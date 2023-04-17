const form = document.querySelector('form');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');

form.addEventListener('submit', (event) => {
  if (password.value !== confirm_password.value) {
    event.preventDefault();
    alert('Las contraseñas no coinciden.');
  }
});

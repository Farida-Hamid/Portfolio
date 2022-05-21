const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#text');

function storage(name, email, message) {
  const saver = JSON.stringify({ name, email, message });
  localStorage.setItem('data', saver);
}

function retrieve() {
  const data = JSON.parse(localStorage.getItem('data'));

  if (data) {
    name.value = data.name;
    email.value = data.email;
    message.value = data.message;
  }

  name.addEventListener('input', () => storage(name.value, email.value, message.value));
  email.addEventListener('input', () => storage(name.value, email.value, message.value));
  message.addEventListener('input', () => storage(name.value, email.value, message.value));
}

retrieve();

const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#text');

function storage(fullName, email, message) {
  const saver = JSON.stringify({ fullName, email, message });
  localStorage.setItem('data', saver);
}

function retrieve() {
  const data = JSON.parse(localStorage.getItem('data'));

  if (data) {
    fullName.value = data.fullName;
    email.value = data.email;
    message.value = data.message;
  }

  fullName.addEventListener('input', () => storage(fullName.value, email.value, message.value));
  email.addEventListener('input', () => storage(fullName.value, email.value, message.value));
  message.addEventListener('input', () => storage(fullName.value, email.value, message.value));
}

retrieve();

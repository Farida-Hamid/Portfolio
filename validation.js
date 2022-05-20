const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
form.addEventListener('submit', (e) => {
  const messages = [];
  if (email.value.match(/^[a-z@.0-9-_]*$/)) {
    messages.push('your email is correct');
  }
});
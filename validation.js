const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error-message');
form.addEventListener('submit', (e) => {
  const messages = [];
  if (email.value.match(/^[a-z@.0-9-_]*$/)) {
    messages.push('your email is correct');
  } else {
    e.preventDefault();
    messages.push('Please enter the email in lower case.');
    errorElement.innerText = messages.join(', ');
  }
});

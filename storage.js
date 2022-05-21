const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#text');

function storage(name, email, message) {
  const saver = JSON.stringify({name, email, message});
  localStorage.setItem('data', saver);
}

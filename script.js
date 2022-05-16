const header = document.querySelector('header');
const section = document.createElement('section');
header.appendChild(section);
// section.innerHTML = `<p>Hello eorld</p>`;

const open = document.querySelector('#menue-button');

open.addEventListener('click',()=> {
  const window = document.createElement('div');
  window.className = 'window';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `<div class="all">

  <span>Portifolio</span>
  <span>about</span>
  <span>contact</span>
  </div>`

  window.appendChild(popup);
  header.appendChild(window);
})

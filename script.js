const header = document.querySelector('header');
const section = document.createElement('section');
header.appendChild(section);

const open = document.querySelector('#menue-button');

open.addEventListener('click',()=> {
  const window = document.createElement('div');
  window.className = 'window';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `<div class="all">
  <button type='button' class="close">X</button>
  <i class="fa-solid fa-xmark close"></i>
  <ul class="popup">
  <li id="portifolio">Portifolio</li>
  <li id="about">About</li>
  <li id="contact">Contact</li>
  </ul>
    </div>`;

  window.appendChild(popup);
  header.appendChild(window);
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    header.removeChild(window);
  });
})

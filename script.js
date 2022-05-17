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
  <i class="fa-solid fa-xmark close"></i>
  <ul class="popup">
  <li id="portifolio">portifolio</li>
  <li id="about">about</li>
  <li id="contact">contact</li>
  </ul>
    </div>`;


  window.appendChild(popup);
  header.appendChild(window);
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    header.removeChild(window);
  });
})

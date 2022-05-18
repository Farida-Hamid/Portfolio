const header = document.querySelector('body');
const section = document.createElement('section');
header.appendChild(section);

const open = document.querySelector('#menue-button');

open.addEventListener('click', () => {
  const window = document.createElement('div');
  window.className = 'window';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="all">
    <button type='button' class="close-button">X</button>
    <ul class="list-popup">
        <li><a href="#port">Portifolio</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#form-section" </a>Contact</li>
    </ul>
  </div>`;

  window.appendChild(popup);
  header.appendChild(window);
  const close = document.querySelector('.close-button');
  close.addEventListener('click', () => {
    header.removeChild(window);
  });
});

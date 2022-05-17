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
  <ul id="popup">
  <li><a href=".project">Portifolio</a></li>
  <li>About</li>
  <li>Contact</li>
  </ul>
    </div>`;

  window.appendChild(popup);
  header.appendChild(window);
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    header.removeChild(window);
  });
})

const main = document.querySelector('main');
const project = document.createElement('project');
main.appendChild(project);

const showProject = document.querySelector('.see-project')

showProject.addEventListener('click', () => {
  const window = document.createElement('div');
  window.className = 'window';
  const projectPopup = document.createElement('div');
  projectPopup.className = 'project-popup';
  projectPopup.innerHTML = `
    <div class="desktop-window">
      <div class="desktop-top-popup">
        <h2>Tonic</h2>
        <button type='button' class="close">X</button>
      </div>
      <ul class="tech">
        <li class="company-name"><a>company</a></li>
        <li><a href="#"><img src="images/Counter.png" alt="dot"></a></li>
        <li><a>Back End Dev</a></li>
        <li><a href="#"><img src="images/Counter.png" alt="dot"></a></li>
        <li><a>2015</a></li>
      </ul>
      <img class="desktop-popup-snapshot" src="./images/Snapshoot-Portfolio-popup.svg" alt="project 1 snapshot">
  </div>`;

  window.appendChild(projectPopup);
  header.appendChild(window);
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    header.removeChild(window);
  });

})

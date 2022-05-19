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
  <section class="bg"></section>

  <div class="all">
    <button type='button' class="close-button">X</button>
    <ul class="list-popup">
        <li><a id="closer1" href="#port">Portifolio</a></li>
        <li><a id="closer2" href="#about-me">About</a></li>
        <li><a id="closer3" href="#form-section" </a>Contact</li>
    </ul>
  </div>`;

  window.appendChild(popup);
  header.appendChild(window);
  const close = document.querySelector('.close-button');
  close.addEventListener('click', () => {
    header.removeChild(window);
  });
  document.querySelector('#closer1').addEventListener('click', () => {
    header.removeChild(window);
  });
  document.querySelector('#closer2').addEventListener('click', () => {
    header.removeChild(window);
  });
  document.querySelector('#closer3').addEventListener('click', () => {
    header.removeChild(window);
  });
});

const main = document.querySelector('main');
const project = document.createElement('project');
main.appendChild(project);

const showProject = document.querySelector('.show-project')

showProject.addEventListener('click', () => {
  const window2 = document.createElement('div');
  window2.className = 'big-window';
  const projectPopup = document.createElement('div');
  projectPopup.className = 'project-popup';
  projectPopup.innerHTML = `
    <div class="desktop-window">
      <div class="desktop-top-popup">
        <h2>Tonic</h2>
        <button type='button' class="close-button">X</button>
        </div>
      <ul class="tech">
        <li class="company-name"><a>company</a></li>
        <li><a href="#"><img src="images/Counter.png" alt="dot"></a></li>
        <li><a>Back End Dev</a></li>
        <li><a href="#"><img src="images/Counter.png" alt="dot"></a></li>
        <li><a>2015</a></li>
      </ul>
      <img class="desktop-popup-snapshot" src="./images/Snapshoot1-Portfolio.svg" alt="project 1 snapshot">
  </div>`;

  window2.appendChild(projectPopup);
  main.appendChild(window2);
  const close = document.querySelector('.close-button');
    close.addEventListener('click', () => {
    main.removeChild(window2);
  });
})

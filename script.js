// Menu popup window
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

// Project popup window

const buttonOne = document.querySelectorAll('.show-project');

const projects = [
  {
    title: 'Tonic',
    devs: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'css', 'javascript'],
    image: '/assets/projects/project-2.png',
    liveButton: 'See Live',
    sourceButton: 'See Source',
    live: 'images/live-version2.svg',
    source: 'images/live-version1.svg',
  },
  {
    title: 'Multi-Post Stories',
    devs: ['FACEBOOK', '•', 'Full Stack Dev', '•', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: './images/Snapshoot-Portfolio-2.png',
    liveButton: 'See Live',
    sourceButton: 'See Source',
    live: 'images/live-version2.svg',
    source: 'images/live-version1.svg',
  },
  {
    title: 'Facebook 360',
    devs: ['FACEBOOK', '•', 'Full Stack Dev', '•', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      tags: ['html', 'Ruby on rails', 'css', 'javascript'],
      image: './images/Snapshoot-Portfolio-3.png',
      liveButton: 'See Live',
      sourceButton: 'See Source',
      live: 'images/live-version2.svg',
      source: 'images/live-version1.svg',
  },
  {
  title: 'Uber Navigation',
    devs: ['Uber', '•', 'Lead Developer', '•', '2018'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: './images/Snapshoot-Portfolio4.png',
    liveButton: 'See Live',
    sourceButton: 'See Source',
    live: 'images/live-version2.svg',
    source: 'images/live-version1.svg',
  },
];


function showProject(){
  const showProject = document.querySelector('.show-project');

  const main = document.querySelector('main');
  const project = document.createElement('project');
  main.appendChild(project);
  showProject.addEventListener('click', () => {
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

    main.appendChild(projectPopup);
    const close = document.querySelector('.close-button');
      close.addEventListener('click', () => {
      main.removeChild(projectPopup);
    });
  })
}

showProject ()

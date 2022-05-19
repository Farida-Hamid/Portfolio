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
const seeProject = document.querySelectorAll('.show-project');

const projects = [
  {
    title: 'Tonic',
    devs: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'css', 'javascript', ''],
    image: './images/Snapshoot1-Portfolio.svg',
    liveButton: 'See Live',
    sourceButton: 'See Source',
    live: 'images/live-version2.svg',
    source: 'images/live-version.svg',
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
    source: 'images/live-version.svg',
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
      source: 'images/live-version.svg',
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
    source: 'images/live-version.svg',
  },
];

function display(index){
  const main = document.querySelector('main');
  
  const {
    title,
    devs,
    description,
    tags,
    image,
    liveButton,
    sourceButton,
    live,
    source,
  } = projects[index];
  const dev1 = devs[0];
  const dev2 = devs[1];
  const dev3 = devs[2];
  const dev4 = devs[3];
  const dev5 = devs[4];
  const tag1 = tags[0];
  const tag2 = tags[1];
  const tag3 = tags[2];
  const tag4 = tags[3];

  const projectPopup = document.createElement('div');
  projectPopup.className = 'project-popup';
  projectPopup.innerHTML = `
    <div class="desktop-window">
      <div class="desktop-top-popup">
        <h2>${title}</h2>
        <button type='button' class="close-button">X</button>
        </div>
      <ul class="tech">
      <li class="dev1">${dev1}</li>
      <li class="dev2">${dev2}</li>
      <li class="dev3">${dev3}</li>
      <li class="dev4">${dev4}</li>
      <li class="dev5">${dev5}</li>
      </ul>
      <img class="desktop-popup-snapshot" src=${image} alt="project 1 snapshot">
      <p class="p-popup">${description}</p>
      <ul class="prog-languages">
        <li class="lang">${tag1}</li>
        <li class="lang">${tag2}</li>
        <li class="lang">${tag3}</li>
        <li class="lang">${tag4}</li>
      </ul>
      <hr>
      <button type='button' class="popup-button">
        <img class="desktop-popup-snapshot" src=${live}>
        ${liveButton}
      </button>
      <button type='button' class="popup-button">
        <img class="desktop-popup-snapshot" src=${source}>
        ${sourceButton}
    </button>
  </div>`;

  main.appendChild(projectPopup);
  const close = document.querySelector('.close-button');
  close.addEventListener('click', () => {
    main.removeChild(projectPopup);
  });
}

for (let i = 0; i < seeProject.length; i++) {
  seeProject[i].addEventListener('click', () => display(i));
}

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

// Project Object
const projects = [
  {
    title: 'Tonic',
    devs: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
    description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'A daily selection of privately personalized reads; no accounts or sign-ups required.'],
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
    description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'A daily selection of privately personalized reads; no accounts or sign-ups required.'],
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
    description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'A daily selection of privately personalized reads; no accounts or sign-ups required.'],
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
    description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'A daily selection of privately personalized reads; no accounts or sign-ups required.'],
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: './images/Snapshoot-Portfolio4.png',
    liveButton: 'See Live',
    sourceButton: 'See Source',
    live: 'images/live-version2.svg',
    source: 'images/live-version.svg',
  },
];

// Add project cards
function show(index) {
  const {
    title,
    devs,
    description,
    tags,
    image,
  } = projects[index];

  const main = document.querySelector('.previous-work');
  const project = document.createElement('div');
  project.className = 'previous-work';
  project.innerHTML = `
  <section class="project">
    <img class="snapshot" src=${image} alt="project 1 snapshot">
    <div class="project-properties">
      <h2>${title}</h2>
      <ul class="tech">
      <li class="company-name">${devs[0]}</li>
      <li class="dev2">${devs[1]}</li>
      <li class="dev3">${devs[2]}</li>
      <li class="dev4">${devs[3]}</li>
      <li class="dev5">${devs[4]}</li>
      </ul>
      <p>${description[1]}</p>
      <ul class="prog-languages">
      <li class="lang">${tags[0]}</li>
      <li class="lang"  style="min-width: fit-content;">${tags[1]}</li>
      <li class="lang">${tags[2]}</li>
      <li class="lang">${tags[3]}</li>
      </ul>
      <button type='button' class="show-project">See Project</button>
    </div>
  </section>`;

  main.appendChild(project);
}

for (let i = 0; i < 4; i += 1) {
  show(i);
}

// Add popup window
const seeProject = document.querySelectorAll('.show-project');

function display(index) {
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

  const projectPopup = document.createElement('div');
  projectPopup.className = 'project-popup';
  projectPopup.innerHTML = `
    <div class="desktop-window">
    <div class="all-popup">
        <div class="desktop-top-popup">
          <h2>${title}</h2>
          <button type='button' class="close-button">X</button>
          </div>
        <ul class="tech">
        <li class="company-name">${devs[0]}</li>
        <li class="dev2">${devs[1]}</li>
        <li class="dev3">${devs[2]}</li>
        <li class="dev4">${devs[3]}</li>
        <li class="dev5">${devs[4]}</li>
        </ul>
        <img class="desktop-popup-snapshot" src=${image} alt="project 1 snapshot">
        <div class="bottom-container">
          <p class="p-popup">${description[0]}</p>
          <div class="small-container">
            <ul class="prog-languages">
              <li class="lang">${tags[0]}</li>
              <li class="lang"  style="min-width: fit-content;">${tags[1]}</li>
              <li class="lang">${tags[2]}</li>
              <li class="lang">${tags[3]}</li>
            </ul>
            <hr class="line">
            <section class="buttons">
            <a><button type='button' class="popup-button">
              ${liveButton}
              <img class="button-logo" src=${live}>
            </button></a>
            <a><button type='button' class="popup-button">
              ${sourceButton}
              <img class="button-logo" src=${source}>
            </button></a>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div></div>`;

  main.appendChild(projectPopup);
  const close = document.querySelector('.close-button');
  close.addEventListener('click', () => {
    main.removeChild(projectPopup);
  });
}

for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => display(i));
}

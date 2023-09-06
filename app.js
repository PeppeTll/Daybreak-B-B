import { imageList, serviceList, locationList } from './mockup.js';

const qS = el => document.querySelector(el);
const cE = el => document.createElement(el);

const createEl = (type, cls = null, textContent = null, parent = null, ...attrs) => {
  const element = cE(type);
  element.className = cls
  element.textContent = textContent;
  attrs.length > 0 ? attrs.forEach(attr => element.setAttribute(attr?.name, attr?.value)) : '';
  element
  parent?.appendChild(element);
  return element;
};

const createSlider = () => {
  const slider = createEl('div', 'slider', null, sliderwrapper);
  const imgSlider = createEl('img', 'img_slider', null, slider, { name: 'src', value: "./assets/facebook_cover_photo_2.png" }, { name: 'alt', value: 'hero image' });

  setInterval(() => {
    imgSlider.src = imageList[count].path
    count === 3 ? count = 0 : count++;
  }, 3000)
}

const createServiceCard = () => {
  serviceList.map(card => {
    const cardEl = createEl('div', 'card', null, serviceCard);
    const iconCard = createEl('i', `icon_card ${card.icon}`, null, cardEl);
    const titleCard = createEl('h2', `title_card`, card.title, cardEl);
    const descriptionCard = createEl('p', `card_description`, card.description, cardEl);
  })
};

const createLocationsCard = () => {
  locationList.map(location => {
    const card = createEl('div', 'location_card', null, infoLocation);
    const icon = createEl('i', `icon_location ${location.icon}`, null, card);
    const infoWrap = createEl('div', 'info_wrap', null, card);
    const title = createEl('h2', 'title_location', location.location, infoWrap);
    const description = createEl('p', 'description_location', location.description, infoWrap);
  })
};


const sliderwrapper = qS('#slider_root');
const serviceCard = qS('#card_service');
const infoLocation = qS('#info_location');
const nav = qS('.ul_navbar');
const burgher = qS('.burgher');
let count = 0;

createSlider();
createServiceCard();
createLocationsCard();

burgher.addEventListener('click', () => {
  nav.classList.toggle('active');
});
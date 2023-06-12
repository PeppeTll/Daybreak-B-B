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
  const imgSlider = createEl('img', 'img_slider', null, slider, { name: 'src', value: 'https://www.bedandbreakfastroma.com/upload/inkam3/20170508/234-2016-SITO-1.jpg' }, { name: 'alt', value: 'hero image' });

  setInterval(() => {
    imgSlider.src = imageList[count].path
    count === 2 ? count = 0 : count++;
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
    const description = createEl('div', 'description_location', location.description, infoWrap);
  })
};


const sliderwrapper = qS('#slider_root');
const serviceCard = qS('#card_service');
const infoLocation = qS('#info_location');
let count = 0;

createSlider();
createServiceCard();
createLocationsCard();
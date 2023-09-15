import Card from "../components/Card.js";

import PopupWithImage from "../components/PopupWithImage.js";

export function createNewCard(obj, template, listener) {
  const card = new Card(obj, template, listener);
  return card.generateCard();
}

export function renderCard(card, container) {
  container.prepend(card);
}

export function handleCardClick(name, link) {
  const popup = new PopupWithImage(".popup_type_big-picture");
  popup.open(name, link);
  popup.setEventListeners();
}

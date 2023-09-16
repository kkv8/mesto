import Card from "../components/Card.js";

import PopupWithImage from "../components/PopupWithImage.js";

export function createNewCard(obj, template, listener) {
  const card = new Card(obj, template, listener);
  return card.generateCard();
}

const popup = new PopupWithImage(".popup_type_big-picture");
popup.setEventListeners();

export function handleCardClick(name, link) {
  popup.open(name, link);
}

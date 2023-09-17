import Card from "../components/Card.js";

import PopupWithImage from "../components/PopupWithImage.js";

export function createNewCard(obj, template, listener) {
  const card = new Card(obj, template, listener);
  return card.generateCard();
}

const popupBigPicture = new PopupWithImage(".popup_type_big-picture");
popupBigPicture.setEventListeners();

export function handleCardClick(name, link) {
  popupBigPicture.open(name, link);
}

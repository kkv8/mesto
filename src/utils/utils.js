import Card from '../components/Card.js'
import {
  popupEditProfile,
  inputProfileName,
  profileName,
  inputAbout,
  profileDescription,
  buttonsClose
} from './constants.js'

import PopupWithImage from '../components/PopupWithImage.js'

export function createNewCard(obj, template, listener) {
  const card = new Card(obj, template, listener);
  return card.generateCard();
}

export function renderCard(card, container) {
  container.prepend(card);
}

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleClosePopupByEsc);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleClosePopupByEsc);
}

// export function handleClosePopupByEsc(evt) {
//   if (evt.key === "Escape") {
//     const popupOpened = document.querySelector(".popup_opened");
//     closePopup(popupOpened, buttonsClose);
//   }
// }

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputAbout.value;
  closePopup(popupEditProfile);
}

export const handleEditButtonClick = () => {
  openPopup(popupEditProfile);
  inputProfileName.value = profileName.textContent;
  inputAbout.value = profileDescription.textContent;
};

export function handleCardClick(name, link, alt) {
  const popup = new PopupWithImage (".popup_type_big-picture")
  popup.open(name, link, alt)
  popup.setEventListeners()
}



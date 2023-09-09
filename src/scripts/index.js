import '../pages/index.css';
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import initialCards from "./cards.js"

const popupEditButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_add-card");
const inputProfileName = document.querySelector(".popup__input_type_name");
const profileName = document.querySelector(".profile__name");
const inputAbout = document.querySelector(".popup__input_type_about");
const profileDescription = document.querySelector(".profile__description");
const formEdit = document.querySelector(".edit-form");
const buttonAdd = document.querySelector(".profile__add-button");

const buttonsClose = Array.from(
  document.querySelectorAll(".popup__close-button")
);
const cardElements = document.querySelector(".elements");
const cardForm = document.querySelector(".card-form");
const inputLink = document.querySelector(".popup__input_type_link");
const inputTitle = document.querySelector(".popup__input_type_title");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const popupList = Array.from(document.querySelectorAll(".popup"));
popupList.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});

function createNewCard(obj, template, listener) {
  const card = new Card(obj, template, listener);
  return card.generateCard()
}

initialCards.forEach(function (item) {
  const card = createNewCard(
    item,
    ".card-template_type_default",
    handleCardClick
  );
  
  renderCard(card, cardElements);
});

function renderCard(card, container) {
  container.prepend(card);
}

export default function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleClosePopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleClosePopupByEsc);
}

function handleClosePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputAbout.value;
  closePopup(popupEditProfile);
}

buttonsClose.forEach(function (item) {
  const popup = item.closest(".popup");
  item.addEventListener("click", function () {
    closePopup(popup);
  });
});

buttonAdd.addEventListener("click", function () {
  openPopup(popupAddCard);
});

cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = createNewCard(
    { name: inputTitle.value, link: inputLink.value, alt: inputTitle.value },
    ".card-template_type_default",
    handleCardClick
  );
  cardForm.reset();

  renderCard(newCard, cardElements);

  closePopup(popupAddCard);
});

const handleEditButtonClick = () => {
  openPopup(popupEditProfile);
  inputProfileName.value = profileName.textContent;
  inputAbout.value = profileDescription.textContent;
};

function handleCardClick(name, link, alt) {
  const popupBigPicture = document.querySelector(".popup_type_big-picture");
  const popupBigPictureImage = popupBigPicture.querySelector(".big-picture");
  openPopup(popupBigPicture);
  popupBigPictureImage.src = link;
  popupBigPicture.querySelector(".big-picture-title").textContent = name;
  popupBigPictureImage.alt = name;
}

popupEditButton.addEventListener("click", handleEditButtonClick);
formEdit.addEventListener("submit", handleProfileFormSubmit);

const formEditNew = new FormValidator(validationConfig, formEdit);
formEditNew.enableValidation();
const formAddNew = new FormValidator(validationConfig, cardForm);
formAddNew.enableValidation();
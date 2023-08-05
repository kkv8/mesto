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
const cardTemplate = document.querySelector("#card-template").content;
const cardForm = document.querySelector(".card-form");
const inputLink = document.querySelector(".popup__input_type_link");
const inputTitle = document.querySelector(".popup__input_type_title");
const popupBigPicture = document.querySelector(".popup_type_big-picture");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const popupBigPictureImage = popupBigPicture.querySelector(".big-picture")
const popupBigPictureTitle = popupBigPicture.querySelector(".big-picture-title")

const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((popup) => {
  popup.addEventListener('click', function(evt) {
    if (evt.target === popup) {
      closePopup(popup)
    }
  })
})

initialCards.forEach(function (item) {
  const card = createCard(item);
  renderCard(card, cardElements);
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleClosePopupByEsc)
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleClosePopupByEsc)
}

function handleClosePopupByEsc (evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened)
  }
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputAbout.value;
  closePopup(popupEditProfile);
}

function renderCard(card, container) {
  container.prepend(card);
}

function createCard(cardData) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".element__image");
  cardElement.querySelector(".element__title").textContent = cardData.name;
  cardElementImage.src = cardData.link;
  cardElementImage.alt = cardData.alt;
  cardElement
    .querySelector(".trash-icon")
    .addEventListener("click", () => {
      cardElement.remove()
    });

    const cardLike = cardElement.querySelector(".heart-icon");
  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("heart-icon_active");
  });

  const cardImage = cardElement.querySelector(".element__image");
  cardImage.addEventListener("click", function () {
    openPopup(popupBigPicture);
    popupBigPictureImage.src = cardData.link;
    popupBigPictureTitle.textContent =
      cardData.name;
      popupBigPictureImage.alt = cardData.alt;
  });
  return cardElement;
}

buttonsClose.forEach(function (item) {
  item.addEventListener("click", function () {
    const popup = item.closest(".popup");
    closePopup(popup);
  });
});


buttonAdd.addEventListener("click", function () {
  openPopup(popupAddCard);
});

cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = {
    name: inputTitle.value,
    link: inputLink.value,
    alt: inputTitle.value,
  };
  cardForm.reset()
  renderCard(createCard(newCard), cardElements);
  closePopup(popupAddCard);
});


const handleEditButtonClick = () => {
  openPopup(popupEditProfile);
  inputProfileName.value = profileName.textContent;
  inputAbout.value = profileDescription.textContent;
}

popupEditButton.addEventListener("click", handleEditButtonClick);
formEdit.addEventListener("submit", handleProfileFormSubmit);


enableValidation(validationConfig);

import "../pages/index.css";
import FormValidator from "../components/FormValidator.js";

import {
  buttonAdd,
  cardForm,
  popupEditButton,
  formEdit,
  initialCards,
  cardElements,
  validationConfig,
  profileName,
  profileDescription,
  inputProfileName,
  inputAbout,
} from "../utils/constants.js";

import { handleCardClick, createNewCard } from "../utils/utils.js";

import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

const defaultCardList = new Section(
  {
    renderer: (cardItem) => {
      const cardElement = createNewCard(
        cardItem,
        ".card-template_type_default",
        handleCardClick
      );

      defaultCardList.addItem(cardElement);
    },
  },
  cardElements
);
defaultCardList.renderItems(initialCards);

import PopupWithForm from "../components/PopupWithForm";

const mestoUserInfo = new UserInfo(profileName, profileDescription);

const popupEdit = new PopupWithForm(".popup_type_edit-profile", {
  submitFormCallback: (data) => {
    mestoUserInfo.setUserInfo(data.name, data.about);
    popupEdit.close();
  },
});

popupEdit.setEventListeners();

const formEditNew = new FormValidator(validationConfig, formEdit);
formEditNew.enableValidation();

popupEditButton.addEventListener("click", () => {
  popupEdit.open();
  const data = mestoUserInfo.getUserInfo();
  inputProfileName.value = data.name;
  inputAbout.value = data.about;
});

// const newCardSection = new Section({}, cardElements);

const popupAdd = new PopupWithForm(".popup_type_add-card", {
  submitFormCallback: (data) => {
    const newData = {
      name: data.name,
      link: data.link,
    };

    const cardElement = createNewCard(
      newData,
      ".card-template_type_default",
      handleCardClick
    );

    defaultCardList.addItem(cardElement);

    popupAdd.close();
  },
});

popupAdd.setEventListeners();

const formAddNew = new FormValidator(validationConfig, cardForm);
formAddNew.enableValidation();

buttonAdd.addEventListener("click", () => {
  popupAdd.open();
});

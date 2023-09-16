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
    items: initialCards,
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
defaultCardList.renderItems();

import PopupWithForm from "../components/PopupWithForm";

const MestoUserInfo = new UserInfo(profileName, profileDescription);

const popupEdit = new PopupWithForm(".popup_type_edit-profile", {
  submitFormCallback: (data, evt) => {
    evt.preventDefault();
    MestoUserInfo.setUserInfo(data.name, data.about);
    popupEdit.close();
  },
});

popupEdit.setEventListeners();

const formEditNew = new FormValidator(validationConfig, formEdit);
formEditNew.enableValidation();

popupEditButton.addEventListener("click", () => {
  popupEdit.open();
  const data = MestoUserInfo.getUserInfo();
  inputProfileName.value = data.name;
  inputAbout.value = data.about;
});

const popupAdd = new PopupWithForm(".popup_type_add-card", {
  submitFormCallback: (data, evt) => {
    evt.preventDefault();
    const newData = {
      name: data.name,
      link: data.link,
    };

    const cardElement = createNewCard(
      newData,
      ".card-template_type_default",
      handleCardClick
    );

    cardElements.prepend(cardElement);

    popupAdd.close();
  },
});

popupAdd.setEventListeners();

const formAddNew = new FormValidator(validationConfig, cardForm);
formAddNew.enableValidation();

buttonAdd.addEventListener("click", () => {
  popupAdd.open ();
});

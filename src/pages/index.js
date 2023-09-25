import "../pages/index.css";

import {
  buttonAdd,
  cardForm,
  popupEditButton,
  formEdit,
  cardElements,
  validationConfig,
  profileName,
  profileAvatar,
  inputProfileName,
  inputAbout,
  optionsApi,
  profileDescription,
} from "../utils/constants.js";

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import Card from "../components/Card";
import PopupWithConfirmation from "../components/PopupWithConfirmation";

const api = new Api(optionsApi);
let userId;
Promise.all([api.getProfileInfo(), api.getAllCards()])
  .then(([info, cards]) => {
    userId = info._id;
    mestoUserInfo.setId(info._id);
    mestoUserInfo.setUserInfo(info.name, info.about);
    mestoUserInfo.setUserAvatar(info.avatar);

    defaultCardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

function handleCardClick(name, link) {
  popupBigPicture.open(name, link);
}

function createNewCard(data) {
  const card = new Card(
    {
      data,
      handleCardClick,

      handleTrashIconClick: (id) => {
        popupDeleteConfirm.open();
        popupDeleteConfirm.setSubmit(() => {
          api
            .deleteCard(id)
            .then(() => {
              card.remove();
              popupDeleteConfirm.close();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      },

      handleLikeClick: () => {
        api
          .putLike(data._id)
          .then((res) => {
            console.log(res);
            card.toggleLike(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },

      handleLikeDelete: () => {
        api
          .deleteLike(data._id)
          .then((res) => {
            console.log(res);
            card.toggleLike(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },

      userId,
    },
    ".card-template_type_default"
  );
  return card.generateCard();
}

const popupDeleteConfirm = new PopupWithConfirmation(
  ".popup_type_delete-confirmation"
);
popupDeleteConfirm.setEventListeners();

const popupBigPicture = new PopupWithImage(".popup_type_big-picture");
popupBigPicture.setEventListeners();

const defaultCardList = new Section(
  (item) => {
    const cardElement = createNewCard(item);
    defaultCardList.addItem(cardElement);
  },

  cardElements
);

const mestoUserInfo = new UserInfo(
  profileName,
  profileDescription,
  profileAvatar
);

const popupEdit = new PopupWithForm(".popup_type_edit-profile", {
  submitFormCallback: (data) => {
    api
      .editProfileInfo({ name: data.name, about: data.about })

      .then((res) => {
        mestoUserInfo.setUserInfo(res.name, res.about);
        popupEdit.close();
      })

      .catch((err) => {
        console.log(err);
      });

    
  },
});

popupEdit.setEventListeners();

const formEditNew = new FormValidator(validationConfig, formEdit);
formEditNew.enableValidation();

popupEditButton.addEventListener("click", () => {
  popupEdit.open();
  const info = mestoUserInfo.getUserInfo()
      inputProfileName.value = info.name;
      inputAbout.value = info.about;
   
});

const popupAvatar = new PopupWithForm(".popup_type_edit-avatar", {
  submitFormCallback: (data) => {
    api
      .editProfileAvatar(data)
      .then((res) => {
        mestoUserInfo.setUserAvatar(res.avatar);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      });

   
  },
});

popupAvatar.setEventListeners();

document
  .querySelector(".profile__avatar-edit-button")
  .addEventListener("click", () => {
    popupAvatar.open();
  });

const popupAdd = new PopupWithForm(".popup_type_add-card", {
  submitFormCallback: (data) => {
    api
      .addCard({
        name: data.name,
        link: data.link,
      })

      .then((newCard) => {
        const card = createNewCard(newCard);

        defaultCardList.addItem(card);
        popupAdd.close();
      })
      .catch((err) => {
        console.log(err);
      });

   
  },
});

popupAdd.setEventListeners();

const formAddNew = new FormValidator(validationConfig, cardForm);
formAddNew.enableValidation();

buttonAdd.addEventListener("click", () => {
  popupAdd.open();
});

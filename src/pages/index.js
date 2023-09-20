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
import Api from "../components/Api.js";

const optionsApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-75/',
  headers: {
    authorization: '7b34e9f6-1b85-4b4d-aa61-8ed0d9a933c7',
    'Content-type': "application/json",
    
  }
}

const api = new Api(optionsApi)


const defaultCardList = new Section(
  {
    renderer: (cardItem) => {
      const cardElement = createNewCard(
        cardItem, 
        ".card-template_type_default",
        handleCardClick, (id) => {
    
          api.deleteCard(id)
            .then(() => {
              cardElement.remove()
            })
        }
        
      );

      defaultCardList.addItem(cardElement);
    },
  },
  cardElements
);

api.getAllCards()
.then((cards) => {
  defaultCardList.renderItems(cards);
})

const profileAvatar = document.querySelector('.profile__avatar')

//////получить инф о профиле
// api.getProfileInfo()
// .then((info) => {
//   console.log(info)
//   profileName.textContent = info.name
//   profileDescription.textContent = info.about
//   profileAvatar.src = info.avatar
// })

// //////изменить имя профиля
// api.editProfileInfo({name: 'csdvs', about: 'gdfgsgd'})
// .then((res) => {
//   console.log(res)
// })


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

const popupAdd = new PopupWithForm(".popup_type_add-card", {
  submitFormCallback: (data) => {

    api.addCard({
      name: data.name,
      link: data.link    
    })

    .then((newCard) => {
      const card = createNewCard(
          newCard,
          ".card-template_type_default",
          handleCardClick, (id) => {
           
            api.deleteCard(id)
              .then(() => {
                card.remove()
              })
          }
        );
 
        defaultCardList.addItem(card);
   
    })

    popupAdd.close();
   
  },
});



popupAdd.setEventListeners();

const formAddNew = new FormValidator(validationConfig, cardForm);
formAddNew.enableValidation();

buttonAdd.addEventListener("click", () => {
  popupAdd.open();
});

// const popupDeleteCard = new Popup ('popup_type_delete-card', {
//   submitFormCallback: (data) => {
//    console.log(data)
// }
// })

// popupDeleteCard.setEventListeners()

// const buttondel = document.querySelector('.trash-icon')
// buttondel.addEventListener('click', ()=> {
//   alert(123)
// })


// fetch('https://mesto.nomoreparties.co/v1/cohort-75/cards', {
//   headers: {
//     authorization: '7b34e9f6-1b85-4b4d-aa61-8ed0d9a933c7'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   }); 





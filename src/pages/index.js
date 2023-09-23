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
import PopupWithImage from '../components/PopupWithImage'
import Card from "../components/Card";

function handleCardClick(name, link) {
  popupBigPicture.open(name, link);
}

function createNewCard(data) {
  const card = new Card({
    data,
    handleCardClick, 

    handleTrashIconClick: (id) => {
      const popupDeleteConfirm = new PopupWithConfirmation('.popup_type_delete-confirmation', {
        submitFormCallback: () => {
        api.deleteCard(id)
        .then(() => {
          card.remove()
        })
       popupDeleteConfirm.close()
        }
      })
      popupDeleteConfirm.setEventListeners()
      popupDeleteConfirm.open()
    },

    handleLikeClick: () => {
      api.putLike(data._id)
      .then((res) => {
        console.log(res)
        card.toggleLike(res)
      })
    },

    handleLikeDelete: () => {
      api.deleteLike(data._id)
      .then((res) => {
        console.log(res)
        card.toggleLike(res)
      })
    }
  }, ".card-template_type_default");
  return card.generateCard();
}

const popupBigPicture = new PopupWithImage(".popup_type_big-picture");
popupBigPicture.setEventListeners();

const api = new Api(optionsApi)

const defaultCardList = new Section(
  {
    renderer: (cardItem) => {
      const cardElement = createNewCard(cardItem)
      defaultCardList.addItem(cardElement);
    },
  },
  cardElements
);

api.getAllCards()
.then((cards) => {
  defaultCardList.renderItems(cards);
})


const mestoUserInfo = new UserInfo(profileName, profileDescription, profileAvatar);

  api.getProfileInfo()
  .then((info) => {
  profileName.textContent = info.name
 profileDescription.textContent = info.about
 profileAvatar.src = info.avatar
  })


  const popupEdit = new PopupWithForm(".popup_type_edit-profile", {
    submitFormCallback: (data) => {
      
      api.editProfileInfo(
        { name: data.name,
        about: data.about })
  
      .then((res) => {
        mestoUserInfo.setUserInfo(res.name, res.about)
      })

     
  
      popupEdit.close();
    },
  });
  
  popupEdit.setEventListeners();
  
  const formEditNew = new FormValidator(validationConfig, formEdit);
  formEditNew.enableValidation();
  
  popupEditButton.addEventListener("click", () => {
    popupEdit.open();
  
    api.getProfileInfo()
    .then((info) => {
    inputProfileName.value = info.name
    inputAbout.value = info.about
    })
  
  });

  
  const popupAvatar = new PopupWithForm('.popup_type_edit-avatar', {
    submitFormCallback: (data) => {

      api.editProfileAvatar(data)
      .then((res) => {
  
        mestoUserInfo.setUserAvatar(res.avatar)
      })
     

      popupAvatar.close();
    }
  })

 
  popupAvatar.setEventListeners()

  profileAvatar.addEventListener('click', () => {
    popupAvatar.open()
  })


const popupAdd = new PopupWithForm(".popup_type_add-card", {
  submitFormCallback: (data) => {

    api.addCard({
      name: data.name,
      link: data.link    
    })

    .then((newCard) => {
      const card = createNewCard(newCard);
 
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

import PopupWithConfirmation from "../components/PopupWithConfirmation";

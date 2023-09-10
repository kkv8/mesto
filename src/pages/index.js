import '../pages/index.css';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'


import {
  popupList, 
  buttonsClose, 
  buttonAdd, 
  cardForm, 
  popupEditButton, 
  formEdit, 
  initialCards, 
  cardElements,
  validationConfig,
  popupAddCard,
  inputTitle,
  inputLink
 } from '../utils/constants.js'

  import {

    handleCardClick,

    closePopup,
    openPopup,
    handleEditButtonClick,
    handleProfileFormSubmit,
    createNewCard
  } from '../utils/utils.js'

  import Section from '../components/Section.js'

  ////////
//   const cardElement = createNewCard(item,
//     ".card-template_type_default",
//     handleCardClick)

// this.addItem(cardElement)
///////////

const defaultCardList = new Section (
  {data: initialCards,
  renderer: (cardItem) => {
    const cardElement = createNewCard(cardItem,
      ".card-template_type_default",
      handleCardClick)

      defaultCardList.addItem(cardElement)

  } }, 
  cardElements)
defaultCardList.renderItems()


popupList.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});

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
  // cardForm.reset();
  // newCard.generateCard()
  defaultCardList.addItem(newCard)


  closePopup(popupAddCard);
});

const formEditNew = new FormValidator(validationConfig, formEdit);

const formAddNew = new FormValidator(validationConfig, cardForm);

popupEditButton.addEventListener("click", handleEditButtonClick);
formEdit.addEventListener("submit", handleProfileFormSubmit);


formEditNew.enableValidation();

formAddNew.enableValidation();
import openPopup from "./index.js";
class Card {
  constructor(name, link, alt) {
    this._name = name;
    this._link = link;
    this._alt = alt;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector("#card-template")
      .content.querySelector(".element")
      .cloneNode(true);

    return cardTemplate;
  }

  _setData() {
    this._cardElement.querySelector(".element__title").textContent = this._name;
    const cardElementImage = this._cardElement.querySelector(".element__image");
    cardElementImage.src = this._link;
    cardElementImage.alt = this._alt;
    return this._cardElement;
  }

  _setListeners() {
    this._cardElement
      .querySelector(".trash-icon")
      .addEventListener("click", () => {
        this._cardElement.remove();
      });

    const cardLike = this._cardElement.querySelector(".heart-icon");
    cardLike.addEventListener("click", () => {
      cardLike.classList.toggle("heart-icon_active");
    });
  }

  _handlePopupImageClick() {
    this._cardElement
      .querySelector(".element__image")
      .addEventListener("click", () => {
        const popupBigPicture = document.querySelector(
          ".popup_type_big-picture"
        );
        const popupBigPictureImage =
          popupBigPicture.querySelector(".big-picture");

        openPopup(popupBigPicture);
        popupBigPictureImage.src = this._link;
        popupBigPicture.querySelector(".big-picture-title").textContent =
          this._name;
        popupBigPictureImage.alt = this._alt;
      });
  }

  generateCard() {
    this._cardElement = this._getTemplate(); 
    this._setData(); 
    this._setListeners(); 
    this._handlePopupImageClick();
    return this._cardElement; 
  }
}

export default Card;

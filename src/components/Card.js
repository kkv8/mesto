class Card {
  constructor({ name, link, alt }, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._alt = alt;
    this._templateSelector = templateSelector;
    this._cardElement = this._getTemplate();
    this._cardElementImage = this._cardElement.querySelector(".element__image");
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardTemplate;
  }

  _setData() {
    this._cardElement.querySelector(".element__title").textContent = this._name;
    this._cardElementImage.src = this._link;
    this._cardElementImage.alt = this._alt;
    return this._cardElement;
  }

  _setListeners() {
    this._cardElement
      .querySelector(".trash-icon")
      .addEventListener("click", () => {
        this._cardElement.remove();
        this._cardElement = null;
      });

    const cardLike = this._cardElement.querySelector(".heart-icon");
    cardLike.addEventListener("click", () => {
      cardLike.classList.toggle("heart-icon_active");
    });

    this._cardElementImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link, this._alt);
    });
  }

  generateCard() {
    this._setData();
    this._setListeners();
    return this._cardElement;
  }
}

export default Card;

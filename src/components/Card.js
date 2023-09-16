class Card {
  constructor({ name, link}, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._cardElement = this._getTemplate();
    this._cardElementImage = this._cardElement.querySelector(".element__image");
    this._handleCardClick = handleCardClick;
    this._likeButton = this._cardElement.querySelector(".heart-icon");
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
    this._cardElementImage.alt = this._name;
    return this._cardElement;
  }

  _handleDeleteButtonClick() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle("heart-icon_active");
  }

  _setListeners() {
    this._cardElement
      .querySelector(".trash-icon")
      .addEventListener("click", () => {
        this._handleDeleteButtonClick()
      });

    this._likeButton.addEventListener("click", () => {
     this._handleLikeClick()
    });

    this._cardElementImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._setData();
    this._setListeners();
    return this._cardElement;
  }
}

export default Card;

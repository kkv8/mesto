class Card {
  constructor({ name, link, _id}, templateSelector, handleCardClick, handleDelete) {
   
    this._name = name;
    this._link = link;
    this._id = _id;
    this._handleDelete = handleDelete;
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

  _handleClickBtnDelete() {
    // this._cardElement.remove();
    // this._cardElement = null;
    this._handleDelete(this._id)
  }

  remove () {
    this._cardElement.remove();
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle("heart-icon_active");
  }

  _setListeners() {
    this._cardElement
      .querySelector(".trash-icon")
      .addEventListener("click", () => {
        this._handleClickBtnDelete()
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

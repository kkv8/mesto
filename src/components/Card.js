class Card {
  constructor(
    {
      data,
      handleCardClick,
      handleTrashIconClick,
      handleLikeClick,
      handleLikeDelete,
      userId,
    },
    templateSelector
  ) {
    this._handleTrashIconClick = handleTrashIconClick;
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._userId = userId;
    this._handleLikeClick = handleLikeClick;
    this._templateSelector = templateSelector;
    this._handleLikeDelete = handleLikeDelete;
    this._cardElement = this._getTemplate();
    this._cardElementImage = this._cardElement.querySelector(".element__image");
    this._handleCardClick = handleCardClick;
    this._likeButton = this._cardElement.querySelector(".heart-icon");
    this._likeCounter = this._cardElement.querySelector(".like-counter");
    this._trashIcon = this._cardElement.querySelector(".trash-icon");
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

  remove() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  checkLike() {
    this._likes.forEach((like) => {
      if (like._id === this._userId) {
        this._likeButton.classList.add("heart-icon_active");
      }
    });
  }

  _handleDeleteClick() {
    this._handleTrashIconClick(this._id);
  }

  toggleLike(data) {
    this._likes = data.likes;
    this._likeCounter.textContent = this._likes.length;
    this._likeButton.classList.toggle("heart-icon_active");
  }

  _setListeners() {
    this._trashIcon.addEventListener("click", () => {
      this._handleDeleteClick();
    });
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("heart-icon_active")) {
        this._handleLikeDelete(this._id);
      } else {
        this._handleLikeClick(this._id);
      }
    });

    this._cardElementImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._setData();
    this.checkLike();
    this._likeCounter.textContent = this._likes.length;
    this._setListeners();

    if (this._owner._id !== this._userId) {
      this._trashIcon.remove();
    }

    return this._cardElement;
  }
}

export default Card;

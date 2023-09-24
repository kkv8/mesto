import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitFormCallback }) {
    super(popupSelector);
    this._submitFormCallBack = submitFormCallback;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = Array.from(this._popup.querySelectorAll(".popup__input"));
    this._submitButton = this._form.querySelector('.popup__save-button');
  }

  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._submitFormCallBack(this._getInputValues())   
          
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  setSubmitButtonText(text) {
    this._submitButton.textContent = text;
}
}

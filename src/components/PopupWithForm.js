import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitFormCallback }) {
    super(popupSelector);
    this._submitFormCallBack = submitFormCallback;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = Array.from(this._popup.querySelectorAll(".popup__input"));
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      this._submitFormCallBack(this._getInputValues(), evt);
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

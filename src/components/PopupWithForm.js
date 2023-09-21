import Popup from "./Popup.js";
import UserInfo from "./UserInfo.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitFormCallback }) {
    super(popupSelector);
    this._submitFormCallBack = submitFormCallback;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = Array.from(this._popup.querySelectorAll(".popup__input"));
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
}

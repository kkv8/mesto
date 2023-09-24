import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { submitFormCallback }) {
    super(popupSelector);
    this._submitFormCallBack = submitFormCallback;
    this._form = this._popup.querySelector(".popup__form");
  }




  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._submitFormCallBack()    
    });
  }

}
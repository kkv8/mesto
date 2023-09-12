import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector)
        this._handleEscClose = this._handleEscClose.bind(this);
        this._popup = document.querySelector(this._popupSelector)
    }

    open (name, link) {
   
        this._popupImage = this._popup.querySelector(".big-picture")
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popup.querySelector(".big-picture-title").textContent = name;
        super.open()
    }

 
    
}

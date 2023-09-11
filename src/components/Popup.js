class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector
        this._handleEscClose = this._handleEscClose.bind(this);
        this._popup = document.querySelector(this._popupSelector)
    }


    _handleEscClose (evt) {
        if (evt.key === "Escape") {
              
                  this.close()
                }
    }
   
    open () {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose )
    }

    close () {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose )
    }

    setEventListeners () {
        const deleteButton = this._popup.querySelector(".popup__close-button");
        this._popup.addEventListener('click', (evt) => {
            if( (evt.target === this._popup) || (evt.target === deleteButton) ){
                this.close();
              }
        })
        
    }

 }


export default Popup
class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._form = formElement;
    this._inputSelector = config.inputSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(config.submitButtonSelector);
  }

  _showInputError(input) {
    input.classList.add(this._inputErrorClass);
    const span = this._form.querySelector(`.${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    input.classList.remove(this._inputErrorClass);
    const span = this._form.querySelector(`.${input.id}-error`);
    span.textContent = "";
    span.classList.remove(this._errorClass);
  }

  _isValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._inputs.some((input) => !input.validity.valid);
  }

  _enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _disableSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._form.addEventListener("reset", () => {
      this._disableSubmitButton();
    });

    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._isValid(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;

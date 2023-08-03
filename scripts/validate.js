function enableValidation(config) {
  const showInputError = (form, input) => {
    input.classList.add(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(config.errorClass);
  };

  const hideInputError = (form, input) => {
    input.classList.remove(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`);
    span.textContent = "";
    span.classList.remove(config.errorClass);
  };

  const isValid = (form, input) => {
    if (!input.validity.valid) {
      showInputError(form, input);
    } else {
      hideInputError(form, input);
    }
  };

  const hasInvalidInput = (inputs) => {
    return inputs.some((input) => !input.validity.valid);
  };

  const enableSubmitButton = (button) => {
    button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
  }

  const disableSubmitButton = (button) => {
    button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
  }

  const toggleButtonState = (inputs, button) => {
    if (hasInvalidInput(inputs)) {
      disableSubmitButton(button)
    } else {
     enableSubmitButton(button)
    }
  };

  const setEventListeners = (form) => {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);
    toggleButtonState(inputs, button);
    form.addEventListener('reset', () => {
      disableSubmitButton(button)
    })
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        isValid(form, input);
        toggleButtonState(inputs, button);
      });
    });
  };

  const forms = Array.from(document.querySelectorAll(config.formSelector));

  forms.forEach((form) => {
    setEventListeners(form);
  });
}
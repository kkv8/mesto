/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/Card.js":
/*!*************************!*\
  !*** ./scripts/Card.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Card {\r\n  constructor({ name, link, alt }, templateSelector, handleCardClick) {\r\n    this._name = name;\r\n    this._link = link;\r\n    this._alt = alt;\r\n    this._templateSelector = templateSelector;\r\n    this._cardElement = this._getTemplate();\r\n    this._cardElementImage = this._cardElement.querySelector(\".element__image\");\r\n    this._handleCardClick = handleCardClick;\r\n  }\r\n\r\n  _getTemplate() {\r\n    const cardTemplate = document\r\n      .querySelector(this._templateSelector)\r\n      .content.querySelector(\".element\")\r\n      .cloneNode(true);\r\n\r\n    return cardTemplate;\r\n  }\r\n\r\n  _setData() {\r\n    this._cardElement.querySelector(\".element__title\").textContent = this._name;\r\n    this._cardElementImage.src = this._link;\r\n    this._cardElementImage.alt = this._alt;\r\n    return this._cardElement;\r\n  }\r\n\r\n  _setListeners() {\r\n    this._cardElement\r\n      .querySelector(\".trash-icon\")\r\n      .addEventListener(\"click\", () => {\r\n        this._cardElement.remove();\r\n        this._cardElement = null;\r\n      });\r\n\r\n    const cardLike = this._cardElement.querySelector(\".heart-icon\");\r\n    cardLike.addEventListener(\"click\", () => {\r\n      cardLike.classList.toggle(\"heart-icon_active\");\r\n    });\r\n\r\n    this._cardElementImage.addEventListener(\"click\", () => {\r\n      this._handleCardClick(this._name, this._link, this._alt);\r\n    });\r\n  }\r\n\r\n  generateCard() {\r\n    this._setData();\r\n    this._setListeners();\r\n    return this._cardElement;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://mesto/./scripts/Card.js?");

/***/ }),

/***/ "./scripts/FormValidator.js":
/*!**********************************!*\
  !*** ./scripts/FormValidator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FormValidator {\r\n  constructor(config, formElement) {\r\n    this._config = config;\r\n    this._form = formElement;\r\n    this._inputSelector = config.inputSelector;\r\n    this._inactiveButtonClass = config.inactiveButtonClass;\r\n    this._inputErrorClass = config.inputErrorClass;\r\n    this._errorClass = config.errorClass;\r\n    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));\r\n    this._submitButton = this._form.querySelector(config.submitButtonSelector);\r\n  }\r\n\r\n  _showInputError(input) {\r\n    input.classList.add(this._inputErrorClass);\r\n    const span = this._form.querySelector(`.${input.id}-error`);\r\n    span.textContent = input.validationMessage;\r\n    span.classList.add(this._errorClass);\r\n  }\r\n\r\n  _hideInputError(input) {\r\n    input.classList.remove(this._inputErrorClass);\r\n    const span = this._form.querySelector(`.${input.id}-error`);\r\n    span.textContent = \"\";\r\n    span.classList.remove(this._errorClass);\r\n  }\r\n\r\n  _isValid(input) {\r\n    if (!input.validity.valid) {\r\n      this._showInputError(input);\r\n    } else {\r\n      this._hideInputError(input);\r\n    }\r\n  }\r\n\r\n  _hasInvalidInput() {\r\n    return this._inputs.some((input) => !input.validity.valid);\r\n  }\r\n\r\n  _enableSubmitButton() {\r\n    this._submitButton.classList.remove(this._inactiveButtonClass);\r\n    this._submitButton.disabled = false;\r\n  }\r\n\r\n  _disableSubmitButton() {\r\n    this._submitButton.classList.add(this._inactiveButtonClass);\r\n    this._submitButton.disabled = true;\r\n  }\r\n\r\n  _toggleButtonState() {\r\n    if (this._hasInvalidInput()) {\r\n      this._disableSubmitButton();\r\n    } else {\r\n      this._enableSubmitButton();\r\n    }\r\n  }\r\n\r\n  _setEventListeners() {\r\n    this._toggleButtonState();\r\n\r\n    this._form.addEventListener(\"reset\", () => {\r\n      this._disableSubmitButton();\r\n    });\r\n\r\n    this._inputs.forEach((input) => {\r\n      input.addEventListener(\"input\", () => {\r\n        this._isValid(input);\r\n        this._toggleButtonState();\r\n      });\r\n    });\r\n  }\r\n\r\n  enableValidation() {\r\n    this._setEventListeners();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);\r\n\n\n//# sourceURL=webpack://mesto/./scripts/FormValidator.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openPopup)\n/* harmony export */ });\n/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.js */ \"./scripts/Card.js\");\n/* harmony import */ var _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidator.js */ \"./scripts/FormValidator.js\");\n\r\n\r\n\r\nconst popupEditButton = document.querySelector(\".profile__edit-button\");\r\nconst popupEditProfile = document.querySelector(\".popup_type_edit-profile\");\r\nconst popupAddCard = document.querySelector(\".popup_type_add-card\");\r\nconst inputProfileName = document.querySelector(\".popup__input_type_name\");\r\nconst profileName = document.querySelector(\".profile__name\");\r\nconst inputAbout = document.querySelector(\".popup__input_type_about\");\r\nconst profileDescription = document.querySelector(\".profile__description\");\r\nconst formEdit = document.querySelector(\".edit-form\");\r\nconst buttonAdd = document.querySelector(\".profile__add-button\");\r\n\r\nconst buttonsClose = Array.from(\r\n  document.querySelectorAll(\".popup__close-button\")\r\n);\r\nconst cardElements = document.querySelector(\".elements\");\r\nconst cardForm = document.querySelector(\".card-form\");\r\nconst inputLink = document.querySelector(\".popup__input_type_link\");\r\nconst inputTitle = document.querySelector(\".popup__input_type_title\");\r\n\r\nconst validationConfig = {\r\n  formSelector: \".popup__form\",\r\n  inputSelector: \".popup__input\",\r\n  submitButtonSelector: \".popup__button\",\r\n  inactiveButtonClass: \"popup__button_disabled\",\r\n  inputErrorClass: \"popup__input_type_error\",\r\n  errorClass: \"popup__error_visible\",\r\n};\r\n\r\nconst popupList = Array.from(document.querySelectorAll(\".popup\"));\r\npopupList.forEach((popup) => {\r\n  popup.addEventListener(\"click\", function (evt) {\r\n    if (evt.target === popup) {\r\n      closePopup(popup);\r\n    }\r\n  });\r\n});\r\n\r\nfunction createNewCard(obj, template, listener) {\r\n  const card = new _Card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](obj, template, listener);\r\n  return card.generateCard()\r\n}\r\n\r\ninitialCards.forEach(function (item) {\r\n  const card = createNewCard(\r\n    item,\r\n    \".card-template_type_default\",\r\n    handleCardClick\r\n  );\r\n  \r\n  renderCard(card, cardElements);\r\n});\r\n\r\nfunction renderCard(card, container) {\r\n  container.prepend(card);\r\n}\r\n\r\nfunction openPopup(popup) {\r\n  popup.classList.add(\"popup_opened\");\r\n  document.addEventListener(\"keydown\", handleClosePopupByEsc);\r\n}\r\n\r\nfunction closePopup(popup) {\r\n  popup.classList.remove(\"popup_opened\");\r\n  document.removeEventListener(\"keydown\", handleClosePopupByEsc);\r\n}\r\n\r\nfunction handleClosePopupByEsc(evt) {\r\n  if (evt.key === \"Escape\") {\r\n    const popupOpened = document.querySelector(\".popup_opened\");\r\n    closePopup(popupOpened);\r\n  }\r\n}\r\n\r\nfunction handleProfileFormSubmit(evt) {\r\n  evt.preventDefault();\r\n  profileName.textContent = inputProfileName.value;\r\n  profileDescription.textContent = inputAbout.value;\r\n  closePopup(popupEditProfile);\r\n}\r\n\r\nbuttonsClose.forEach(function (item) {\r\n  const popup = item.closest(\".popup\");\r\n  item.addEventListener(\"click\", function () {\r\n    closePopup(popup);\r\n  });\r\n});\r\n\r\nbuttonAdd.addEventListener(\"click\", function () {\r\n  openPopup(popupAddCard);\r\n});\r\n\r\ncardForm.addEventListener(\"submit\", (evt) => {\r\n  evt.preventDefault();\r\n  const newCard = createNewCard(\r\n    { name: inputTitle.value, link: inputLink.value, alt: inputTitle.value },\r\n    \".card-template_type_default\",\r\n    handleCardClick\r\n  );\r\n  cardForm.reset();\r\n\r\n  renderCard(newCard, cardElements);\r\n\r\n  closePopup(popupAddCard);\r\n});\r\n\r\nconst handleEditButtonClick = () => {\r\n  openPopup(popupEditProfile);\r\n  inputProfileName.value = profileName.textContent;\r\n  inputAbout.value = profileDescription.textContent;\r\n};\r\n\r\nfunction handleCardClick(name, link, alt) {\r\n  const popupBigPicture = document.querySelector(\".popup_type_big-picture\");\r\n  const popupBigPictureImage = popupBigPicture.querySelector(\".big-picture\");\r\n  openPopup(popupBigPicture);\r\n  popupBigPictureImage.src = link;\r\n  popupBigPicture.querySelector(\".big-picture-title\").textContent = name;\r\n  popupBigPictureImage.alt = name;\r\n}\r\n\r\npopupEditButton.addEventListener(\"click\", handleEditButtonClick);\r\nformEdit.addEventListener(\"submit\", handleProfileFormSubmit);\r\n\r\nconst formEditNew = new _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](validationConfig, formEdit);\r\nformEditNew.enableValidation();\r\nconst formAddNew = new _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](validationConfig, cardForm);\r\nformAddNew.enableValidation();\n\n//# sourceURL=webpack://mesto/./scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;
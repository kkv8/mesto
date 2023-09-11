export const popupEditButton = document.querySelector(".profile__edit-button");
export const popupEditProfile = document.querySelector(".popup_type_edit-profile");
// export const popupAddCard = document.querySelector(".popup_type_add-card");
export const inputProfileName = document.querySelector(".popup__input_type_name");
export const profileName = document.querySelector(".profile__name");
export const inputAbout = document.querySelector(".popup__input_type_about");
export const profileDescription = document.querySelector(".profile__description");
export const formEdit = document.querySelector(".edit-form");
export const buttonAdd = document.querySelector(".profile__add-button");
export const initialCards = [
    {
      name: "Гас и Флейк",
      link: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
      alt: "белая собака и рыжая кошка лежат на траве",
    },
    {
      name: "Дэйзи",
      link: "https://images.unsplash.com/photo-1618718547092-8c8927bb8d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "щенок засыпает в голубом пледе",
    },
    {
      name: "Самсон",
      link: "https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "собака сидит среди желтых цветов",
    },
    {
      name: "Лаки",
      link: "https://images.unsplash.com/photo-1578362613743-cb09ce05275d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      alt: "щенок овчарки отдыхает",
    },
    {
      name: "Рокси",
      link: "https://images.unsplash.com/photo-1503595855261-9418f48a991a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      alt: "черная собака зевает",
    },
    {
      name: "Ханни",
      link: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      alt: "щенок в цветном ошейнике улыбается",
    },
  ];

export const buttonsClose = Array.from(
  document.querySelectorAll(".popup__close-button")
);
export const cardElements = document.querySelector(".elements");
export const cardForm = document.querySelector(".card-form");
export const inputLink = document.querySelector(".popup__input_type_link");
export const inputTitle = document.querySelector(".popup__input_type_title");

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const popupList = Array.from(document.querySelectorAll(".popup"));
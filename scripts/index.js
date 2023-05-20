let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup')
let popupName = document.querySelector('.popup__input_type_name')
let profileName = document.querySelector('.profile__name')
let popupAbout = document.querySelector('.popup__input_type_about')
let profileDescription = document.querySelector('.profile__description')
let closeButton = document.querySelector('.popup__close-button')
let profileForm = document.querySelector('.profile-form')

function openPopup() {
    popup.classList.add('popup_opened')
    popupName.value = profileName.textContent
    popupAbout.value = profileDescription.textContent
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function savePopup (evt) {
    evt.preventDefault()
    profileName.textContent = popupName.value
    profileDescription.textContent = popupAbout.value
    closePopup()
}

editButton.addEventListener('click', openPopup) 
closeButton.addEventListener ('click', closePopup)
profileForm.addEventListener ('submit', savePopup)
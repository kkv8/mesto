//variable declaration
let editButton = document.querySelector('.edit-button');
let popup = document.querySelector('.popup')
let popupName = document.querySelector('.popup__name')
let profileName = document.querySelector('.profile__name')
let popupAbout = document.querySelector('.popup__about')
let profileDescription = document.querySelector('.profile__description')

//edit button
function openPopup() {
    popup.classList.add('popup_opened')
    popupName.value = profileName.textContent
    popupAbout.value = profileDescription.textContent
}

editButton.addEventListener('click', openPopup) 

//save button
let saveButton = document.querySelector('.save-button')

function savePopup (evt) {
    evt.preventDefault()
    profileName.textContent = popupName.value
    profileDescription.textContent = popupAbout.value
    popup.classList.remove('popup_opened')
    
}

popup.addEventListener ('submit', savePopup)

//close button
let closeButton = document.querySelector('.close-button')

function closePopup() {
    popup.classList.remove('popup_opened')
    popupName.value = profileName.textContent
    popupAbout.value = profileDescription.textContent
}

closeButton.addEventListener ('click', closePopup)



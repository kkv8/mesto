let editButton = document.querySelector('.profile__edit-button');
let popupEdit = document.querySelector('.popup_type_edit-profile')
let popupAdd = document.querySelector('.popup_type_add-card')
let popupProfileName = document.querySelector('.popup__input_type_name')
let profileName = document.querySelector('.profile__name')
let popupAbout = document.querySelector('.popup__input_type_about')
let profileDescription = document.querySelector('.profile__description')
let editForm = document.querySelector('.edit-form')
const addButton = document.querySelector('.profile__add-button')

const initialCards = [
  {
    name: 'Гас и Флейк',
    link: 'https://ltdfoto.ru/images/2023/07/19/elements-1.jpg',
    alt: 'белая собака и рыжая кошка лежат на траве'
  },
  {
    name: 'Дэйзи',
    link: 'https://ltdfoto.ru/images/2023/07/19/elements-2.jpg',
    alt: 'щенок засыпает в голубом пледе'
  },
  {
    name: 'Самсон',
    link: 'https://ltdfoto.ru/images/2023/07/19/elements-3.jpg',
    alt: 'собака сидит среди желтых цветов'
  },
  {
    name: 'Лаки',
    link: 'https://ltdfoto.ru/images/2023/07/19/elements-4.jpg',
    alt: 'щенок овчарки отдыхает'
  },
  {
    name: 'Рокси',
    link: 'https://ltdfoto.ru/images/2023/07/19/elements-5.jpg',
    alt: 'черная собака зевает'
  },
  {
    name: 'Ханни',
    link: 'https://ltdfoto.ru/images/2023/07/19/elements-6.jpg',
    alt: 'щенок в цветном ошейнике улыбается'
  }
]; 

const closeButtons = Array.from(document.querySelectorAll('.popup__close-button'))
const cardElements = document.querySelector('.elements')
const cardTemplate = document.querySelector('#card-template').content
const cardForm = document.querySelector('.card-form')
const popupLink = document.querySelector('.popup__input_type_link')
const popupTitle = document.querySelector('.popup__input_type_title')
const popupBigPicture = document.querySelector('.popup_type_big-picture')


function openPopupEdit() {
    popupEdit.classList.add('popup_opened')
    popupProfileName.value = profileName.textContent
    popupAbout.value = profileDescription.textContent
}

function openPopupAdd() {
  popupAdd.classList.add('popup_opened')
}

function savePopup (evt) {
  evt.preventDefault()
  profileName.textContent = popupProfileName.value
  profileDescription.textContent = popupAbout.value
  popupEdit.classList.remove('popup_opened')
}

function deleteCard (evt) {
  const element = evt.target.closest('.element')
  element.remove()
}

function like () {
  const heartIcons = Array.from(document.querySelectorAll('.heart-icon'))
  heartIcons.forEach(function(item) {
    item.addEventListener ('click', function() {
      item.classList.add('heart-icon_active')
    })
  })
} 

function renderItem (array) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true) 
     cardElement.querySelector('.element__title').textContent = array.name
     cardElement.querySelector('.element__image').src = array.link
     cardElement.querySelector('.element__image').alt = array.alt
     cardElements.prepend(cardElement)
     cardElement.querySelector('.trash-icon').addEventListener('click', deleteCard)
      
     like ()
     
     const cardImage = cardElement.querySelector('.element__image')
     cardImage.addEventListener ('click', function () {
      popupBigPicture.classList.add('popup_opened')
      popupBigPicture.querySelector('.big-picture').src = array.link
      popupBigPicture.querySelector('.big-picture-title').textContent = array.name
      popupBigPicture.style.background = 'rgba(0, 0, 0, 0.8)'
    })
    
}

closeButtons.forEach(function(item) {
  item.addEventListener('click', function () {
    const popup = item.closest('.popup')
    popup.classList.remove('popup_opened')
  })
 })


addButton.addEventListener('click', openPopupAdd)

cardForm.addEventListener ('submit', (evt) => {
  evt.preventDefault ()
   const newCard = {
    name: popupTitle.value,
    link: popupLink.value 
  }
   renderItem(newCard) 
   popupAdd.classList.remove('popup_opened')
})










initialCards.forEach(function (item) {
 renderItem(item)
   
  })

  editButton.addEventListener('click', openPopupEdit) 
    editForm.addEventListener ('submit', savePopup)




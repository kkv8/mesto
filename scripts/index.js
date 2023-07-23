const popupEditButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile')
const popupAddCard = document.querySelector('.popup_type_add-card')
const inputProfileName = document.querySelector('.popup__input_type_name')
const profileName = document.querySelector('.profile__name')
const inputAbout = document.querySelector('.popup__input_type_about')
const profileDescription = document.querySelector('.profile__description')
const formEdit = document.querySelector('.edit-form')
const buttonAdd = document.querySelector('.profile__add-button')

const initialCards = [
  {
    name: 'Гас и Флейк',
    link: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80',
    alt: 'белая собака и рыжая кошка лежат на траве'
  },
  {
    name: 'Дэйзи',
    link: 'https://images.unsplash.com/photo-1618718547092-8c8927bb8d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'щенок засыпает в голубом пледе'
  },
  {
    name: 'Самсон',
    link: 'https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    alt: 'собака сидит среди желтых цветов'
  },
  {
    name: 'Лаки',
    link: 'https://images.unsplash.com/photo-1578362613743-cb09ce05275d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    alt: 'щенок овчарки отдыхает'
  },
  {
    name: 'Рокси',
    link: 'https://images.unsplash.com/photo-1503595855261-9418f48a991a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    alt: 'черная собака зевает'
  },
  {
    name: 'Ханни',
    link: 'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    alt: 'щенок в цветном ошейнике улыбается'
  }
]; 

const buttonsClose = Array.from(document.querySelectorAll('.popup__close-button'))
const cardElements = document.querySelector('.elements')
const cardTemplate = document.querySelector('#card-template').content
const cardForm = document.querySelector('.card-form')
const inputLink = document.querySelector('.popup__input_type_link')
const inputTitle = document.querySelector('.popup__input_type_title')
const popupBigPicture = document.querySelector('.popup_type_big-picture')

function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

function savePopup (evt) {
  evt.preventDefault()
  profileName.textContent = inputProfileName.value
  profileDescription.textContent = inputAbout.value
  closePopup(popupEditProfile)
}

function deleteCard (evt) {
  const element = evt.target.closest('.element')
  element.remove()
}

function like(evt) {
  evt.target.classList.toggle('heart-icon_active')
} 

function renderCard(card, container) {
  container.prepend(card);
}

function createCard (array) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true) 
  const cardElementImage = cardElement.querySelector('.element__image')
     cardElement.querySelector('.element__title').textContent = array.name
     cardElementImage.src = array.link
     cardElementImage.alt = array.alt
     cardElement.querySelector('.trash-icon').addEventListener('click', deleteCard)
      
     const cardLike = cardElement.querySelector('.heart-icon');
    cardLike.addEventListener('click', like); 
     
     const cardImage = cardElement.querySelector('.element__image')
     cardImage.addEventListener ('click', function () {
      openPopup(popupBigPicture)
      popupBigPicture.querySelector('.big-picture').src = array.link
      popupBigPicture.querySelector('.big-picture-title').textContent = array.name
      popupBigPicture.querySelector('.big-picture').alt = array.alt
      popupBigPicture.style.background = 'rgba(0, 0, 0, 0.8)'
    })
    return cardElement
    
}

buttonsClose.forEach(function(item) {
  item.addEventListener('click', function () {
    const popup = item.closest('.popup')
    closePopup(popup)
  })
 })

buttonAdd.addEventListener('click', function() {
  openPopup(popupAddCard)
})

cardForm.addEventListener ('submit', (evt) => {
  evt.preventDefault ()
   const newCard = {
    name: inputTitle.value,
    link: inputLink.value,
  alt: inputTitle.value
  }

inputTitle.value=''
inputLink.value=''

   renderCard(createCard(newCard), cardElements)
   closePopup(popupAddCard)
   
})

initialCards.forEach(function (item) {
  const card = createCard(item)
  renderCard(card, cardElements)
   })

  popupEditButton.addEventListener('click', function () {
    openPopup(popupEditProfile)
    inputProfileName.value = profileName.textContent
    inputAbout.value = profileDescription.textContent

  }) 
    formEdit.addEventListener ('submit', savePopup)

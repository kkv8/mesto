
// GET https://mesto.nomoreparties.co/v1/cohort-75/cards 
// Токен: 7b34e9f6-1b85-4b4d-aa61-8ed0d9a933c7
// DELETE https://mesto.nomoreparties.co/v1/cohortId/cards/cardId
export default class Api {
    constructor({ url, headers }) {
        this._url = url
        this._headers = headers
    }

    //получить все карточки 
    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
    })

    .then((res) => {
        if(res.ok) {
            return res.json()
        }

        throw new Error('Что-то пошло не так')
    })

    .catch((err) => {
        console.log(err)
    })

    }

    //добавить карточку
    addCard(cardsData) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(cardsData)
    })

    .then((res) => {
        if(res.ok) {
            return res.json()
        }

        throw new Error('Что-то пошло не так')
    })

    .catch((err) => {
        console.log(err)
    })
    }

// DELETE https://mesto.nomoreparties.co/v1/cohortId/cards/cardId
    //удаление карточки 
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
    })

    .then((res) => {
        if(res.ok) {
            return res.json()
        }

        throw new Error('Что-то пошло не так')
    })

    .catch((err) => {
        console.log(err)
    })
    }

////////редакт инф о пользователе 
// GET https://nomoreparties.co/v1/cohortId/users/me 
    getProfileInfo() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers
    })

    .then((res) => {
        if(res.ok) {
            return res.json()
        }

        throw new Error('Что-то пошло не так')
    })

    .catch((err) => {
        console.log(err)
    })

    }


    // PATCH https://mesto.nomoreparties.co/v1/cohortId/users/me 

    editProfileInfo(userData) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(userData)
    })

    .then((res) => {
        if(res.ok) {
            return res.json()
        }

        throw new Error('Что-то пошло не так')
    })

    .catch((err) => {
        console.log(err)
    })

    }
    // PATCH https://mesto.nomoreparties.co/v1/cohortId/users/me/avatar

    editProfileAvatar(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(avatar)
    })

    .then((res) => {
        if(res.ok) {
            return res.json()
        }

        throw new Error('Что-то пошло не так')
    })

    .catch((err) => {
        console.log(err)
    })

    }
}
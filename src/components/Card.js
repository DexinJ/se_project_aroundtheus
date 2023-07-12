export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._image = this._element.querySelector(".card__image");
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector(".card__text").textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("card__like-button_status_checked");
    });
    this._deleteButton.addEventListener("click", () => {
      this._element.remove();
    });
    this._image.addEventListener("click", () => {
      this._handleOpenModal();
    });
  }

  _handleOpenModal() {
    this._handleCardClick({ name: this._name, link: this._link });
  }
}

export default class Card {
  constructor(
    data,
    cardSelector,
    id,
    handleCardClick,
    handleCardDelete,
    handleLike
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._owned = data.owner._id === id;
    this._id = data._id;
    this._handleCardDelete = handleCardDelete;
    this._likes = data.likes;
    this._handleLike = handleLike;
    this._userId = id;
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
    this._likeNumber = this._element.querySelector(".card__like-number");
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._renderLikes();
    this._element.querySelector(".card__text").textContent = this._name;
    if (!this._owned) {
      this._deleteButton.remove();
    }
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLike(this._id);
    });
    if (this._owned) {
      this._deleteButton.addEventListener("click", () => {
        this._handleCardDelete(this._id);
      });
    }
    this._image.addEventListener("click", () => {
      this._handleOpenModal();
    });
  }

  _handleOpenModal() {
    this._handleCardClick({ name: this._name, link: this._link });
  }

  remove() {
    this._element.remove();
  }

  likedByOwner() {
    return this._likes.some((like) => like._id === this._userId);
  }

  setLikes(likes) {
    this._likes = likes;
    this._renderLikes();
  }

  _renderLikes() {
    this._likeNumber.textContent = this._likes.length;
    if (this.likedByOwner()) {
      this._likeButton.classList.add("card__like-button_status_checked");
    } else {
      this._likeButton.classList.remove("card__like-button_status_checked");
    }
  }
}

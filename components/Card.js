import { closeByEscape } from "../utils/utils.js";
const pictureModal = document.querySelector("#pictureModal");
const pictureImage = pictureModal.querySelector(".modal__image");
const pictureCaption = pictureModal.querySelector(".modal__caption");
const cardGallery = document.querySelector(".gallery__cards");

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
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
      cardGallery.removeChild(this._element);
    });
    this._image.addEventListener("click", () => {
      this._handleOpenModal();
    });
  }

  _handleOpenModal() {
    pictureImage.src = this._link;
    pictureImage.alt = this._name;
    pictureCaption.textContent = this._name;
    pictureModal.classList.add("modal_opened");
    document.addEventListener("keydown", closeByEscape);
  }

  _handleCloseModal() {
    pictureImage.src = "";
    pictureImage.alt = "";
    pictureCaption.textContent = "";
    pictureModal.classList.remove("modal_opened");
    document.removeEventListener("keydown", closeByEscape);
  }
}

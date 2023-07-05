import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
};

const cardGallery = document.querySelector(".gallery__cards");
const profileForm = document.forms["profile-form"];
const addForm = document.forms["add-form"];
export const profileFormValidator = new FormValidator(
  validationSettings,
  profileForm
);
export const addFormValidator = new FormValidator(validationSettings, addForm);

function displayCards() {
  cardGallery.innerHTML = "";
  initialCards.forEach((item) => {
    const card = new Card(item, "#card");
    cardGallery.append(card.generateCard());
  });
}

function enableValidation() {
  profileFormValidator.enableValidation();
  addFormValidator.enableValidation();
  profileFormValidator.resetValidation();
  addFormValidator.resetValidation();
}

displayCards();
enableValidation();

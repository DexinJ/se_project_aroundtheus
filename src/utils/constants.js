import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

export const initialCards = [
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

const profileForm = document.forms["profile-form"];
const addForm = document.forms["add-form"];
export const nameButton = document.querySelector(".profile__button_type_edit");
export const addButton = document.querySelector(".profile__button_type_add");
export const nameInput = profileForm.querySelector("[name = 'name']");
export const titleInput = profileForm.querySelector("[name = 'title']");
export const user = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__title",
});
export const pictureModal = new PopupWithImage("#pictureModal");
export const profileFormValidator = new FormValidator(
  validationSettings,
  profileForm
);
export const addFormValidator = new FormValidator(validationSettings, addForm);

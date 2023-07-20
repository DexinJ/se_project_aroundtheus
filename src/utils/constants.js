import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";

// export const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
//   },
//   {
//     name: "Lake Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
//   },
// ];

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
};

const profileForm = document.forms["profile-form"];
const addForm = document.forms["add-form"];
const pictureForm = document.forms["profilePic-form"];
export const nameButton = document.querySelector(".profile__button_type_edit");
export const addButton = document.querySelector(".profile__button_type_add");
export const nameInput = profileForm.querySelector("[name = 'name']");
export const titleInput = profileForm.querySelector("[name = 'about']");
export const user = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__title",
  avatarSelector: ".profile__image",
});
export const pictureModal = new PopupWithImage("#pictureModal");
export const profileFormValidator = new FormValidator(
  validationSettings,
  profileForm
);
export const addFormValidator = new FormValidator(validationSettings, addForm);
export const profilePicFormValidator = new FormValidator(
  validationSettings,
  pictureForm
);
export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "b11a73f6-210f-4a22-80fa-1200af39d0e9",
    "Content-Type": "application/json",
  },
});

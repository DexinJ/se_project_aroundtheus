import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  profileFormValidator,
  addFormValidator,
  createCard,
  cardSection,
} from "../pages/index.js";
const profileForm = document.forms["profile-form"];
const nameButton = document.querySelector(".profile__button_type_edit");
const addButton = document.querySelector(".profile__button_type_add");
const nameInput = profileForm.querySelector("[name = 'name']");
const titleInput = profileForm.querySelector("[name = 'title']");
const user = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__title",
});
function fillProfileInputs() {
  const currentInfo = user.getUserInfo();
  nameInput.value = currentInfo.name;
  titleInput.value = currentInfo.job;
}
const profileModal = new PopupWithForm("#nameModal", handleProfileFormSubmit);
const imageModal = new PopupWithForm("#addImageModal", handleAddFormSubmit);
export const pictureModal = new PopupWithImage("#pictureModal");

function handleProfileFormSubmit(data) {
  user.setUserInfo(data);
}

function handleAddFormSubmit(data) {
  cardSection.addItem(createCard(data));
}

nameButton.addEventListener("click", () => {
  fillProfileInputs();
  profileFormValidator.resetValidation();
  profileModal.open();
});

addButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  imageModal.open();
});

profileModal.setEventListeners();
imageModal.setEventListeners();
pictureModal.setEventListeners();

import Card from "../components/Card.js";
import "./index.css";
import Section from "../components/Sections.js";
import {
  initialCards,
  nameButton,
  addButton,
  nameInput,
  titleInput,
  user,
  pictureModal,
  profileFormValidator,
  addFormValidator,
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";

const profileModal = new PopupWithForm("#nameModal", handleProfileFormSubmit);
const imageModal = new PopupWithForm("#addImageModal", handleAddFormSubmit);
export const cardSection = new Section(
  {
    item: initialCards,
    renderer: (item, section) => {
      section.append(createCard(item));
    },
  },
  ".gallery__cards"
);

function fillProfileInputs() {
  const currentInfo = user.getUserInfo();
  nameInput.value = currentInfo.name;
  titleInput.value = currentInfo.job;
}

function handleProfileFormSubmit(data) {
  user.setUserInfo(data);
}

function handleAddFormSubmit(data) {
  console.log(data);
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

function createCard(item) {
  const card = new Card(item, "#card", handleCardClick);
  return card.generateCard();
}

function handleCardClick(data) {
  pictureModal.open(data);
}

function displayCards() {
  cardSection.renderItems();
}

function enableValidation() {
  profileFormValidator.enableValidation();
  addFormValidator.enableValidation();
  profileFormValidator.resetValidation();
  addFormValidator.resetValidation();
}

function applyTransition() {
  const modals = Array.from(document.querySelectorAll(".modal"));
  modals.forEach((modal) => {
    modal.classList.add("modal__transition");
  });
}

profileModal.setEventListeners();
imageModal.setEventListeners();
pictureModal.setEventListeners();

displayCards();
enableValidation();
applyTransition();

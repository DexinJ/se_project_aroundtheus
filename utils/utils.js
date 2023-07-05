import { profileFormValidator, addFormValidator } from "../pages/index.js";
import { Card } from "../components/Card.js";
const modalBackgrounds = document.querySelectorAll(".modal");
const profileForm = document.forms["profile-form"];
const nameButton = document.querySelector(".profile__button_type_edit");
const addButton = document.querySelector(".profile__button_type_add");
const nameInput = profileForm.querySelector("[name = 'name']");
const titleInput = profileForm.querySelector("[name = 'title']");
const addForm = document.forms["add-form"];
const imageTitleInput = addForm.querySelector("[name='title']");
const imageLinkInput = addForm.querySelector("[name='link']");
const addModal = document.querySelector("#addImageModal");
const personName = document.querySelector(".profile__name");
const personTitle = document.querySelector(".profile__title");
const nameModal = document.querySelector("#nameModal");
const cardGallery = document.querySelector(".gallery__cards");

function fillProfileInputs() {
  nameInput.value = personName.textContent;
  titleInput.value = personTitle.textContent;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeByEscape);
}

export function closeByEscape(event) {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  personName.textContent = nameInput.value;
  personTitle.textContent = titleInput.value;
  closeModal(nameModal);
}

function handleAddFormSubmit(event) {
  event.preventDefault();
  const card = new Card(
    {
      name: imageTitleInput.value,
      link: imageLinkInput.value,
    },
    "#card"
  );
  cardGallery.prepend(card.generateCard());
  event.target.reset();
  closeModal(addModal);
}

nameButton.addEventListener("click", () => {
  fillProfileInputs();
  profileFormValidator.resetValidation();
  openModal(nameModal);
});

addButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  openModal(addModal);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

addForm.addEventListener("submit", handleAddFormSubmit);

modalBackgrounds.forEach((mod) => {
  mod.addEventListener("mousedown", (event) => {
    const outside = !event.target.closest(".modal__container");
    if (event.target.classList.contains("modal_opened")) {
      closeModal(mod);
    }
    if (event.target.classList.contains("modal__close")) {
      closeModal(mod);
    }
  });
});

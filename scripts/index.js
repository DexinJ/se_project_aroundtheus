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

const nameButton = document.querySelector(".profile__button_type_edit");
const nameModal = document.querySelector("#nameModal");
const addButton = document.querySelector(".profile__button_type_add");
const addModal = document.querySelector("#addImageModal");
const personName = document.querySelector(".profile__name");
const personTitle = document.querySelector(".profile__title");
const profileForm = document.forms["profile-form"];
const nameInput = profileForm.querySelector("[name = 'name']");
const titleInput = profileForm.querySelector("[name = 'title']");
const addForm = document.forms["add-form"];
const imageTitleInput = addForm.querySelector("[name='title']");
const imageLinkInput = addForm.querySelector("[name='link']");
const cardTemplate = document.querySelector("#card").content;
const cardGallery = document.querySelector(".gallery__cards");
const pictureModal = document.querySelector("#pictureModal");
const pictureImage = pictureModal.querySelector(".modal__image");
const pictureCaption = pictureModal.querySelector(".modal__caption");
const modalBackgrounds = document.querySelectorAll(".modal");

function handleProfileFormSubmit(event) {
  event.preventDefault();
  personName.textContent = nameInput.value;
  personTitle.textContent = titleInput.value;
  closeModal(nameModal);
}

function handleAddFormSubmit(event) {
  event.preventDefault();
  cardGallery.prepend(
    getCardElement({ name: imageTitleInput.value, link: imageLinkInput.value })
  );
  event.target.reset();
  disableButton(addModal.querySelector(".modal__button"));
  closeModal(addModal);
}

function handlePictureClick(source, caption, alt) {
  pictureImage.src = source;
  pictureImage.alt = alt;
  pictureCaption.textContent = caption;
  openModal(pictureModal);
}

function deleteCard(event) {
  const card = event.target.closest(".card");
  cardGallery.removeChild(card);
}

function likeCard(event) {
  event.target.classList.toggle("card__like-button_status_checked");
}

function fillProfileInputs() {
  nameInput.value = personName.textContent;
  titleInput.value = personTitle.textContent;
}

function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardText = cardElement.querySelector(".card__text");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardText.textContent = data.name;
  cardImage.addEventListener("click", () =>
    handlePictureClick(cardImage.src, cardText.textContent, cardImage.alt)
  );
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCard);
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", likeCard);
  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeByEscape);
}

function displayCards() {
  cardGallery.innerHTML = "";
  initialCards.forEach((item) => {
    cardGallery.append(getCardElement(item));
  });
}

function disableButton(buttonElement) {
  buttonElement.classList.add("modal__button_disabled");
  buttonElement.disabled = true;
}

function closeByEscape(event) {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

nameButton.addEventListener("click", () => {
  fillProfileInputs();
  openModal(nameModal);
});

addButton.addEventListener("click", () => {
  openModal(addModal);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

addForm.addEventListener("submit", handleAddFormSubmit);

displayCards();

disableButton(addModal.querySelector(".modal__button"));

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

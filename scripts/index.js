let initialCards = [
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
const nameModal = document.querySelector(".modal");
const closeButton = nameModal.querySelector(".modal__close");
const personName = document.querySelector(".profile__name");
const personTitle = document.querySelector(".profile__title");
const profileForm = document.querySelector(".modal__form");
const nameInput = profileForm.querySelector("[name = 'name']");
const titleInput = profileForm.querySelector("[name = 'title']");
const cardTemplate = document.querySelector("#card").content;
const cardGallery = document.querySelector(".gallery__cards");

function handleProfileFormSubmit(event) {
  event.preventDefault();
  personName.textContent = nameInput.value;
  personTitle.textContent = titleInput.value;
  displayModal(false);
}

function renderName() {
  nameInput.value = personName.textContent;
  titleInput.value = personTitle.textContent;
}

function getCardElement(data) {
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = data.link;
  cardElement.querySelector(".card__image").alt = data.name;
  cardElement.querySelector(".card__text").textContent = data.name;
  return cardElement;
}

function displayModal(operation) {
  if (operation) {
    renderName();
    nameModal.classList.add("modal_opened");
  } else {
    nameModal.classList.remove("modal_opened");
  }
}

nameButton.addEventListener("click", function () {
  displayModal(true);
});
closeButton.addEventListener("click", function () {
  displayModal(false);
});
profileForm.addEventListener("submit", handleProfileFormSubmit);
for (let i of initialCards) {
  cardGallery.append(getCardElement(i));
}

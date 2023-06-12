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
const nameModal = document.querySelector("[name = 'nameModal']");
const addButton = document.querySelector(".profile__button_type_add");
const addModal = document.querySelector("[name = 'addImageModal']");
const closeNameButton = nameModal.querySelector(".modal__close");
const closeAddButton = addModal.querySelector(".modal__close");
const personName = document.querySelector(".profile__name");
const personTitle = document.querySelector(".profile__title");
const profileForm = document.querySelector("[name = 'profile-form']");
const nameInput = profileForm.querySelector("[name = 'name']");
const titleInput = profileForm.querySelector("[name = 'title']");
const addForm = document.querySelector("[name = 'add-form']");
const imageTitleInput = addForm.querySelector("[name='title']");
const imageLinkInput = addForm.querySelector("[name='link']");
const cardTemplate = document.querySelector("#card").content;
const cardGallery = document.querySelector(".gallery__cards");
const pictureModal = document.querySelector("[name = 'pictureModal']");
const closePictureButton = pictureModal.querySelector(".modal__close");
const pictureImage = pictureModal.querySelector(".modal__image");
const pictureCaption = pictureModal.querySelector(".modal__caption");

function handleProfileFormSubmit(event) {
  event.preventDefault();
  personName.textContent = nameInput.value;
  personTitle.textContent = titleInput.value;
  displayModal(false, nameModal);
}

function handleAddFormSubmit(event) {
  event.preventDefault();
  cardGallery.prepend(
    getCardElement({ name: imageTitleInput.value, link: imageLinkInput.value })
  );
  imageTitleInput.value = "";
  imageLinkInput.value = "";
  displayModal(false, addModal);
}

function handlePictureClick(source, caption) {
  pictureImage.src = source;
  pictureCaption.textContent = caption;
  displayModal(true, pictureModal);
}

function handleGalleryClick(event) {
  if (event.target.classList.contains("card__like-button")) {
    if (event.target.classList.contains("card__like-button_status_checked")) {
      event.target.classList.remove("card__like-button_status_checked");
    } else {
      event.target.classList.add("card__like-button_status_checked");
    }
  }
  if (event.target.classList.contains("card__delete-button")) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  }
  if (event.target.classList.contains("card__image")) {
    let caption = event.target.parentNode.querySelector(".card__text");
    console.log(caption.textContent);
    handlePictureClick(event.target.src, caption.textContent);
  }
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

function displayModal(operation, modal) {
  if (operation) {
    modal.classList.add("modal_opened");
  } else {
    modal.classList.remove("modal_opened");
  }
}

function displayCards() {
  cardGallery.innerHTML = "";
  initialCards.forEach((item) => {
    cardGallery.append(getCardElement(item));
  });
}

nameButton.addEventListener("click", function () {
  displayModal(true, nameModal);
});
closeNameButton.addEventListener("click", function () {
  displayModal(false, nameModal);
});
addButton.addEventListener("click", function () {
  displayModal(true, addModal);
});
closeAddButton.addEventListener("click", function () {
  displayModal(false, addModal);
});
closePictureButton.addEventListener("click", function () {
  displayModal(false, pictureModal);
});
renderName();
profileForm.addEventListener("submit", handleProfileFormSubmit);
addForm.addEventListener("submit", handleAddFormSubmit);
displayCards();
cardGallery.addEventListener("click", handleGalleryClick);

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

let content = document.querySelector(".content");
let nameButton = content.querySelector(".profile__button_type_edit");
let nameModal = document.querySelector(".modal");
let closeButton = nameModal.querySelector(".modal__close");

function displayModal(operation) {
  if (operation) {
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
console.log(nameButton);

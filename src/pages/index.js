import Card from "../components/Card.js";
import "./index.css";
import Section from "../components/Sections.js";
import ProfileImage from "../components/ProfileImage.js";
import {
  nameButton,
  addButton,
  nameInput,
  titleInput,
  user,
  pictureModal,
  profileFormValidator,
  addFormValidator,
  profilePicFormValidator,
  api,
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

const deleteModal = new PopupWithConfirm("#deleteModal");
const profileModal = new PopupWithForm("#nameModal", handleProfileFormSubmit);
const imageModal = new PopupWithForm("#addImageModal", handleAddFormSubmit);
const profilePicModal = new PopupWithForm(
  "#profilePictureModal",
  handleProfilePicSubmit
);
const profileImage = new ProfileImage(".profile__image-container", () => {
  profilePicModal.open();
});
function fillProfileInputs() {
  const currentInfo = user.getUserInfo();
  nameInput.value = currentInfo.name;
  titleInput.value = currentInfo.about;
}

function handleProfilePicSubmit(data) {
  profilePicModal.setButtonText("Saving...");
  api
    .updateProfilePicture(data)
    .then((res) => {
      user.setUserInfo(res);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      profilePicModal.setButtonText("Save");
    });
}

function handleProfileFormSubmit(data) {
  profileModal.setButtonText("Saving...");
  api
    .editProfile(data)
    .then((res) => {
      user.setUserInfo(res);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      profileModal.setButtonText("Save");
    });
}

function handleAddFormSubmit(data) {
  imageModal.setButtonText("Saving...");
  api
    .addCard(data)
    .then((res) => {
      const cardSection = new Section(
        {
          item: {},
          renderer: () => {},
        },
        ".gallery__cards"
      );
      cardSection.addItem(createCard(res));
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      imageModal.setButtonText("Create");
    });
}

function handleCardDelete(card, id) {
  deleteModal.open();
  deleteModal.setClickAction(() => {
    deleteModal.setButtonText("Saving...");
    api
      .deleteCard(id)
      .then(() => {
        card.remove();
        deleteModal.close();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        deleteModal.setButtonText("Yes");
      });
  });
  deleteModal.open();
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
  const card = new Card(
    item,
    "#card",
    user.userId,
    handleCardClick,
    (id) => {
      handleCardDelete(card, id);
    },
    (id) => {
      api
        .toggleLike(id, card.likedByOwner())
        .then((res) => {
          card.updateLike(res.likes.length);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  );
  return card.generateCard();
}

function handleCardClick(data) {
  pictureModal.open(data);
}

// function displayCards() {
//   cardSection.renderItems();
// }

function enableValidation() {
  profileFormValidator.enableValidation();
  addFormValidator.enableValidation();
  profilePicFormValidator.enableValidation();
  profileFormValidator.resetValidation();
  addFormValidator.resetValidation();
  profilePicFormValidator.resetValidation();
}

function applyTransition() {
  const modals = Array.from(document.querySelectorAll(".modal"));
  modals.forEach((modal) => {
    modal.classList.add("modal__transition");
  });
}
profileImage.setEventListeners();
profileModal.setEventListeners();
imageModal.setEventListeners();
pictureModal.setEventListeners();
deleteModal.setEventListeners();
profilePicModal.setEventListeners();

enableValidation();
applyTransition();
api
  .getUser()
  .then((res) => {
    user.setUserInfo(res);
  })
  .catch((err) => {
    console.error(err);
  });

api.getInitCards().then((res) => {
  const cardSection = new Section(
    {
      item: res,
      renderer: (item, section) => {
        section.append(createCard(item));
      },
    },
    ".gallery__cards"
  );
  cardSection.renderItems();
});

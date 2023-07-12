export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
  }

  open() {
    this._element.classList.add("modal_opened");
    document.addEventListener("keydown", (event) => {
      this._event = event;
      this._handleEscClose();
    });
  }

  close() {
    this._element.classList.remove("modal_opened");
    document.removeEventListener("keydown", (event) => {
      this._event = event;
      this._handleEscClose();
    });
  }

  _handleEscClose() {
    if (this._event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._element.addEventListener("mousedown", (event) => {
      if (event.target.classList.contains("modal_opened")) {
        this.close();
      }
      if (event.target.classList.contains("modal__close")) {
        this.close();
      }
    });
  }
}

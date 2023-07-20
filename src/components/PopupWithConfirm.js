import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._button = this._element.querySelector(".modal__button");
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener("click", this._setClickActionWrapper);
  }

  _setClickActionWrapper = (event) => {
    event.preventDefault();
    this._confirmDelete();
  };

  setClickAction(func) {
    this._confirmDelete = func;
  }

  setButtonText(text) {
    this._button.textContent = text;
  }
}

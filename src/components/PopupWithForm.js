import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._form = this._element.querySelector(".modal__form");
    this._submitFunction = submitFunction;
    this._inputs = this._element.querySelectorAll(".modal__input");
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._element.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitFunction(this._getInputValues());
      this.close();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}

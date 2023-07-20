export default class ProfileImage {
  constructor(selector, handleImageEdit) {
    this._element = document.querySelector(selector);
    this._handleImageEdit = handleImageEdit;
    console.log(this._element);
  }
  setEventListeners() {
    this._element.addEventListener("click", this._handleImageEdit);
  }
}

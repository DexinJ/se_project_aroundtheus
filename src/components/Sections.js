export default class Section {
  constructor({ item, renderer }, containerSelector) {
    this._item = item;
    this._renderer = renderer;
    this._section = document.querySelector(containerSelector);
  }

  renderItems() {
    this._section.innerHTML = "";
    this._item.forEach((item) => {
      this._renderer(item, this._section);
    });
  }

  addItem(element) {
    this._section.prepend(element);
  }

  setItems(item) {
    this._item = item;
  }
}

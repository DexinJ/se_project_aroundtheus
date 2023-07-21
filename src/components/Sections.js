export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._section = document.querySelector(containerSelector);
  }

  renderItems() {
    this._section.innerHTML = "";
    this._items.forEach((item) => {
      this._renderer(item, this._section);
    });
  }

  addItem(element) {
    this._section.prepend(element);
  }
}

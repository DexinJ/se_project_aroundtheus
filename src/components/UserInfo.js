export default class UserInfo {
  constructor(selectors) {
    this._nameSelector = selectors.nameSelector;
    this._jobSelector = selectors.jobSelector;
  }

  getUserInfo() {
    return {
      name: document.querySelector(this._nameSelector).textContent,
      job: document.querySelector(this._jobSelector).textContent,
    };
  }
  setUserInfo({ name, title }) {
    document.querySelector(this._nameSelector).textContent = name;
    document.querySelector(this._jobSelector).textContent = title;
  }
}

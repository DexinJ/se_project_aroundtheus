export default class UserInfo {
  constructor(selectors) {
    this._nameSelector = selectors.nameSelector;
    this._jobSelector = selectors.jobSelector;
    this._name = document.querySelector(this._nameSelector);
    this._job = document.querySelector(this._jobSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
    };
  }
  setUserInfo({ name, title }) {
    this._name.textContent = name;
    this._job.textContent = title;
  }
}

export default class UserInfo {
  constructor(selectors) {
    this._nameSelector = selectors.nameSelector;
    this._jobSelector = selectors.jobSelector;
    this._avatarSelector = selectors.avatarSelector;
    this._name = document.querySelector(this._nameSelector);
    this._job = document.querySelector(this._jobSelector);
    this._avatar = document.querySelector(this._avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._job.textContent,
    };
  }
  setUserInfo({ name, about, avatar, _id }) {
    console.log(avatar);
    this._name.textContent = name;
    this._job.textContent = about;
    this._avatar.src = avatar;
    this.userId = _id;
  }
}

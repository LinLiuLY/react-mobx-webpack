import {observable, action} from 'mobx';

class UserStore {
  @observable name;

  @action
  updateName(name) {
    this.name = name;
  }
}

export default new UserStore();

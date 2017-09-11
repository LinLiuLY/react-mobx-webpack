import {observable, action} from 'mobx';

class UserStore {
  @observable name;

  @action
  updateName(name) {
    this.name = name;
  }

  @action
  createUser() {
    Promise.resolve("updated name").then(action((updatedName) => {
        this.name = updatedName;
      })
    );
  }
}

export default new UserStore();

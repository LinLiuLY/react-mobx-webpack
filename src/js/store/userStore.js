import {observable, action} from 'mobx';

class UserStore {
  @observable name;

  @action
  updateName(name) {
    this.name = name;
  }

  @action
  createUser() {
    debugger
    this.saveUserToServer().then(action((updatedName) => {
        this.name = updatedName;
      })
    );
  }

  @action
  saveUserToServer() {
    return new Promise((resolve) => action(resolve('updated name')));
  }

  async getUpdatedNameFromServer() {
    try {
      const updatedName = await this.saveUserToServer();
      return updatedName;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserStore();

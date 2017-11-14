import {observable, action, useStrict} from 'mobx';
import uuid from 'uuid';

useStrict(true);

class UserStore {
  constructor() {
    this.users = observable([]);
  }

  @action
  add() {
    this.users.push({
      id: uuid(),
      name: 'default name',
    });
  }

  @action
  update(id, name) {
    const user = this.users.find(user => user.id === id);
    user.name = name;
  }
}

const userStore = new UserStore();

export default userStore;

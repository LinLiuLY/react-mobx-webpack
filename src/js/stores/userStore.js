import {observable, action} from 'mobx';

class UserStore {
  @observable users = [];
}

const userStore = new UserStore();

export default userStore;

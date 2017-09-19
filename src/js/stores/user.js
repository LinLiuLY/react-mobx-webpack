import {observable, action} from 'mobx';

export default class User {
  @observable name;

  constructor(name) {
    this.name = name;
  }

  @action
  updateName(name) {
    this.name = name;
  }
}

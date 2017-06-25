import { observable } from 'mobx';

class AppState {
  @observable testCount = 10;
}

const appState = new AppState();
export default appState;

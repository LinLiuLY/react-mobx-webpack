import { observable } from 'mobx';

class AppStore {
  @observable testCount = 10;
}

const AppStoreInfo = new AppStore();

export default AppStoreInfo;

import AppStoreInfo from '../store/AppStore';

describe('AppStore', () => {
  it('Set the test count', () => {
    const store = AppStoreInfo;
    AppStoreInfo.testCount = 10;
    expect(AppStoreInfo.testCount).toBe(10);
  })
});


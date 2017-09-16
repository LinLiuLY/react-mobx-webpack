import userStore from '../userStore';

describe('User Store', () => {
  it('should update name', () => {
    expect(userStore.name).toBeUndefined();
    userStore.updateName('new name');
    expect(userStore.name).toBe('new name');
  });
});

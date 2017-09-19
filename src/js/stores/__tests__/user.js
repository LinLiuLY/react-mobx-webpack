import User from '../user';

describe('User', () => {
  it('should update name', () => {
    const user = new User();
    expect(user.name).toBeUndefined();
    user.updateName('new name');
    expect(user.name).toBe('new name');
  });
});

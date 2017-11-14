import UserStore from '../userStore';

describe('UserStore', () => {
  it('should add default user', () => {
    UserStore.add();
    const users = UserStore.users;
    expect(users.length).toBe(1);
    expect(users[0].id).toBeDefined();
    expect(users[0].name).toBe('default name');
  });

  it('should update user name', () => {
    UserStore.users = [
      {
        id: 'u1',
        name: 'default name',
      },
    ];
    UserStore.update('u1', 'updated name');
    expect(UserStore.users[0].id).toBe('u1');
    expect(UserStore.users[0].name).toBe('updated name');
  });
});

import React from 'react';
import {shallow} from 'enzyme';
import UserItem from '../UserItem';

describe('UserItem', () => {
  let wrapper, store, user;

  beforeEach(() => {
    user = {
      id: 'u1',
      name: 'default name'
    };
    store = {
      users: [user],
      update: jest.fn()
    };
    wrapper = shallow(<UserItem store={store} user={user} />);
  });

  it('should render input', () => {
    const input = wrapper.find('input');
    expect(input.length).toBe(1);

    input.simulate('change', {target: {value: 'new name'}});
    expect(store.update).toHaveBeenCalledWith(user.id, 'new name');
  });
});

import React from 'react';
import {shallow} from 'enzyme';
import UsersItem from '../UsersItem';
import UserItem from '../UserItem';

describe('UsersItem', () => {
  let wrapper, store;

  beforeEach(() => {
    store = {
      users: [
        {
          id: 'u1'
        }
      ]
    };
    wrapper = shallow(<UsersItem store={store} />);
  });

  it('should render UserItem', () => {
    const userItems = wrapper.find(UserItem);
    expect(userItems.length).toBe(1);
    expect(userItems.at(0).key()).toBe('u1');
    expect(userItems.at(0).prop('user')).toEqual({id: 'u1'});
    expect(userItems.at(0).prop('store')).toBe(store);
  });
});

import React from 'react';
import {shallow} from 'enzyme';
import UsersItem from '../UsersItem';
import TableHeader from '../TableHeader';
import UsersList from '../UsersList';

describe('UsersItem', () => {
  let wrapper, userStore;

  beforeEach(() => {
    userStore = {
      add: jest.fn()
    };
    wrapper = shallow(<UsersList.wrappedComponent userStore={userStore} />);
  });

  it('should render TableHeader', () => {
    const usersItem = wrapper.find(TableHeader);
    expect(usersItem.length).toBe(1);
  });

  it('should render add Button', () => {
    const addButton = wrapper.find('button');
    expect(addButton.length).toBe(1);

    addButton.simulate('click');
    expect(userStore.add).toHaveBeenCalled();
  });

  it('should render UsersItem', () => {
    const usersItem = wrapper.find(UsersItem);
    expect(usersItem.length).toBe(1);
    expect(usersItem.at(0).prop('store')).toBe(userStore);
  });
});

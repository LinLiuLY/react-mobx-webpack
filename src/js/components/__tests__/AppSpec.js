import React from 'react';
import {shallow} from 'enzyme';
import UsersList from '../UsersList';
import App from '../App';
import userStore from '../../stores/userStore';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render UsersList', () => {
    const usersList = wrapper.find(UsersList);
    expect(usersList.length).toBe(1);
  });

  it('should pass correct props to provider', () => {
    const provider = wrapper.find('Provider');
    expect(provider.prop('userStore')).toBe(userStore);
  });
});

import React from 'react';
import {shallow} from 'enzyme';
import NameInput from '../NameInput';
import App from '../App';
import userStore from '../../stores/userStore';

describe('App', () => {
  it('should pass props', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.props().userStore).toBe(userStore);
  });

  it('should render NameInput', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NameInput).length).toBe(1);
  });
});

import React from 'react';
import {shallow} from 'enzyme';
import UserView from '../UserView';
import App from '../App';

describe('App', () => {
  it('should pass props', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.props().user.name).toBeUndefined();
  });

  it('should render UserView', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(UserView).length).toBe(1);
  });
});

import React from 'react';
import {mount} from 'enzyme';
import App from '../App';

describe('App', () => {
  let mockStore, wrapper;
  beforeEach(() => {
    mockStore = {
      name: 'default name',
      updateName: jest.fn(),
    };
    wrapper = mount(<App userStore={mockStore} />);
  });

  it('should pass props', () => {
    expect(wrapper.props().userStore).toBe(mockStore);
  });

  it('should render input', () => {
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').get(0).value).toBe('default name');
  });

  it('should update input', () => {
    wrapper.find('input').simulate('change');
    expect(mockStore.updateName).toHaveBeenCalled();
  });
});

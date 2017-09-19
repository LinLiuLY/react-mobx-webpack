import React from 'react';
import {mount} from 'enzyme';
import UserView from '../UserView';

describe('UserView', () => {
  let mockStore, wrapper;
  beforeEach(() => {
    mockStore = {
      name: 'default name',
      updateName: jest.fn(),
    };
    wrapper = mount(<UserView user={mockStore} />);
  });

  it('should pass props', () => {
    expect(wrapper.props().user).toBe(mockStore);
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

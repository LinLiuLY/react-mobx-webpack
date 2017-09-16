import React from 'react';
import {mount} from 'enzyme';
import NameInput from '../NameInput';

describe('NameInput', () => {
  let mockStore, wrapper;
  beforeEach(() => {
    mockStore = {
      name: 'default name',
      updateName: jest.fn(),
    };
    wrapper = mount(<NameInput userStore={mockStore} />);
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

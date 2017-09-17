import React from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';

@inject('userStore')
@observer
class NameInput extends React.Component {
  handleInputChange = event => {
    const {userStore} = this.props;
    userStore.updateName(event.target.value);
  };

  render() {
    const {userStore} = this.props;

    return (
      <div>
        <input value={userStore.name} onChange={this.handleInputChange} />
      </div>
    );
  }
}

NameInput.wrappedComponent.propTypes = {
  userStore: PropTypes.object.isRequired,
};

export default NameInput;

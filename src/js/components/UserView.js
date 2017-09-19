import React from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';

@inject('user')
@observer
class UserView extends React.Component {
  handleInputChange = event => {
    const {user} = this.props;
    user.updateName(event.target.value);
  };

  render() {
    const {user} = this.props;

    return (
      <div>
        <input value={user.name} onChange={this.handleInputChange} />
      </div>
    );
  }
}

UserView.wrappedComponent.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserView;

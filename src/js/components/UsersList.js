import React from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';
import UsersItem from './UsersItem';
import userStore from '../stores/userStore';
import TableHeader from './TableHeader';

@inject('userStore')
@observer
class UsersList extends React.Component {
  addUser = () => {
    const {userStore} = this.props;
    userStore.add();
  };

  render() {
    const {userStore} = this.props;

    return (
      <div>
        <table>
          <TableHeader />
          <UsersItem store={userStore} />
        </table>
        <button onClick={this.addUser}>Add</button>
      </div>
    );
  }
}

UsersList.wrappedComponent.propTypes = {
  userStore: PropTypes.object.isRequired,
};

export default UsersList;

import React from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';
import UserItem from './UserItem';
import userStore from "../stores/userStore";

@inject('userStore')
@observer
class UsersView extends React.Component {

  handleButtonClick = () => {
    const {userStore} = this.props;
    userStore.add('default name');
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                name
              </th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.userStore.users.map(user => {
              return <UserItem key={user.id} user={user} store={userStore}/>
            })
          }
          </tbody>
        </table>
        <button onClick={this.handleButtonClick}></button>
      </div>
    );
  }
}

UsersView.wrappedComponent.propTypes = {
  userStore: PropTypes.object.isRequired
};

export default UsersView;

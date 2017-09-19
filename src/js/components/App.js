import React from 'react';
import {Provider} from 'mobx-react';
import UserView from './UserView';
import User from '../stores/user';

export default class App extends React.Component {
  render() {
    let user = new User();

    return (
      <Provider user={user}>
        <UserView />
      </Provider>
    );
  }
}

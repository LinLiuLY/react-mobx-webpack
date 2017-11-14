import React from 'react';
import {observer, Provider} from 'mobx-react';
import UsersList from './UsersList';
import userStore from '../stores/userStore';

@observer
export default class App extends React.Component {
  render() {
    return (
      <Provider userStore={userStore}>
        <UsersList />
      </Provider>
    );
  }
}

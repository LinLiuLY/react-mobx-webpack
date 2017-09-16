import React from 'react';
import {Provider} from 'mobx-react';
import NameInput from './NameInput';
import userStore from '../stores/userStore';

export default class App extends React.Component {
  render() {
    const stores = {userStore};

    return (
      <Provider {...stores}>
        <NameInput />
      </Provider>
    );
  }
}

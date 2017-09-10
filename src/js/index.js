import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
import App from 'component/App';
import userStore from 'store/userStore';

const stores = {userStore};

render((
  <Provider {...stores}>
    <App/>
  </Provider>
), document.getElementById('reactjs-app'));

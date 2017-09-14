import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
import App from 'components/App';
import userStore from 'stores/userStore';

const stores = {userStore};

render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('reactjs-app'),
);

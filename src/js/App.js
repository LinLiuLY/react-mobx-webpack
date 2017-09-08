import React, { Component } from 'react';
import { observer } from 'mobx-react';
import AppStoreInfo from './store/AppStore';

class App extends Component {
  render() {
    AppStoreInfo.testCount = 12;

    return (
      <div>
        <button>
          Seconds passed: {AppStoreInfo.testCount}
        </button>
      </div>
    );
  }
};

export default App;

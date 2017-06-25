import React, { Component } from 'react';
import { observer } from 'mobx-react';
import AppStoreInfo from './store/AppStore';

@observer
class App extends Component {
  render() {
    AppStoreInfo.testCount = 2;

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

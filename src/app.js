import React, { Component } from 'react';
import { observer } from 'mobx-react';
import appState from 'AppState';

@observer
class App extends Component {
  render() {
    appState.testCount = 2;

    return (
      <div>
        <button>
          Seconds passed: {appState.testCount}
        </button>
      </div>
    );
  }
  
};

export default App;

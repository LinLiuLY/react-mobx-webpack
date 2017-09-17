import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {useStrict} from 'mobx';

useStrict(true);
render(<App />, document.getElementById('root'));

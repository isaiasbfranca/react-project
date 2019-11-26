import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import CommonPage from './app/components/common/CommonPage';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CommonPage />, document.getElementById('root'));

serviceWorker.register();




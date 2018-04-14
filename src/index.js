import React from 'react';
import ReactDOM from 'react-dom';
import jss from 'jss';

import 'babel-polyfill';

import App from 'components/index.js';

jss.setup({ createGenerateClassName: () => rule => rule.key }); //do this to disable jss classNames scoping
ReactDOM.render(<App />, document.getElementById('root'));

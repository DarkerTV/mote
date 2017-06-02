import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import CodeMirror from 'codemirror';
import createHistory from 'history/createBrowserHistory';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';

import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/edit/continuelist.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/anyword-hint.js';
import 'codemirror/addon/comment/continuecomment.js';
import 'codemirror/addon/display/fullscreen.js';

import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/python/python';

import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/fullscreen.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

CodeMirror.commands.autocomplete = cm => cm.showHint({ hint: CodeMirror.hint.anyword });
CodeMirror.commands.toggleFullScreen = cm => cm.setOption('fullScreen', !cm.getOption('fullScreen'));
CodeMirror.commands.closeFullScreen = cm => cm.getOption('fullScreen') && cm.setOption('fullScreen', false);

const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();

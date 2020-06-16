import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from "./reducers";
import theme from '../src/utils/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

export const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();



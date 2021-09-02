import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './containers/App';
import { userDataReducer } from './reducers'

import { BrowserRouter } from "react-router-dom";

import './index.css';
app.use(express.static("https://github.com/andreecueva97/gh-pages-depl")); //here is important thing - no static directory, because all static :)

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
const logger = createLogger() 

const rootReducers = combineReducers({userDataReducer})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

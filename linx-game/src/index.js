import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './Vista/App';
import * as serviceWorker from './Vista/serviceWorker';
import Admin from './Vista/Admin';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const createstoreWithMiddleWare = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createstoreWithMiddleWare(rootReducer)}>
  <Router>
    //Route path="/" component={App} />
    <Route path="/" component={Admin} />
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

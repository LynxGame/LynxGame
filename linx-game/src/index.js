import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './Vista/App';
import Admin from './Vista/Admin';
import User from './Vista/User';
import * as serviceWorker from './Vista/serviceWorker';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { Route } from 'react-router-dom'

const createstoreWithMiddleWare = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createstoreWithMiddleWare(rootReducer)}>
  <Router>
    <Route exact path="/" component={App}/>
    <Route path="/Admin" component={Admin}/>
    <Route path="/User" component={User}/>
  </Router>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();

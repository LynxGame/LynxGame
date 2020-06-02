import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './Vista/App';
import * as serviceWorker from './Vista/serviceWorker';
import Admin from './Vista/Admin';

ReactDOM.render(
  <Router>
    //Route path="/" component={App} />
    <Route path="/" component={Admin} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

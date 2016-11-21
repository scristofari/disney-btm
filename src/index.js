import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';

import '../node_modules/foundation-sites/dist/foundation-flex.css';

ReactDOM.render(
  <div className="layout">
    <Header />
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Router>
  </div>
  , document.getElementById('root')
)
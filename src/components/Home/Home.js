import React, { Component } from 'react';

import Header from '../Header/Header'
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Home-intro">
          Home
        </p>
      </div>
    );
  }
}

export default Home;

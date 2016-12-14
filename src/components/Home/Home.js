import React from 'react'

import './Home.css';
import btm_logo from './btm_logo.jpg'

const imgStyle = {
  backgroundImage: 'url(' + btm_logo + ')'
};

class Home extends React.Component {
  render() {
    return (
      <div className="Home" style={imgStyle}>
        <div className="Home-container">
          <span>Welcome to the Big Thunder Mountains Quiz.</span>
          <span>Play and win some dysney goodies.</span>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

export default Home;
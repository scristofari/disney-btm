import React from 'react'
import { Link } from 'react-router'

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
          <span>Play and win some disney goodies or fast pass.</span>
          <Link to={`/quiz/1`}>Start</Link>
        </div>
      </div>
    );
  }
}

export default Home;
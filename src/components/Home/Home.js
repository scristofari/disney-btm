import React from 'react'
import { Link } from 'react-router'

import btm_logo from './btm_logo.jpg'
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="Home page" style={{backgroundImage: 'url(' + btm_logo + ')'}}>
        <div className="Home-container container">

          <span className="Home-title">Welcome to the <br /> Big Thunder Mountain Quiz</span>
          <span className="Home-description">Play and win some disney goodies or fast pass.</span>
        
          <div className="Home-start">
            <Link to={`/quiz/1`}>START</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
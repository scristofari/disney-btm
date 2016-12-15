import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import FastPass from '../FastPass/FastPass'

import background from './resto_cendrillon.jpg'
import './Result.css'

class Result extends React.Component {
  render() {
    return (
      <div className="Result page" style={{backgroundImage: 'url(' + background + ')'}}>
        <div className="Result-container container">
            <span className="Result-score">{this.props.score} / {this.props.data.length}</span>
            <span className="Result-title">Congratulation !</span>
            <span className="Result-you">You won</span>
            <FastPass />
            <div className="Result-return">
              <Link to={`/`}>Home</Link>
            </div>
        </div>
      </div>
    );
  }
}

Result = connect((store) => {
    return {
      score: store.quiz.score,
      data: store.quiz.data
    }
})(Result)

export default Result;

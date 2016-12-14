import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { nextQuiz } from '../../actions/quizAction'

import './Quiz.css';

class Quiz extends React.Component {
  constructor() {
    super()
    this._answer.bind(this);
  }

  _answer(score) {
    this.props.dispatch(nextQuiz(score))
  }

  render() { 
    const quiz = this.props.data[this.props.step]
    const imgStyle = {
      backgroundImage: 'url(' + quiz.image +')'
    }
    const answers = quiz.answers.map((x, i) =>
      <span key={i} onClick={this._answer.bind(this, x.score)}>{x.label}</span>
    );

    return (
      <div className="Quiz" style={imgStyle}>
        <div className="Quiz-container">
          <span>{quiz.question}</span>
          {answers}
          <div className="Quiz-return">
            <Link to={'/'}>Return</Link>
          </div>
        </div>
      </div>
    );
  }
}

Quiz = connect((store) => {
    return {
        step: store.quiz.step,
        data: store.quiz.data
    }
})(Quiz)

export default Quiz;

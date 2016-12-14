import React from 'react'
import { connect } from 'react-redux'

import { nextQuiz } from '../../actions/quizAction'

class Quiz extends React.Component {

  _answer(score) {
    setTimeout(() => {
        this.props.dispatch(nextQuiz(score))
    }, 2000)
  }

  render() { 
    const quiz = this.props.data[this.props.step]
    const imgStyle = {
      backgroundImage: 'url(' + quiz.image +')'
    }
    const answers = quiz.answers.map((x, i) =>
      <span className="Quizz-answer" key={i} data-score={x.score} onClick={this._answer.bind(this, x.score)}>{x.label}</span>
    );

    return (
      <div className="Quiz page" style={imgStyle}>
        <div className="Quiz-container container">
          <span>{quiz.question}</span>
          {answers}
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

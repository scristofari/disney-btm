import React from 'react'
import { connect } from 'react-redux'

import { nextQuiz, selectedAnswer } from '../../actions/quizAction'
import './Quiz.css'

class Quiz extends React.Component {

  _answer(index) {
    const answer = this.props.data[this.props.step].answers[index]
    this.props.dispatch(selectedAnswer(index))
    setTimeout(() => {
        this.props.dispatch(nextQuiz(answer.score))
    }, 1000)
  }

  render() { 
    const quiz = this.props.data[this.props.step]
    const selected = this.props.selected[this.props.step]
    let styles = []
    quiz.answers.forEach(function(x, i) {
      if ( selected !== undefined && x.score === 1 ) {
          styles[i] = {
              background: '#8DC63F',
              color: 'white'
          }
      } else if ( selected === i && x.score === 0) {
          styles[i] = {
              background: 'red',
              color: 'white'
          }
      } else {
          styles[i] = {}
      }
    });

    const answers = quiz.answers.map((x, i) =>
      <span className="Quiz-answer" 
            key={i}
            style={styles[i]}
            data-score={x.score} 
            onClick={this._answer.bind(this, i)}>
            {x.label}
      </span>
    );

    return (
      <div className="Quiz page" style={{backgroundImage: 'url(' + quiz.image +')'}}>
        <div className="Quiz-container container">
          <span className="Quiz-question">{quiz.question}</span>
          {answers}
        </div>
      </div>
    );
  }
}

Quiz = connect((store) => {
    return {
        step: store.quiz.step,
        data: store.quiz.data,
        selected: store.quiz.selected
    }
})(Quiz)

export default Quiz;

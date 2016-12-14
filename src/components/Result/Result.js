import React from 'react'
import { connect } from 'react-redux'

import './Result.css';

class Result extends React.Component {
  render() {
    return (
      <div className="Result">
        {this.props.score}
      </div>
    );
  }
}

Result = connect((store) => {
    return {
      score: store.quiz.score
    }
})(Result)

export default Result;

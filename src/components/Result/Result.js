import React from 'react'
import { connect } from 'react-redux'

import background from './resto_cendrillon.jpg'

class Result extends React.Component {
  render() {
    const imgStyle = {
      backgroundImage: 'url(' + background + ')'
    };

    return (
      <div className="Result page" style={imgStyle}>
        <div className="Result-container container">
            {this.props.score} / {this.props.data.length}
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

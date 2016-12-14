import React from 'react'
import { connect } from 'react-redux'

import Quiz from '../Quiz/Quiz'
import Result from '../Result/Result'

class Game extends React.Component {
    render() {
        if ( this.props.finished ) {
            return (
                <div className="Game">
                    <Result />
                </div>
            )
        }
        return (
            <div className="Game">
                <Quiz />
            </div>
        );
    }
}

Game = connect((store) => {
    return {
        finished: store.quiz.finished
    }
})(Game)

export default Game;
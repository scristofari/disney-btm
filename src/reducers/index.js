import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import quizReducer from './quizReducer';

export default combineReducers({
    quiz: quizReducer,
    routing: routerReducer
});
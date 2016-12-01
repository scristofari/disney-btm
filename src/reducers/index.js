import { combineReducers } from 'redux'

import user from './userReducer'
import menu from './menuReducer'

export default combineReducers({
    user,
    menu
});
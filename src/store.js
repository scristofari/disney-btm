import { apllyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducer'

const middleware = apllyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)
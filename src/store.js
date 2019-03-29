import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import contactReducer from './reducers/contact'
const store = createStore(
  contactReducer,
  applyMiddleware(thunk, logger)
)

export default store;
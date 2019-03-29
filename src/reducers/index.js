import { combineReducers } from 'redux';
import contactReducer from './contact';

const rootReducer = combineReducers({
  contacts: contactReducer
})

export default rootReducer;
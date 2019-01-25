import {combineReducers} from 'redux';
import catsReducer from './catsReducer';
import dogsReducer from './dogsReducer';

const rootReducer = combineReducers({
  cats: catsReducer,
  dogs: dogsReducer,
})

export default rootReducer;
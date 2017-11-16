import { combineReducers } from 'redux';
import CharactersReducer from './reducer_exampleCharacters';

const rootReducer = combineReducers({
  characters : CharactersReducer
});
// you can access this as a state from a callback.
// need mapStateToProps function.
// 
export default rootReducer;
//master redux which stores all the states

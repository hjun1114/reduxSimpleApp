import { combineReducers } from 'redux';
import CharactersReducer from './reducer_exampleCharacters';
import ActiveCharacterReducer from './reducer_active_character';

const rootReducer = combineReducers({
  characters : CharactersReducer,
  activeCharacter : ActiveCharacterReducer
});
// you can access this as a state from a callback.
// need mapStateToProps function.
// remember that any key to the object that we put in to combineReducers ends up as keys for our global state.
export default rootReducer;
//master redux which stores all the states

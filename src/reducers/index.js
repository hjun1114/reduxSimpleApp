import { combineReducers } from 'redux';
import CharactersReducer from './reducer_exampleCharacters';

const rootReducer = combineReducers({
  characters : CharactersReducer
});

export default rootReducer;

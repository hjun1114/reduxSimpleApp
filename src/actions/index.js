export function selectCharacter (character) {
  // selectCharacter is an actionCreator. This needs to return an action which is an object with a type property.
  return{
    type: 'CHARACTER_SELECTED',
    payload: character
  };
}
// this action alone is just a function. We need to make sure that this action function goes through all the reducers.

// state refers to this reducer not an application state.
export default function(state, action){
  // whenever action is called, it gets dispatched to this reducer.
  // most reducer is set up with switch statement.
  if (state == undefined){
    state = null;
  } // when the app is firt booted and nothing is yet selected, we need to put it to null.

  switch (action.type) {
    case 'CHARACTER_SELECTED':
    // if the action type is CHARACTER_SELECTED, return action.payload which is selected character.
      return action.payload
  }
    // if the action is anything else, just return the state.
  return state;
}

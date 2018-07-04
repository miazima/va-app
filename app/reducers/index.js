/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import * as types from 'constants/actionTypes';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  searchTerm: ''
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.TRIGGER_SEARCH:
      return {
        ...state,
        searchTerm: token
      }
    default:
      return state;
  }
}

export default appReducer;

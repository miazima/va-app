import * as types from 'constants/actionTypes';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  searchTerm: ''
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.TRIGGER_SEARCH:
      return {
        ...state,
        searchTerm: action.token
      }
    default:
      return state;
  }
}

export default searchReducer;

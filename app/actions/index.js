import * as types from 'constants/actionTypes';

export const onSearch = token => {
  return {
    type: types.TRIGGER_SEARCH,
    token
  }
};
import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ALL_TYPES:
      return {...state };
    case types.FILTER_TYPE:
      return {...state };
    default:
      return state;
  }
};
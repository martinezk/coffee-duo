import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ALL_TYPES:
      return Object.assign({}, state, {allTypes: action.category});
    case types.FILTER_TYPES:
      return [...state, Object.assign({}, action.pairing)];
    default:
      return state;
  }
};
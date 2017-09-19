import * as types from './action-types';

export const filterType = (pairing) => {
  return {
    type: types.FILTER_TYPE,
    pairing
  };
}
export const allTypes = (category) => {
  return {
    type: types.ALL_TYPES,
    category
  };
}
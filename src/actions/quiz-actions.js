import * as types from './action-types';

export const removeType = (category) => {
  return {
    type: types.REMOVE_TYPE,
    category
  };
}
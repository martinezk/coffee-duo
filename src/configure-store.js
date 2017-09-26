import rootReducer from './reducers/root-reducer';
import {createStore} from 'redux';

export default (initialState) => {
  return createStore(rootReducer, initialState);
};
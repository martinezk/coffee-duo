import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './quiz-reducer.js';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});
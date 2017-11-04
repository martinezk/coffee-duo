import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './drinks-reducer.js';
import { food, foodHasErrored, foodIsLoading } from './food-reducer.js';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    food,
    foodHasErrored,
    foodIsLoading
});
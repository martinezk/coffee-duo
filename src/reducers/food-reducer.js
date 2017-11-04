export function foodHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
  
        default:
            return state;
    }
  }
  
  export function foodIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
  
        default:
            return state;
    }
  }
  
  export function food(state = [], action) {
    switch (action.type) {
        case 'FOOD_FETCH_DATA_SUCCESS':
            return action.food;
        case 'ITEM_IS_HOT':
        case 'ITEM_IS_COLD':
            return state.filter(item => item.Type === action.filter);
        case 'ITEM_PAIRING':
            return state.filter(item => item.Pairing === action.filter);  
        default:
            return state;
    }
  }
  
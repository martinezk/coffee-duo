export function itemsHasErrored(state = false, action) {
  switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
      case 'ITEMS_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
          return action.items;
      case 'ITEM_IS_HOT':
      case 'ITEM_IS_COLD':
          return state.filter(item => item.Type === action.filter);
      default:
          return state;
  }
}


//load both drinks and food in background
//reducer for filtering hot or cold beverages
//action and reducer for filtering by pairing group
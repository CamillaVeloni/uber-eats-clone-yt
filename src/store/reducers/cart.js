import { ADD_TO_CART } from '../actions/cart';

const initialState = {
  selectedItems: {
    items: [],
    restaurantName: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        // ADD TO CART'
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        // REMOVE FROM CART
        const filteredItems = newState.selectedItems.items.filter(
          (item) => item.title !== action.payload.title
        );

        newState.selectedItems = {
          items: filteredItems,
          restaurantName: filteredItems.length > 0 ? action.payload.restaurantName : '',
        };
      }

      return newState;
    }
    default:
      return state;
  }
};

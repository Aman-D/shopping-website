import { cartActionTypes } from "./cart.types";
import { addItem, deleteItem, removeItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGEL_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      };
    case cartActionTypes.DELETE_ITEMS:
      return {
        ...state,
        cartItems: deleteItem(state.cartItems, action.payload)
      };
    case cartActionTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;

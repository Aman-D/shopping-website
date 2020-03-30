import { cartActionTypes } from "./cart.types";

export const CartToggel = () => ({
  type: cartActionTypes.TOGGEL_CART
});

export const AddItem = item => ({
  type: cartActionTypes.ADD_ITEMS,
  payload: item
});

export const RemoveItem = item => ({
  type: cartActionTypes.REMOVE_ITEMS,
  payload: item
});

export const DeleteItem = item => ({
  type: cartActionTypes.DELETE_ITEMS,
  payload: item
});

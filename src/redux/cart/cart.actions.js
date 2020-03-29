import { cartActionTypes } from './cart.types';

export const CartToggel = () => ({
    type: cartActionTypes.TOGGEL_CART
});

export const AddItem = item => ({
    type: cartActionTypes.ADD_ITEMS,
    payload: item
});


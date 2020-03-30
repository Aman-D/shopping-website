import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartHidden = createSelector(selectCart, cart => cart.hidden);

export const selectItemsCount = createSelector([selectItems], cartItem =>
  cartItem.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectTotalPrice = createSelector([selectItems], cartItem =>
  cartItem.reduce((sum, item) => sum + item.quantity * item.price, 0)
);

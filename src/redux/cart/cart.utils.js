export const addItem = (cart, item) => {
  const exists = cart.find(cartItem => cartItem.id === item.id);

  if (exists) {
    return cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cart, { ...item, quantity: 1 }];
};

export const removeItem = (cart, item) => {
  const exists = cart.find(cartItem => cartItem.id === item.id);

  if (exists) {
    return cart.map(cartItem =>
      cartItem.quantity === 1
        ? cartItem
        : cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return [...cart, { ...item, quantity: 1 }];
};

export const deleteItem = (cart, item) => {
  return cart.filter(cartitem => cartitem.id !== item.id);
};

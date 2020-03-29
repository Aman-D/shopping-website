export const addItem = (cart, item) => {

    const exists = cart.find(cartItem => cartItem.id === item.id);

    if (exists) {
        return cart.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    return [...cart, { ...item, quantity: 1 }];
}
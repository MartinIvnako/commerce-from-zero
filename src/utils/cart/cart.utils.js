export const createCart = (product, oldCartItems) => {
    const existingCartItem = oldCartItems.find(
        (cartItem) => cartItem.id === product.id
    );

    if (existingCartItem) {
        return oldCartItems.map((cartItem) =>
            cartItem.id === product.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : { ...cartItem }
        );
    }

    return [...oldCartItems, { ...product, quantity: 1 }];
};

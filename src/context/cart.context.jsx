import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
});

const addCartItem = (cartItems, productToCart) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToCart.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToCart.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : { ...cartItem }
        );
    }

    return [...cartItems, { ...productToCart, quantity: 1 }];
};

const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemsToCart = (productToCart) => {
        setCartItems(addCartItem(cartItems, productToCart));
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemsToCart };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export default CartProvider;

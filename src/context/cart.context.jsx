import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    cartCount: 0,
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
    const [cartCount, setCartCount] = useState(0);

    const addItemsToCart = (productToCart) => {
        setCartItems(addCartItem(cartItems, productToCart));
    };

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemsToCart,
        cartCount,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export default CartProvider;

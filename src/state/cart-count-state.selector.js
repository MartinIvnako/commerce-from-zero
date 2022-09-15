import { selector } from "recoil";
import { cartItemsState } from "./cart-items-state.atom";

export const cartCountState = selector({
    key: "cartCount",
    get: ({ get }) => {
        const cartItems = get(cartItemsState);

        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );

        return newCartCount;
    },
});

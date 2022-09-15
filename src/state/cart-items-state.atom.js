import { atom } from "recoil";

export const cartItemsState = atom({
    key: "cartItems",
    default: [],
});

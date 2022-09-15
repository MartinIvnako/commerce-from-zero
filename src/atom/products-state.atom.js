import { atom } from "recoil";
import PRODUCTS from "../shop-data.json";

export const listOfProductsState = atom({
    key: "listOfProducts",
    default: [...PRODUCTS],
});

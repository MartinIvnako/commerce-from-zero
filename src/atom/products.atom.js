import { atom } from "recoil";
import PRODUCTS from "../shop-data.json";

export const listOfProducts = atom({
    key: "listOfProducts",
    default: [...PRODUCTS],
});

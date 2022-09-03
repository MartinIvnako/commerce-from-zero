import Button from "../button/button.component";
import { ReactComponent as CartIconLogo } from "../../assets/shopping-bag.svg";
import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div>
            <button
                onClick={toggleIsCartOpen}
                className="relative flex items-end justify-center w-8 h-8 ml-4 "
            >
                <CartIconLogo className="absolute top-0 left-0 w-8 h-8" />
                <span className="text-[14px]">{cartCount}</span>
            </button>
            {isCartOpen && <CartDropdown />}
        </div>
    );
};

export default CartIcon;

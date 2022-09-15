import Button from "../button/button.component";
import { ReactComponent as CartIconLogo } from "../../assets/shopping-bag.svg";
import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { isCartOpenState } from "../../atom/is-cart-open-state.atom";
import { useRecoilState } from "recoil";

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useRecoilState(isCartOpenState);

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

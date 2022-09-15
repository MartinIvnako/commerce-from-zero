import { ReactComponent as CartIconLogo } from "../../assets/shopping-bag.svg";

import CartDropdown from "../cart-dropdown/cart-dropdown";
import { isCartOpenState } from "../../state/is-cart-open-state.atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartCountState } from "../../state/cart-count-state.selector";

const CartIcon = () => {
    const cartCount = useRecoilValue(cartCountState);
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

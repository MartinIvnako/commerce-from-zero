import Button from "../button/button.component";
import { ReactComponent as CartIconLogo } from "../../assets/shopping-bag.svg";
import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="flex items-center">
            <Button onClick={toggleIsCartOpen}>
                <CartIconLogo className="w-8 h-8 ml-4" />
            </Button>
            {isCartOpen && <CartDropdown />}
        </div>
    );
};

export default CartIcon;

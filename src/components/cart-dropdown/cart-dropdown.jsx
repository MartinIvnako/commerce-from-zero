import { Link } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { cartItemsState } from "../../state/cart-items-state.atom";
import { useRecoilValue } from "recoil";

const CartDropdown = () => {
    const cartItems = useRecoilValue(cartItemsState);

    return (
        <div className="relative ">
            <div
                className=" absolute right-0 top-6 z-20 w-[220px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700"
                aria-labelledby="dropdownNotificationButton"
            >
                <div className="divide-y divide-gray-100 dark:divide-gray-700  max-h-[50vh]  overflow-auto">
                    {cartItems.map((cartItem) => (
                        <CartItem cartItem={cartItem} key={cartItem.id} />
                    ))}
                </div>
                <Link
                    to="/checkout"
                    className="inline-block w-full py-3 text-base font-medium leading-6 text-center bg-green-500 shadow-sm px-7 text-green-50 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                    Go to checkout
                </Link>
            </div>
        </div>
    );
};

export default CartDropdown;

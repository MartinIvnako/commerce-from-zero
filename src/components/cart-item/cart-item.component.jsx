import { Link } from "react-router-dom";
const CartItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <Link
            to="/"
            className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
            <div className="flex-shrink-0">
                <img
                    className="rounded-full w-11 h-11"
                    src={imageUrl}
                    alt={name}
                />
            </div>
            <div className="w-full pl-3">
                <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                    {name}
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-500">
                    {quantity}&nbsp;x&nbsp;{price}&nbsp;€
                </div>
            </div>
        </Link>
    );
};

export default CartItem;

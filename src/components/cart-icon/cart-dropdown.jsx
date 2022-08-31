import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="relative ">
            <div
                className=" absolute right-0 top-6 z-20 w-[220px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700"
                aria-labelledby="dropdownNotificationButton"
            >
                <div className="divide-y divide-gray-100 dark:divide-gray-700  max-h-[50vh]  overflow-auto">
                    {products.map(({ id, imageUrl, name, price }) => (
                        <a
                            href="/"
                            className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                            key={id}
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
                                    {price}&nbsp;€
                                </div>
                            </div>
                        </a>
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

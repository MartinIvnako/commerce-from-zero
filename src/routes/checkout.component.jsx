import { CloseCircle, ArrowSquareLeft, ArrowSquareRight } from "iconsax-react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartItemsState } from "../state/cart-items-state.atom";
import { cartCountState } from "../state/cart-count-state.selector";

const Checkout = () => {
    const cartItems = useRecoilValue(cartItemsState);
    const cartCount = useRecoilValue(cartCountState);
    const addItemsToCart = useSetRecoilState(cartItemsState);

    const selectItem = (product) => {
        addItemsToCart((oldCartItems) => {
            const existingCartItem = oldCartItems.find(
                (cartItem) => cartItem.id === product.id
            );

            if (existingCartItem) {
                return oldCartItems.map((cartItem) =>
                    cartItem.id === product.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : { ...cartItem }
                );
            }

            return [...oldCartItems, { ...product, quantity: 1 }];
        });
    };

    return (
        <section className="py-12 bg-coolGray-50 md:py-24">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center justify-between mb-4 -m-2">
                    <div className="w-full p-2 md:w-1/2">
                        <p className="text-xl font-semibold text-coolGray-800">
                            Checkout
                        </p>
                        <p className="text-sm font-medium text-coolGray-500">
                            {cartCount} Items in Cart
                        </p>
                    </div>
                </div>

                <div className="overflow-hidden border rounded-md border-coolGray-100 shadow-dashboard">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <tbody>
                                <tr className="border-b whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-coolGray-100">
                                    <th className="px-4 text-xs font-semibold text-left uppercase text-coolGray-500">
                                        <div className="flex items-center">
                                            <p>Product</p>
                                        </div>
                                    </th>
                                    <th className="px-4 text-xs font-semibold text-left uppercase whitespace-nowrap text-coolGray-500">
                                        Description
                                    </th>
                                    <th className="px-4 text-xs font-semibold text-center uppercase whitespace-nowrap text-coolGray-500">
                                        Quantity
                                    </th>
                                    <th className="px-4 text-xs font-semibold text-center uppercase whitespace-nowrap text-coolGray-500">
                                        Price
                                    </th>
                                    <th className="px-4 text-xs font-semibold text-center uppercase whitespace-nowrap text-coolGray-500">
                                        remove
                                    </th>
                                </tr>
                                {cartItems.map((product) => (
                                    <tr
                                        className="h-16 border-b border-coolGray-100"
                                        key={product.id}
                                    >
                                        <th className="px-4 text-left bg-white whitespace-nowrap">
                                            <div className="flex items-center -m-2">
                                                <div className="w-auto p-2">
                                                    <div className="relative flex items-center justify-center w-10 h-10 text-base font-medium text-yellow-600 bg-yellow-200 rounded-md ">
                                                        <img
                                                            className="object-cover w-full h-full rounded-t"
                                                            src={
                                                                product.imageUrl
                                                            }
                                                            alt={product.name}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">
                                                        {product.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="px-4 text-sm font-medium text-left bg-white whitespace-nowrap text-coolGray-800">
                                            United Kingdom
                                        </th>
                                        <th className="px-4 text-sm font-medium bg-white whitespace-nowrap text-coolGray-800 ">
                                            <div className="flex justify-center px-4 text-sm font-medium text-center bg-white whitespace-nowrap text-coolGray-800">
                                                <ArrowSquareLeft
                                                    size="20"
                                                    color="#556987"
                                                />
                                                <span className="px-4 ">
                                                    {product.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        selectItem(product)
                                                    }
                                                >
                                                    <ArrowSquareRight
                                                        size="20"
                                                        color="#556987"
                                                    />
                                                </button>
                                            </div>
                                        </th>
                                        <th className="px-4 text-sm font-medium text-center text-green-500 bg-white whitespace-nowrap">
                                            {product.price}
                                        </th>
                                        <th className="px-4 text-sm font-medium text-green-500 bg-white whitespace-nowrap">
                                            <CloseCircle
                                                size="20"
                                                color="#556987"
                                                className="m-auto"
                                            />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;

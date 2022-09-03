import { CloseCircle, ArrowSquareLeft, ArrowSquareRight } from "iconsax-react";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";

const Checkout = () => {
    const { cartItems, cartCount, addItemsToCart } = useContext(CartContext);
    return (
        <section class="bg-coolGray-50 py-12  md:py-24">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap items-center justify-between -m-2 mb-4">
                    <div class="w-full md:w-1/2 p-2">
                        <p class="font-semibold text-xl text-coolGray-800">
                            Checkout
                        </p>
                        <p class="font-medium text-sm text-coolGray-500">
                            {cartCount} Items in Cart
                        </p>
                    </div>
                </div>

                <div class="overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard">
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <tbody>
                                <tr class="whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-b border-coolGray-100">
                                    <th class="px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">
                                        <div class="flex items-center">
                                            <p>Product</p>
                                        </div>
                                    </th>
                                    <th class="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">
                                        Description
                                    </th>
                                    <th class="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">
                                        Quantity
                                    </th>
                                    <th class="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">
                                        Price
                                    </th>
                                    <th class="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">
                                        remove
                                    </th>
                                </tr>
                                {cartItems.map((product) => (
                                    <tr
                                        class="h-16 border-b border-coolGray-100"
                                        key={product.id}
                                    >
                                        <th class="whitespace-nowrap px-4 bg-white text-left">
                                            <div class="flex items-center -m-2">
                                                <div class="w-auto p-2">
                                                    <div class=" relative flex items-center justify-center w-10 h-10 text-base font-medium text-yellow-600 bg-yellow-200 rounded-md">
                                                        <img
                                                            className="object-cover w-full h-full rounded-t"
                                                            src={
                                                                product.imageUrl
                                                            }
                                                            alt={product.name}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="w-auto p-2">
                                                    <p class="text-xs font-semibold text-coolGray-800">
                                                        {product.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">
                                            United Kingdom
                                        </th>
                                        <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 ">
                                            <div class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 flex justify-center text-center">
                                                <ArrowSquareLeft
                                                    size="20"
                                                    color="#556987"
                                                />
                                                <span class=" px-4 ">
                                                    {product.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        addItemsToCart(product)
                                                    }
                                                >
                                                    <ArrowSquareRight
                                                        size="20"
                                                        color="#556987"
                                                    />
                                                </button>
                                            </div>
                                        </th>
                                        <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center">
                                            {product.price}
                                        </th>
                                        <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500">
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

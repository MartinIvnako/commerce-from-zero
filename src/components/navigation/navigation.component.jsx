import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import Button from "./../button/button.component";
import { signOutUser } from "./../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";

export default function Navigation() {
    const { currentUser } = useContext(UserContext);

    const navigationLinks = [
        {
            id: 1,
            title: "Shop",
            link: "/shop",
        },
        {
            id: 2,
            title: "Products",
            link: "/",
        },
        {
            id: 3,
            title: "Pricing",
            link: "/",
        },
    ];

    return (
        <div className="relative z-20 mb-6 bg-white drop-shadow-md">
            <header className="flex justify-between p-6 px-4">
                <div className="flex items-center justify-between w-full">
                    <div className="xl:w-1/3">
                        <Link className="block max-w-max" to="/">
                            <img
                                className="h-8"
                                src="https://shuffle.dev/flex-ui-assets/logos/flex-ui-green-light.svg"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="xl:w-2/3">
                        <div className="flex items-center justify-end">
                            <ul className="flex items-center">
                                {navigationLinks.map((navLink) => (
                                    <li className="mr-6" key={navLink.id}>
                                        <Link
                                            className="font-medium text-coolGray-500 hover:text-coolGray-900"
                                            to={navLink.link}
                                        >
                                            {navLink.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="px-4 text-coolGray-500">|</div>
                            {!currentUser && (
                                <div className="grid grid-cols-2 gap-3">
                                    <Link
                                        className="px-6 py-2 text-sm font-bold text-gray-900 transition duration-200 bg-gray-50 hover:bg-gray-100 rounded-xl"
                                        to="/sign-in"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        className="px-6 py-2 text-sm font-bold transition duration-200 bg-gray-900 text-gray-50 hover:bg-gray-700 rounded-xl"
                                        to="/sign-up"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                            {currentUser && (
                                <Button
                                    onClick={signOutUser}
                                    buttonType="secondary"
                                >
                                    Log out
                                </Button>
                            )}

                            <CartIcon />
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </div>
    );
}

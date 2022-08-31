import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import Button from "./../button/button.component";
import { signOutUser } from "./../../utils/firebase/firebase.utils";

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
        <header>
            <section className="mb-6 bg-white drop-shadow-md">
                <nav className="flex justify-between p-6 px-4">
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
                        <div className="xl:w-1/3">
                            <ul className="flex justify-center">
                                {navigationLinks.map((navLink) => (
                                    <li className="mr-12" key={navLink.id}>
                                        <Link
                                            className="font-medium text-coolGray-500 hover:text-coolGray-900"
                                            to={navLink.link}
                                        >
                                            {navLink.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="xl:w-1/3">
                            <div className="flex items-center justify-end">
                                {!currentUser && (
                                    <>
                                        <Link
                                            className="inline-block px-4 py-2 mr-2 font-medium leading-5 bg-transparent rounded-md text-coolGray-500 hover:text-coolGray-900"
                                            to="/sign-in"
                                        >
                                            Log In
                                        </Link>
                                        <Link
                                            className="inline-block px-4 py-2 text-sm font-medium leading-5 bg-green-500 rounded-md text-green-50 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                            to="/sign-up"
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                                {currentUser && (
                                    <Button onClick={signOutUser}>
                                        Log out
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <Outlet />
        </header>
    );
}

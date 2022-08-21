import { Link } from "react-router-dom";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export default function SignIn() {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <section className="py-24 bg-white md:py-32">
            <div className="container px-4 mx-auto">
                <div className="max-w-sm mx-auto">
                    <div className="mb-6 text-center">
                        <Link className="inline-block mb-6" to="/">
                            <img
                                className="h-16"
                                src="https://shuffle.dev/flex-ui-assets/logos/flex-circle-green.svg"
                                alt=""
                            />
                        </Link>
                        <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                            Sign in to your account
                        </h3>
                        <p className="text-lg font-medium text-coolGray-500">
                            Start your demo version
                        </p>
                    </div>
                    <form action="">
                        <div className="mb-6">
                            <label
                                className="block mb-2 font-medium text-coolGray-800"
                                htmlFor=""
                            >
                                Email
                            </label>
                            <input
                                className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                type="email"
                                placeholder="dev@shuffle.dev"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 font-medium text-coolGray-800"
                                htmlFor=""
                            >
                                Password
                            </label>
                            <input
                                className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                type="password"
                                placeholder="************"
                            />
                        </div>
                        <div className="flex flex-wrap items-center justify-between mb-6">
                            <div className="w-full md:w-1/2">
                                <label className="relative inline-flex items-center">
                                    <input
                                        className="appearance-none form-checkbox"
                                        type="checkbox"
                                    />
                                    <img
                                        className="absolute left-0 transform -translate-y-1/2 top-1/2"
                                        src="https://shuffle.dev/flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                                        alt=""
                                    />
                                    <span className="text-xs font-medium ml-7 text-coolGray-800">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <div className="w-full mt-1 md:w-auto">
                                <Link
                                    className="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                                    to="/"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        <button
                            className="inline-block w-full py-3 mb-6 text-base font-medium leading-6 text-center bg-green-500 rounded-md shadow-sm px-7 text-green-50 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            onClick={logGoogleUser}
                            type="button"
                        >
                            Sign In
                        </button>
                        <p className="text-center">
                            <span className="text-xs font-medium">
                                Don’t have an account?
                            </span>
                            <Link
                                className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                                to="/"
                            >
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

import { Link } from "react-router-dom";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

export default function SignUpForm() {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <>
            <div className="mb-6 text-center">
                <Link className="inline-block mb-6" to="/">
                    <img
                        className="h-16"
                        src="https://shuffle.dev/flex-ui-assets/logos/flex-circle-green.svg"
                        alt=""
                    />
                </Link>
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                    Join our community
                </h3>
                <p className="text-lg font-medium text-coolGray-500">
                    Start your journey with our product
                </p>
            </div>
            <form action="">
                <div className="mb-6">
                    <label
                        className="block mb-2 font-medium text-coolGray-800"
                        htmlFor=""
                    >
                        Name*
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Patryk"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block mb-2 font-medium text-coolGray-800"
                        htmlFor=""
                    >
                        Email*
                    </label>
                    <input
                        className="form__input"
                        type="email"
                        placeholder="dev@shuffle.dev"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block mb-2 font-medium text-coolGray-800"
                        htmlFor=""
                    >
                        Password*
                    </label>
                    <input
                        className="form__input"
                        type="password"
                        placeholder="************"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block mb-2 font-medium text-coolGray-800"
                        htmlFor=""
                        required
                    >
                        Confirm password*
                    </label>
                    <input
                        className="form__input"
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
                <Link
                    className="inline-block w-full py-3 mb-4 text-base font-medium leading-6 text-center bg-green-500 rounded-md shadow-sm px-7 text-green-50 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    to="/"
                >
                    Sign Up
                </Link>
                <button
                    className="inline-flex items-center justify-center w-full py-3 mb-6 text-base font-medium leading-6 text-center bg-white border rounded-md shadow-sm px-7 text-coolGray-500 border-coolGray-100 hover:border-coolGray-200"
                    type="button"
                    onClick={logGoogleUser}
                >
                    <img
                        className="mr-2"
                        src="https://shuffle.dev/flex-ui-assets/elements/sign-up/google-icon-sign-up.svg"
                        alt=""
                    />
                    <span>Sign in with Google</span>
                </button>
                <p className="text-center">
                    <span className="text-xs font-medium">
                        Already have an account?
                    </span>
                    <Link
                        className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                        to="/"
                    >
                        Sign In
                    </Link>
                </p>
            </form>
        </>
    );
}

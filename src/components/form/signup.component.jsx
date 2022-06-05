import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
                <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                    Sign in to your account
                </h3>
            </div>
            <form action="">
                <div className="mb-6">
                    <label
                        className="block mb-2 text-coolGray-800 font-medium"
                        htmlFor=""
                    >
                        Display name
                    </label>
                    <input
                        className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                        type="email"
                        placeholder="Martin Ivanko"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block mb-2 text-coolGray-800 font-medium"
                        htmlFor=""
                    >
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                        type="email"
                        placeholder="dev@shuffle.dev"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block mb-2 text-coolGray-800 font-medium"
                        htmlFor=""
                    >
                        Password
                    </label>
                    <input
                        className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                        type="password"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block mb-2 text-coolGray-800 font-medium"
                        htmlFor=""
                    >
                        Confirm Password
                    </label>
                    <input
                        className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                        type="password"
                    />
                </div>

                <Link
                    className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                    to="/"
                >
                    Sign In
                </Link>
            </form>
        </div>
    );
}

import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import {
    createUserDocumentFromAuth,
    signInAuthWithEmailAndPassword,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    email: "",
    password: "",
};

export default function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        setCurrentUser(user);
        await createUserDocumentFromAuth(user);
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthWithEmailAndPassword(
                email,
                password
            );
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("Incorrect password for email.");
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this email.");
                    break;
                default:
                    console.log("", error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
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
                    Sign in to your account
                </h3>
                <p className="text-lg font-medium text-coolGray-500">
                    Start your demo version
                </p>
            </div>
            <form onSubmit={handleSubmit} action="">
                <div className="mb-6">
                    <FormInput
                        label="Email*"
                        type="email"
                        placeholder="dev@shuffle.dev"
                        required
                        onChange={handleChange}
                        value={email}
                        name="email"
                    />
                </div>
                <div className="mb-4">
                    <FormInput
                        label="Password*"
                        type="password"
                        placeholder="************"
                        required
                        onChange={handleChange}
                        value={password}
                        name="password"
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

                <Button buttonType="primary" type="submit">
                    Sign In
                </Button>
                <Button
                    buttonType="google"
                    type="button"
                    onClick={signInWithGoogle}
                >
                    <span>Sign in with Google</span>
                </Button>
                <p className="text-center">
                    <span className="text-xs font-medium">
                        Don’t have an account?
                    </span>
                    <Link
                        className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                        to="/sign-up"
                    >
                        &nbsp; Sign up
                    </Link>
                </p>
            </form>
        </>
    );
}

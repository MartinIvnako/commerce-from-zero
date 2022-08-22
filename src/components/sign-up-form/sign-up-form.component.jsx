import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

  const {setCurrentUser} =   useContext(UserContext);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        setCurrentUser(user);
         await createUserDocumentFromAuth(user);
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
             setCurrentUser(user);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use.");
            }
            console.log("user creation encountered an error", error);
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
                    Join our community
                </h3>
                <p className="text-lg font-medium text-coolGray-500">
                    Start your journey with our product
                </p>
            </div>
            <form onSubmit={handleSubmit} action="">
                <div className="mb-6">
                    <FormInput
                        label="Name*"
                        type="text"
                        placeholder="Patryk"
                        required
                        onChange={handleChange}
                        value={displayName}
                        name="displayName"
                    />
                </div>
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
                <div className="mb-4">
                    <FormInput
                        label="Confirm password*"
                        type="password"
                        placeholder="************"
                        required
                        onChange={handleChange}
                        value={confirmPassword}
                        name="confirmPassword"
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
                    Sign Up
                </Button>
                <Button
                    buttonType="google"
                    type="button"
                    onClick={logGoogleUser}
                >
                    <span>Sign in with Google</span>
                </Button>
                <p className="text-center">
                    <span className="text-xs font-medium">
                        Already have an account?
                    </span>
                    <Link
                        className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                        to="/sign-in"
                    >
                        &nbsp; Sign In
                    </Link>
                </p>
            </form>
        </>
    );
}

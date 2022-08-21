import { Link } from "react-router-dom";
import SignInForm from "../components/sign-in-form/sign-up-form.component";
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
                    <SignInForm />
                </div>
            </div>
        </section>
    );
}

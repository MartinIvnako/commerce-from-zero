import SignUpForm from "../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopup } from "../utils/firebase/firebase.utils";

export default function SignUp() {
    return (
        <section className="py-24 bg-white md:py-32">
            <div className="container px-4 mx-auto">
                <div className="max-w-sm mx-auto">
                    <SignUpForm />
                </div>
            </div>
        </section>
    );
}

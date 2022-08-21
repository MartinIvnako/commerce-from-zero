import SignInForm from "../components/sign-in-form/sign-in-form.component";

export default function SignIn() {
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

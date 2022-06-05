import SignIn from "../components/form/signin.component";
import SignUp from "../components/form/signup.component";

export default function Sign() {
    return (
        <section class="relative pt-16 pb-0 md:py-32 bg-white">
            <div class="flex flex-wrap container px-4 mx-auto mb-16">
                <SignIn />
                <SignUp />
            </div>
        </section>
    );
}

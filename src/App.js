import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home.component";
import SignIn from "./routes/sign-in.component";
import SignUp from "./routes/sign-up.component";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="sign-in" element={<SignUp />} />
                <Route path="sign-up" element={<SignIn />} />
            </Route>
        </Routes>
    );
}

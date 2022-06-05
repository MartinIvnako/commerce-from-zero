import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home.component";
import Sign from "./routes/sign.component";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="sign" element={<Sign />} />
            </Route>
        </Routes>
    );
}

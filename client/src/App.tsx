import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";
import { useAppSelector } from "./redux/hook";

function App() {
    const user = useAppSelector((state) => state.user);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login></Login>} />
                <Route path="/sign-up" element={<SignUp></SignUp>} />
                {user.id && <Route path="/home" element={<Home></Home>} />}
                <Route
                    path="*"
                    element={
                        <div>
                            <h1>Error 404: Page not found</h1>
                        </div>
                    }
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;

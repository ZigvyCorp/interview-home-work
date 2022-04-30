import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header/Header";
import { verifyJwtThunk } from "./services/auth/auth.thunk";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";

function App() {
    const dispatch = useDispatch();

    const { auth } = useSelector((state) => ({
        auth: state.auth,
        loading: state.loading,
    }));

    useEffect(() => {
        dispatch(verifyJwtThunk());
    }, [dispatch]);

    return (
        <BrowserRouter>
            {auth.isLogin ? (
                <Layout>
                    <Layout>
                        <Header />
                        <Routes>
                            <Route path="/home" element={<HomePage />} />
                            <Route
                                path="/*"
                                element={<Navigate to="/home"></Navigate>}
                            ></Route>
                        </Routes>
                    </Layout>
                </Layout>
            ) : (
                <Routes>
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to="/auth/login" />} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import axiosInstance from "./utils/axios";
import { store } from "./redux/store.js";
axiosInstance.interceptors.request.use((req) => {
  const token = store.getState().auth.token;
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  }
  return req;
});
function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
        </Route>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

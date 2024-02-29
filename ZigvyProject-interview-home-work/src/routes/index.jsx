import { React, useLayoutEffect } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";

// import ForgotPassword from "../pages/ForgotPassword";
import Notfound from "../pages/Notfound";
import SignUp from "../pages/SignUp";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          {/* <Route path="/forgotpassword" element={<ForgotPassword />} /> */}

          {/* Home */}
          <Route
            path="/"
            element={
              // <PrivateRoute>
              <Home />
              // </PrivateRoute>
            }
          />

          {/* Not found page */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

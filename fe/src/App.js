import React from "react";
import { Layout, theme } from "antd";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./containers/pages/Home";
import HeaderHome from "./components/Header";
import FooterComponent from "./components/Footer";
import Login from "./containers/pages/Login";
import PostDetail from "./components/PostDetail";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";

const App = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <HeaderHome />
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
          <FooterComponent />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;

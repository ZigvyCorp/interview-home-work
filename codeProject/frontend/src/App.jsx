import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register";
import CreatePost from "./components/CreatePost";
import PostDetail from "./components/PostDetail";
import UpdateProfile from "./components/UpdateProfile";
import Layout from "./components/LayoutComponent";
import HomeComponent from "./components/Home/HomeComponent";
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<HomeComponent />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/profile" element={<UpdateProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};
{
}

export default App;

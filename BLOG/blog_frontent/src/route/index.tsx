import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import ErrorPage from "pages/404Page";
import LoginPage from "pages/loginPage";
import DetailPostPage from "pages/detailPostPage";

const MainRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/log-in" element={<LoginPage />} />
      <Route path="/detail-post/:postId" element={<DetailPostPage />} />
    </Routes>
  );
};

export default MainRoute;

// routes/index.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogList from "../components/Blog/BlogList";

import SearchBar from "../components/SearchBar";
import BlogDetail from "../components/Blog/BlogDetail";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/:id" element={<BlogDetail />} />
        <Route path="/*" element={<SearchBar />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

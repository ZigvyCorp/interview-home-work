import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import React from "react";
import { HomePage } from "./page/HomePage/HomePage";
import { Layout } from "./template/Layout";
import { DetailPost } from "./page/DetailPost/DetailPost";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path='/detail/:id'
          element={
            <Layout>
              <DetailPost />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

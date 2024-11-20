import React, { useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import ErrorPage from "../pages/ErrorPage";

function RootRoutes() {
  const { pathname } = useLocation();
  const key = useMemo(() => {
    return pathname.split("/").pop();
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:postId" element={<DetailPage key={key} />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default RootRoutes;

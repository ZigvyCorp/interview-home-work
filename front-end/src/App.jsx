import { Content } from "antd/es/layout/layout";
import "./assets/css/style.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "./constants/path";
import HomePage from "./pages/HomePage";
import BlogDetailPage from "./pages/BlogDetailPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlogsFetch } from "./store/reducers/blogReducer";
import { handleGetUsers } from "./store/reducers/userReducer";
import { handleGetComments } from "./store/reducers/commentReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogsFetch());
    dispatch(handleGetUsers());
    dispatch(handleGetComments());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path={PATHS.HOME}>
          {/* Home page */}
          <Route index element={<HomePage />} />

          {/* Blog detail page */}
          <Route element={<BlogDetailPage />} path={PATHS.BLOG_DETAIL} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

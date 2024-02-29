import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomBar from "./component/CustomBar";

import "./App.css";
import { getComment } from "./features/comment/commentSlice";
import { getPost } from "./features/post/postSlice";
import { getUser } from "./features/user/userSlice";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getPost());
    dispatch(getComment());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<BlogPage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

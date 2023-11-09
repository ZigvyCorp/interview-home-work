import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PostDetail from "../Pages/Post_Detail/PostDetail";
export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
  );
}

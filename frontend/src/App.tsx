import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePostForm from "./pages/CreatePostForm";
import PostDetail from "./pages/PostDetail";
import PostList from "./pages/PostList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts/new" element={<CreatePostForm />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

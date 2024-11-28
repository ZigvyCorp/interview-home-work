import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Pages/HomePage";
import PostsList from "./Components/PostsList";
import PostDetail from "./Components/PostDetail";
import NotFoundPage from "./Pages/NotFoundPage";
import RenderFilterPost from "./Components/RenderFilterPost";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
            <Route path="" element={<PostsList />} />
            <Route path="blog/:postId" element={<PostDetail />} />
            <Route path="search/" element={<RenderFilterPost />}/>
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

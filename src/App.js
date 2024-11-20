import "./App.css";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import PostItem from "./components/PostItem";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./components/posts.js";
import Home from "./components/home.js";
import PostDetail from "./components/postDetail.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/blogs" element={<Posts />} />
        </Routes>
        <Routes>
          <Route exact path="/blog-detail" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

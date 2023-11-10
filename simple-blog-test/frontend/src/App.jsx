import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PostList from "./components/PostList";
import PostDetail from "./pages/PostDetail";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<PostList />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
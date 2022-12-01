import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Layout from "./Layout";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import SearchResult from "./pages/SearchResult";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path="/posts" element={<Layout><SearchResult/></Layout>}/>
        <Route path="/posts/:postId" element={<Layout><PostDetail/></Layout>}/>
        <Route path="/users" element={<Layout><Users/></Layout>}/>
      </Routes>
    </Router>
  );
}

export default App;

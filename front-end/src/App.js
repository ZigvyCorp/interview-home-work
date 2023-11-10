import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import PostDetail from "./pages/PostDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" exact element={<MainLayout />}>
            <Route path="" exact element={<HomePage />} />
            <Route path="/posts/:id" exact element={<PostDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

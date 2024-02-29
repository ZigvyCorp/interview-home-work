import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DetailPage, Home, PostPage } from "./containers";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<PostPage />} />
          <Route path={"/:id"} element={<DetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

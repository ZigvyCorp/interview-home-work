
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Detail from "./pages/Detail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomeLayout />} >
            <Route index element={<Home/>}/>
            <Route path="posts/:id" element={<Detail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

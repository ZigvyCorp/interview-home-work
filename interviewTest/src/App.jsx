import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

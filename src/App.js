import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Component={HomePage} />} />
        <Route path="/detail/:id" element={<Layout Component={DetailPage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

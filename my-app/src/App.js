import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Route/HomePage/HomePage";
import LoginPage from "./Route/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
export default App;

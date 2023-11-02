import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Blog />}/>
            <Route path='/:id' element={<BlogDetail />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

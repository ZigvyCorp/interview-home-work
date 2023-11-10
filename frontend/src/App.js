import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import PostDetailPage from './Pages/PostDetailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/> } />
        <Route path="/post-detail/:idPost" element={<PostDetailPage/> } />
      </Routes>
    </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import PostDetail from './components/PostDetail';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>

          <Route path='/post/:postId'
            element={<PostDetail />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

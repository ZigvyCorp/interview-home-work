import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Home';
import Blog from './pages/Blog';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<HomePage />} />
            <Route path="/post/:id" element={<Blog />} />
        </Routes>
    );
}

export default App;

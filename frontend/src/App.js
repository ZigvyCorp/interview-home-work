import './App.css';
import User from './user';
import Post from './post';
import Comment from './comment';
import Home from './home';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/post" element={<Post />} />
            <Route path="/comment" element={<Comment />} />
          </Routes>
        </BrowserRouter>
      </div>
      </header>
    </div>
  );
}

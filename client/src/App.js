import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Users from './pages/Users';
import SearchResults from './pages/SearchResults';
import Layout from './layouts';

function App() {
  return (
      <Routes>
         <Route path='/users' element={<Layout> <Users /></Layout>} />
         <Route path='/posts' element={<Layout> <SearchResults /></Layout>} />
         <Route path='/posts/:id' element={<Layout> <Detail /></Layout>} />
         <Route path='/' element={<Layout> <Home /></Layout>} />
      </Routes>
  );
}

export default App;

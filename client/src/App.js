import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts';

function App() {
  return (
      <Routes>
         <Route path='/' element={<Layout> <Home /></Layout>} />
      </Routes>
  );
}

export default App;

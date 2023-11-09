import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Homepage/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='mb-5'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

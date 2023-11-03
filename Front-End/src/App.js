import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeTemplate from '../src/pages/HomePage/index';
import Loader from './components/Loader/index';
import Home from './pages/HomePage/Home';
import DetailPage from './pages/HomePage/DetailPage';
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          {/* HomeTemplate */}
          <Route path='' element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:id' element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

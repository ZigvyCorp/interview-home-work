import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import UserTemplate from './template/UserTemplate';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserTemplate/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

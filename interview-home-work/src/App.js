import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PostDetail from './Pages/PostDetail/PostDetail';
import BackTopTop from './Components/BackTopTop/BackTopTop'

function App() {
  return <>
  <BackTopTop />
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="post_detail">
          <Route path=":id" element={<PostDetail />}/>
        </Route>
        <Route path="*" element={'Page not found'}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;

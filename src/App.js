import  Homepage   from './component/Homepage'
import ItemPost from './component/ItemPost';
import { Route,Routes } from 'react-router-dom';
// import SearchTitle from './component/SearchTitle';
import DetailPost from './component/DetailPost';
import AppHeader from './component/AppHeader';
import AppFooter from './component/AppFooter';
function App() {
  return (
    <div>
    <AppHeader/>
        <Routes>
           <Route path="*" element={<Homepage/>} />
           <Route path="/posts/:postId" element={<DetailPost/>} />
       </Routes>
    <AppFooter/>
    </div>
  );
}
export default App;

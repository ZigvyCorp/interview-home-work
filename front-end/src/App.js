
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Menu from './components/Menu';
import Blog from './pages/Blog';
import CreatePost from './pages/Createpost';
import { ToastContainer, toast } from 'react-toastify';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
  
    <Routes>
      <Route path='/' element={<Blog/>} />
      <Route path="/create" element={<CreatePost/>} />
      <Route path="/signIn" element={<SignIn/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;

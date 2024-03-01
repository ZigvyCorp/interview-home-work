import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from './store/actions'
import Header from './containers/Header'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getUserById(1))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path='/posts/:id' element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { userActions } from './store/user/userSlice';
import { commentActions } from './store/comment/commentSlice';

import Header from './components/Header';
import Home from './pages/Home';
import PostsSearch from './pages/PostsSearch';
import PageNotFound from './pages/PageNotFound';
import PostDetails from './pages/PostDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.fetchUserList());
    dispatch(commentActions.fetchCommentList());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/search' element={<PostsSearch />} />
        <Route path='/posts/:id' element={<PostDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

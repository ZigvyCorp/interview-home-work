import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './routes';
import { persistor } from './store';
import { getMe } from './store/auth/actions';

import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router />
      <ToastContainer autoClose={1000} limit={1} position='bottom-right' />
    </PersistGate>
  );
}

export default App;

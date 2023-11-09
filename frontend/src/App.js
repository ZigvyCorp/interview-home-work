import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './routes';
import { getMe } from './store/auth/actions';
import { persistor } from './store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <PersistGate loading={<p1>ahihi</p1>} persistor={persistor}>
      <Router />
    </PersistGate>
  );
}

export default App;

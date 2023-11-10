import { Provider } from 'react-redux';
import store from './store';
import HomePage from './screens/HomePage';

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;

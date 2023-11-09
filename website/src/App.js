import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import store from './redux/store';
import Home from './pages/home/Home';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <TopBar />
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

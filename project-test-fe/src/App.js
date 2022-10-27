// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import DetailPost from './pages/DetailPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App= () => {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Header />
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/:id" element={<DetailPost />} />
          </Routes>
        </div>
      </Router> 
    </div>
  );
}

export default App;

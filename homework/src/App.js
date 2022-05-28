import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HomeTemplate from "./templates/home-template";

const HomeComponent = HomeTemplate(Home);

function App() {
  return (
    <BrowserRouter>
      < div className="zigvy-blog" >
        <Routes>
          <Route path="/" element={<HomeComponent />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;

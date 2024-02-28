import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './views/HomePage'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss"

function App() {

  return (
    <div className="app-container">
      <Header />
      <div className="navbar-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

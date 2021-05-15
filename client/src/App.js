import 'antd/dist/antd.css'; 
import { BrowserRouter as Router,  } from 'react-router-dom';
import Header from "./components/header/Header";
import MainPage from "./components/mainPage/Page";
function App() {
  return (
    <>
      <Router>
        <Header />
        <MainPage />
      </Router>
    </>
  );
}

export default App;

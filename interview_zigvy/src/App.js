import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
function App() {
  return (
    <div className="App">
   <Navbar />
   <Posts />
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import MainRoute from "./route";
import LayoutWrapper from "./layout";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper content={<MainRoute />} />
    </BrowserRouter>
  );
}

export default App;

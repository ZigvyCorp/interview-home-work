
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom"
import routes from "./routes"

function App() {

  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        )
        )}
      </Routes>

    </div>
  );
}

export default App;

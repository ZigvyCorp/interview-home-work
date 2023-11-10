import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <NavigationBar/>
      <Home/>
    </div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

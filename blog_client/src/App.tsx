import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListPost from "./features/post/pages/ListPost";
import PostDetail from "./features/post/pages/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: ListPost,
  },
  {
    path: "/post/:id",
    Component: PostDetail,
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-end"
          ></Navbar.Collapse>
        </Container>
      </Navbar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

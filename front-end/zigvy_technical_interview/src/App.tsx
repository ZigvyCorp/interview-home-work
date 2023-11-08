import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListPost from "./screen/ListPost";
import DetailPost from "./screen/DetailPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="container-fluid">
        <header
          className="d-flex justify-content-between flex-row"
          style={{ border: "3px solid black" }}
        >
          <div className="d-flex justify-content-center flex align-items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/message-app-b0e83.appspot.com/o/DH-Hoa-Sen-Main-Icon.png?alt=media&token=e67fe95b-65cd-4059-91c8-bc8f00c68a29&_gl=1*17tsuf4*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5OTQxMjkwMS4yOS4xLjE2OTk0MTI5NjguNTMuMC4w"
              className="float-left"
              style={{ width: "70px", height: "70px" }}
            />
            <p style={{}}>Adam Levine</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              border: "3px solid black",
              borderTop: "none",
              borderBottom: "none",
            }}
          >
            <p style={{ marginLeft: "30px", marginRight: "30px" }}>Blogs</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/message-app-b0e83.appspot.com/o/DH-Hoa-Sen-Main-Icon.png?alt=media&token=e67fe95b-65cd-4059-91c8-bc8f00c68a29&_gl=1*17tsuf4*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5OTQxMjkwMS4yOS4xLjE2OTk0MTI5NjguNTMuMC4w"
              className="float-left"
              style={{ width: "70px", height: "70px" }}
            />
            <p style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              Adam Levine
            </p>
          </div>
        </header>
        <div className="mt-3">
          <input placeholder="Search" />
          <button className="mx-2 rounded">Search</button>
        </div>
        <Routes>
          <Route path="/" Component={ListPost} />
          <Route path="/posts" Component={ListPost} />
          <Route path="/posts/:postId" Component={DetailPost} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

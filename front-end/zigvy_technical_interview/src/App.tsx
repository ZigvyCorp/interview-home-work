import "bootstrap/dist/css/bootstrap.min.css";

import ListPost from "./screen/ListPost";
import DetailPost from "./screen/DetailPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [valueSearch, setValueSearch] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(event.target.value);
  };

  return (
    <BrowserRouter basename="/">
      <div className="container-fluid">
        <header
          className="d-flex justify-content-between flex-row"
          style={{ border: "3px solid black" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <div
              style={{ height: "70px", width: "70px", backgroundColor: "grey" }}
            ></div>
            <p style={{ marginLeft: "3px" }}>Logo</p>
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
            <div
              style={{ height: "70px", width: "70px", backgroundColor: "grey" }}
            ></div>
            <p style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              Adam Levine
            </p>
          </div>
        </header>
        <div className="mt-3">
          <input
            style={{ width: "300px" }}
            placeholder="Search"
            onChange={handleInputChange}
          />
        </div>
        <Routes>
          <Route path="/" element={<ListPost searchValue={valueSearch} />} />
          <Route
            path="/posts"
            element={<ListPost searchValue={valueSearch} />}
          />
          <Route path="/posts/:postId" element={<DetailPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

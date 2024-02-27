"use client";
import { useState } from "react";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("first");
    window.location.href = `/posts`;
    // history.push("/posts");
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div id="emailHelp" className="form-text mb-3" style={{ color: "red" }}>
        This form is an page to redirect to posts page, it's doesn't matter I
        didn't handle anything in this page, sorry about that
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Đăng Nhập</h5>
          <div className="mb-3">
            <label for="inputEmail" className="form-label">
              Email
            </label>
            <input className="form-control" value={"admin"} onChange={null} />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="inputPassword" className="form-label" onChange={null}>
              Mật khẩu
            </label>
            <input
              type="password"
              className="form-control"
              value={"admin"}
              id="inputPassword"
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" onClick={handleLogin}>
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import users from "./users.json";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setSignedIn, setUserData } from "./redux/useSlice.js";
import { Container } from "react-bootstrap";
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      dispatch(setSignedIn(true));
      dispatch(setUserData(user));
      navigate("/");
      alert("Đăng nhập thành công!");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center bg-light"
      style={{ marginTop: "50px", padding: "20px" }}
    >
      <div>
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập:</label>
            <input
              type="username"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên đăng nhập"
              style={{ width: "200px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              style={{ width: "200px" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </Container>
  );
}

export default LoginPage;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import img_blogs from "../imgs/blogs.png";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";

import { useSelector } from "react-redux/es/hooks/useSelector";

import { getAllUsers } from "../redux/apiRequest/userAPI";

function App() {
  const users = useSelector((state) => state.users);

  return (
    <Provider store={store}>
      <div className="container">
        <img src={img_blogs} alt="" width={"100%"} />
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </Provider>
  );
}

export default App;

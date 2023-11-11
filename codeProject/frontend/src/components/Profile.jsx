// src/pages/Profile.js

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../redux/actions/userActions";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdateProfile = () => {
    dispatch(updateUserProfile({ name, email }));
  };

  return (
    <div>
      <h2>Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default Profile;

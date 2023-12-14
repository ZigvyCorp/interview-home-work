import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', {
        username,
        password,
      });

      console.log(response.data);
      // Handle success, redirect, etc.
    } catch (error) {
      console.error(error.response.data.message);
      // Handle errors, display error messages, etc.
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

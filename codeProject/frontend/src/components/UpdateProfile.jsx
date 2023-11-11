import React, { useState } from "react";
import axios from "axios";

const UpdateProfile = ({ userId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.put(`/users/${userId}`, { name, email });
      console.log(response.data); // Log response data for testing purposes
      // Handle success, display success message or redirect to another page
    } catch (error) {
      setError("Failed to update profile");
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update"}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default UpdateProfile;

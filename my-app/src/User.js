import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function User({ id, onGetName }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUsername(response.data.name);
        onGetName(response.data.name);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id, onGetName]);

  return (
    <Card.Subtitle className="text-left">{`Author: ${username}`}</Card.Subtitle>
  );
}

export default User;

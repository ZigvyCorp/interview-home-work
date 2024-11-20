import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

const Author = ({ id }) => {
  const { allUsers, loading } = useSelector(selectUser);
  const [name, setName] = useState("");
  useEffect(() => {
    const author = allUsers.find((user) => user.id === id);
    setName(author?.name);
  }, [allUsers]);
  if (loading) return <Spin />;
  return <div>Author: {name}</div>;
};

export default Author;

import './App.css';
import React from "react";
import { Link } from "react-router-dom";
  
export default function Home(){
  return (
    <div>
      <div>HOME PAGE</div>
      <Link to="/user">User</Link><br/><br/>
      <Link to="/post">Post</Link><br/><br/>
      <Link to="/comment">Comment</Link>
    </div>
  );
};
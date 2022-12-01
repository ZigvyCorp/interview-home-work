import React from 'react'
import { useSelector } from "react-redux";

const Users = ({id}) => {
    const { users } = useSelector((state) => {
        return { users: state.users };
      });
      const userPost = users.filter((user)=>user.id=== id)
  return (
   <div>
    {userPost.map((user)=>{return (<div>Author: {user.name}</div>)})}
   </div>
  )
}

export default Users
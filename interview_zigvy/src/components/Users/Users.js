import axios from "axios";
import React, { useEffect, useState } from "react";

function Users(props) {
  const [user, setUser] = useState([]);
 

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users?id=${props.id}`
      );
      setUser(res.data);
    };
    fetchUsers();
  }, []);

  return (
   <div className="user">
      {
         <>
            {
               user.map((u, i) => {
                 return(
                  <h5 key={i}>{'Author: '}{u.name}</h5>
                 )
               })
            }
         </>
      }
   </div>
  );
}

export default Users;

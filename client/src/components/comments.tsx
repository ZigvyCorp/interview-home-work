import { useEffect, useState } from "react";
import { comments,user } from "./blog";
function Comments({comment}:{comment:comments}) {
  const [user,setUser] = useState<user>();
  const [isUserLoaded,setIsUserLoaded] = useState(false);
  useEffect(()=>{
    getCommentUser()
  },[]);

  async function getCommentUser(){
    const response = await fetch(`/api/users/${comment.owner}`);
    const user = await response.json()
    setUser(user);
    setIsUserLoaded(true);
  }
  return ( <>
    
    {isUserLoaded && <h3>{user?.username} commented:</h3>}
    <p>{comment.content}</p>

  </> );
}

export default Comments;
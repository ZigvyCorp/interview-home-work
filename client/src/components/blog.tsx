import { useEffect, useState } from "react";
import { post } from "../App";
import Comments from "./comments";

export type user = {
  id:number
  username: string
  password: string
  name: string
  dob: string
  create_at: number
}
export type comments = {
  id:number
  owner: number
  post: number
  content:string
  created_at: number
}

function Blog({post}:{post:post}) {
  const [author,setAuthor] = useState<user>()
  const [comments,setComments] = useState<[comments]>();
  useEffect(()=>{ 
    //const getAuthor = fetch(`/api/user/${post.owner}`);
    //Promise.all([getAuthor,getComments]).then(result=> console.log(result)) 
    getPostComment();
    getAuthor();
  },[]);
  
  async function getAuthor(){
    const response = await fetch(`/api/users/${post.owner}`);
    const author = await response.json();
    setAuthor(author);
  }

  async function getPostComment(){
    const response = await fetch(`/api/comments?postId=${post.id}`)
    const comments = await response.json();
    setComments(comments);
  }

  return ( 
    <>
      <h1>{post.title}</h1>
      <h2>Author: {author?.username}</h2>
      <p>{post.content}</p>
      <section className="comments">
        {comments?.map((comment)=>{
          return <Comments comment={comment}/>
        })}
      </section>
    </>
  );
}

export default Blog;
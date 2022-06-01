import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Comments.css"
function Comments(props) {
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${props.id}/comments`
      );
      setComments(res.data);
    };

    fetchComments();
  }, []);


  return (
    <div className="comment">
      <Button variant="light"
        onClick={() => setShow(!show)}
        className="comment__total"
      >
        {comments.length} comments
      </Button>
      <hr />
      {show && comments.map((comment,i)=>{
         return(
            <div key={i} className="comment__content">
          {'User: '}<span className="comment__name">@{comment.name}</span><span className="comment__time">{" "}to day</span>
          <br />
          <p className="comment__body">{comment.body}</p>
          <Button variant="light" className="comment__reply">Reply to</Button>
        <br />
        <br />
        
        </div>
         )
      })}
    </div>
  );
}

export default Comments;

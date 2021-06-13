import React, { useState, useEffect } from 'react';
import './Posts.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    // const [index, setIndex] = useState(1);

    useEffect(() => {
        fetch('/api/hello/user').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setPosts(jsonRes.postsList)); 

        fetch('/api/hello/post').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUsers(jsonRes.postsList)); 
    }, [])

    // const current = users[index];

    const userToRender = users.map((user, i) => {
        if(i < 1){
            // console.log(current);
        return (
            <div className="row" key={user.id}>
                <div className="col text-start m-2 fw-bold">{user.name}<div>Created date:<br />Mar {Math.floor(Math.random()*31)}, 2021.</div></div>
                <div className="col text-end m-2 fw-bold">{user.email}</div>
            </div>
            
        );}
      });
    
    return (
        <>
            {posts.map(post =>
                        <div className="container border-bottom border-2 border-dark" key={post.id}>
                            <div className="row">
                                <div className="col text-center m-5 h3 ">{post.title}</div>
                            </div>  
                            {userToRender}
                            {/* {users.map(user =><div className="col text-center m-5 h3 ">{user.id}</div>)} */}
                            <div className="row">
                                <div className="col-12 text-start m-2 fw-bold">{post.body}</div>
                            </div>  
                            <div className="row border-bottom border-1 border-light">
                                <button type="button" className="btn col-12 text-start m-2">Comment: {Math.floor(Math.random()*10)}</button>
                            </div>  
                            <div className="row mb-5">
                                <div className="col-12 text-start m-2 expand-comment">
                                <img src="https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png"
                  className="me-2 logo"></img>{post.body}</div>
                            </div> 
                        </div>
                        )
            }
        </>

    )
}

export default Posts;

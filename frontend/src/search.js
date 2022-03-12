import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
const userURL = 'http://localhost:5000/users/'
const postURL = 'http://localhost:5000/posts/'
const commentURL = 'http://localhost:5000/comments/'

export default function Search() {
    const [userID, setUserID] = useState(0)
    const [postID, setPostID] = useState(0)
    const [commentID, setCommentID] = useState(0)
    const [keyword, setKeyword] = useState('')
    const [commentFromPostID, setCommentFromPostID] = useState(0)
    
    const [searchUser, setSearchUser] = useState([]);
    const [searchPost, setSearchPost] = useState([]);
    const [searchComment, setSearchComment] = useState([]);
    const [searchPostList, setSearchPostList] = useState([]);
    const [searchCommentList, setSearchCommentList] = useState([]);

    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');
    const [error4, setError4] = useState('');
    const [error5, setError5] = useState('');

    // Get user by ID
    const getUserById = (id) => {
        fetch(userURL + String(id))
        .then(response => response.json())
        .then(searchUser => {
            if (searchUser.User) {
                setSearchUser(searchUser.User)
                setError('')
            }
            else {
                setError('Cannot find user')
            }
        });
    }

    // Get post by ID
    const getPostById = (id) => {
        fetch(postURL + String(id))
        .then(response => response.json())
        .then(searchPost => {
            if (searchPost.Post) {
                setSearchPost(searchPost.Post)
                setError2('')
            }
            else {
                setError2('Cannot find post')
            }
        });
    }

    // Get post by Keyword
    const getPostByKeyword = (keyword) => {
        fetch(postURL + 'title/' + String(keyword))
        .then(response => response.json())
        .then(searchPostList => {
            if (searchPostList.Post.length > 0) {
                setSearchPostList(searchPostList.Post)
                setError3('')
            }
            else {
                setError3('Cannot find post')
            }
        });
    }

    // Get comment by ID
    const getCommentById = (id) => {
        fetch(commentURL + String(id))
        .then(response => response.json())
        .then(searchComment => {
            if (searchComment.Comment) {
                setSearchComment(searchComment.Comment)
                setError4('')
            }
            else {
                setError4('Cannot find comment')
            }
        });
    }
    
    // Get comment from post
    const getCommentFromPost = (id) => {
        fetch(commentURL + 'post/' + String(id))
        .then(response => response.json())
        .then(searchCommentList => {
            if (searchCommentList.Comment.length > 0) {
                setSearchCommentList(searchCommentList.Comment)
                setError5('')
            }
            else {
                setError5('Cannot find comment')
            }
        });
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <div>SEARCH PAGE</div><br/>

            <div>
                <label htmlFor="userID">Search user by id:</label><br/>
                <input type="text" id="userID" name="userID" value={userID} onChange={(e)=>setUserID(e.target.value)}/><br/>
                <button onClick={()=> getUserById(userID)}>Find</button>
                <div style={{'color': 'red'}}>{error}</div><br/>
            </div><br/>
            <div>User search result</div>      
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                    <tr key={searchUser._id}>
                    <td>{searchUser._id}</td>
                    <td>{searchUser.username}</td>
                    <td>{searchUser.password}</td>
                    <td>{searchUser.name}</td>
                    <td>{searchUser.dob}</td>
                    <td>{searchUser.created_at}</td>
                    </tr>
                </tbody>
            </table><br/><br/>


            <div>
                <label htmlFor="postID">Search post by id:</label><br/>
                <input type="text" id="postID" name="postID" value={postID} onChange={(e)=>setPostID(e.target.value)}/><br/>
                <button onClick={()=> getPostById(postID)}>Find</button>
                <div style={{'color': 'red'}}>{error2}</div><br/>
            </div><br/>
            <div>Post search result</div>      
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Owner</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Tags</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                    <tr key={searchPost._id}>
                    <td>{searchPost._id}</td>
                    <td>{searchPost.owner}</td>
                    <td>{searchPost.title}</td>
                    <td>{searchPost.content}</td>
                    <td>{searchPost.tags}</td>
                    <td>{searchPost.created_at}</td>
                    </tr>
                </tbody>
            </table><br/><br/>


            <div>
                <label htmlFor="keyword">Search post by keyword:</label><br/>
                <input type="text" id="keyword" name="keyword" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/><br/>
                <button onClick={()=> getPostByKeyword(keyword)}>Find</button>
                <div style={{'color': 'red'}}>{error3}</div><br/>
            </div><br/>
            <div>Post search result</div>      
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Owner</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Tags</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                {searchPostList.map(e => (
                    <tr key={e._id}>
                    <td>{e._id}</td>
                    <td>{e.owner}</td>
                    <td>{e.title}</td>
                    <td>{e.content}</td>
                    <td>{e.tags}</td>
                    <td>{e.created_at}</td>
                    </tr>
                ))}
                </tbody>
            </table><br/><br/>


            <div>
                <label htmlFor="commentID">Search comment by id:</label><br/>
                <input type="text" id="commentID" name="commentID" value={commentID} onChange={(e)=>setCommentID(e.target.value)}/><br/>
                <button onClick={()=> getCommentById(commentID)}>Find</button>
                <div style={{'color': 'red'}}>{error4}</div><br/>
            </div><br/>
            <div>Comment search result</div>      
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Owner</th>
                    <th>Post</th>
                    <th>Content</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                    <tr key={searchComment._id}>
                    <td>{searchComment._id}</td>
                    <td>{searchComment.owner}</td>
                    <td>{searchComment.post}</td>
                    <td>{searchComment.content}</td>
                    <td>{searchComment.created_at}</td>
                    </tr>
                </tbody>
            </table><br/><br/>

            <div>
                <label htmlFor="commentFromPostID">Search comments from post id:</label><br/>
                <input type="text" id="commentFromPostID" name="commentFromPostID" value={commentFromPostID} onChange={(e)=>setCommentFromPostID(e.target.value)}/><br/>
                <button onClick={()=> getCommentFromPost(commentFromPostID)}>Find</button>
                <div style={{'color': 'red'}}>{error5}</div><br/>
            </div><br/>
            <div>Comments search result</div>      
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Owner</th>
                    <th>Post</th>
                    <th>Content</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                {searchCommentList.map(e => (
                    <tr key={e._id}>
                    <td>{e._id}</td>
                    <td>{e.owner}</td>
                    <td>{e.post}</td>
                    <td>{e.content}</td>
                    <td>{e.created_at}</td>
                    </tr>
                ))}
                </tbody>
            </table><br/><br/> 
        </div>
      );
}
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
const commentURL = 'http://localhost:5000/api/comments/'

export default function Comment() {
    const [editing, setEditing] = useState(false);
    const [id, setID] = useState(0)
    const [owner, setOwner] = useState('')
    const [post, setPost] = useState('')
    const [content, setContent] = useState('')
    const [data, setData] = useState([]);
    const [isDisabled, setDisabled] = useState(false);


    // Get
    useEffect(() => {
    fetch(commentURL)
        .then(response => response.json())
        .then(data => setData(data.Comment));
    });



    // Delete
    const deleteFunc = (id) => {
        fetch(commentURL + String(id), {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        }).then(data => data.json() )
    }



    // Edit/Add
    const saveFunc = () => {     
        if (editing) {
            fetch(commentURL + String(id), {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ _id: id, owner: owner, post: post, content: content })
            }).then(data => data.json() )   
            setEditing(false)
        }
        else {
            fetch(commentURL, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ owner: owner, post: post, content: content })
            }).then(data => data.json() )
        }
    } 
    
    const editFunc = (id, owner, post, content) => {
        setEditing(true)
        setDisabled(true)
        setID(id)
        setOwner(owner)
        setPost(post)  
        setContent(content)
    }


    return (
        <div>
            <Link to="/">Home</Link>

            <div>COMMENTS PAGE</div><br/>
            <div>
                <form onSubmit={() => saveFunc()}>
                <label for="owner">Owner:</label><br/>
                <input type="text" id="owner" name="owner" disabled={isDisabled} value={owner} onChange={(e)=>setOwner(e.target.value)}/><br/>
                <label for="post">Post:</label><br/>
                <input type="text" id="post" name="post" disabled={isDisabled} value={post} onChange={(e)=>setPost(e.target.value)}/><br/>
                <label for="content">Content:</label><br/>
                <textarea id="content" name="content" value={content} onChange={(e)=>setContent(e.target.value)}></textarea><br/>
                <input type="submit" value="Submit"></input>
                </form>
            </div><br/>

            <div>ALL COMMENTS</div><br/>
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
                {data.map(e => (
                    <tr key={e._id}>
                    <td>{e._id}</td>
                    <td>{e.owner}</td>
                    <td>{e.post}</td>
                    <td>{e.content}</td>
                    <td>{e.created_at}</td>
                    <td><button onClick={()=> editFunc(e._id, e.owner, e.post, e.content)}>Edit</button></td>
                    <td><button onClick={()=> deleteFunc(e._id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table><br/>
        </div>
      );
}
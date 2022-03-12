import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
const postURL = 'http://localhost:5000/posts/'

export default function Post() {
    const [editing, setEditing] = useState(false);
    const [id, setID] = useState(0)
    const [owner, setOwner] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [tags, setTags] = useState({
        selectedTags: [],
    })
    const [data, setData] = useState([]);
    const [isDisabled, setDisabled] = useState(false);


    const handleChange = (e) => {
        const { value, checked } = e.target;
        const { selectedTags } = tags;  
        if (checked) {
          setTags({
            selectedTags: [...selectedTags, value],
          });
        }
        else {
          setTags({
            selectedTags: selectedTags.filter((e) => e !== value),
          });
        }
      };


    // Get
    useEffect(() => {
    fetch(postURL)
        .then(response => response.json())
        .then(data => setData(data.Post));
    });



    // Delete
    const deleteFunc = (id) => {
        fetch(postURL + String(id), {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        }).then(data => data.json() )
    }



    // Edit/Add
    const saveFunc = () => {     
        if (editing) {
            fetch(postURL + String(id), {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ _id: id, owner: owner, title: title, content: content, tags: tags.selectedTags })
            }).then(data => data.json() )   
            setEditing(false)
        }
        else {
            fetch(postURL, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ owner: owner, title: title, content: content, tags: tags.selectedTags })
            }).then(data => data.json() )
        }
    } 
    
    const editFunc = (id, owner, title, content) => {
        setEditing(true)
        setDisabled(true)
        setID(id)
        setOwner(owner)
        setTitle(title)  
        setContent(content)
    }


    return (
        <div>
            <Link to="/">Home</Link>

            <div>POSTS PAGE</div><br/>
            <div>
                <form onSubmit={() => saveFunc()}>
                <label for="owner">Owner:</label><br/>
                <input type="text" id="owner" name="owner" disabled={isDisabled} value={owner} onChange={(e)=>setOwner(e.target.value)}/><br/>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/><br/>
                <label for="content">Content:</label><br/>
                <textarea id="content" name="content" value={content} onChange={(e)=>setContent(e.target.value)}></textarea><br/>
                <label for="tags">Tags:</label><br/>
                <input type="checkbox" id="IT" name="IT" value="IT" onChange={handleChange}/>
                <label for="IT">IT</label><br/>
                <input type="checkbox" id="Business" name="Business" value="Business" onChange={handleChange}/>
                <label for="Business">Business</label><br/>
                <input type="checkbox" id="Software" name="Software" value="Software" onChange={handleChange}/>
                <label for="Software">Software</label><br/>
                <input type="submit" value="Submit"></input>
                </form>
            </div><br/>

            <div>ALL POSTS</div><br/>
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
                {data.map(e => (
                    <tr key={e._id}>
                    <td>{e._id}</td>
                    <td>{e.owner}</td>
                    <td>{e.title}</td>
                    <td>{e.content}</td>
                    <td>{e.tags}</td>
                    <td>{e.created_at}</td>
                    <td><button onClick={()=> editFunc(e._id, e.owner, e.title, e.content)}>Edit</button></td>
                    <td><button onClick={()=> deleteFunc(e._id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table><br/>
        </div>
      );
}
import React, { useState, useEffect } from "react";
 
export default function User() {
    const [editing, setEditing] = useState(false);
    const [id, setID] = useState(0)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [data, setData] = useState([]);


    // Get
    const getEndPoint = "http://localhost:5000/api/users/"
    useEffect(() => {
    fetch(getEndPoint)
        .then(response => response.json())
        .then(data => setData(data.User));
    });



    // Delete
    const deleteEndPoint = "http://localhost:5000/api/users/"
    const deleteFunc = (id) => {
        fetch(deleteEndPoint + String(id), {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        }).then(data => data.json() )
    }



    // Edit/Add
    const saveEndPoint = "http://localhost:5000/api/users/"
    const saveFunc = () => {     
        if (editing) {
            fetch(saveEndPoint + String(id), {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ _id: id, username: username, password: password, name: name, dob: dob })
            }).then(data => data.json() )   
            setEditing(false)
        }
        else {
            fetch(saveEndPoint, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password, name: name, dob: dob })
            }).then(data => data.json() )
        }
    } 
    
    const editFunc = (id, username, password, name, dob) => {
        setEditing(true)
        setID(id)
        setUsername(username)
        setPassword(password)  
        setName(name)
        setDob(dob)
    }


    return (
        <div>
          <div>
            <form onSubmit={() => saveFunc()}>
            <label for="username">Username:</label><br/>
            <input type="text" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
            <label for="password">Password:</label><br/>
            <input type="text" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <label for="name">Name:</label><br/>
            <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <label for="dob">DOB:</label><br/>
            <input type="text" id="dob" name="dob" value={dob} onChange={(e)=>setDob(e.target.value)}/><br/>
            <input type="submit" value="Submit"></input>
            </form>
          </div>
    
          <div>ALL USERS</div>
          <ul>
            {data.map(e => (
              <li key={e._id}>
                {e._id}, {e.username}, {e.password}, {e.name}, {e.dob}, {e.created_at}
                <button onClick={()=> editFunc(e._id, e.username, e.password, e.name, e.dob)}>Edit</button>
                <button onClick={()=> deleteFunc(e._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
}
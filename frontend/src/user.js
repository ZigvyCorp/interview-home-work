import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
const userURL = 'http://localhost:5000/users/'

export default function User() {
    const [editing, setEditing] = useState(false);
    const [id, setID] = useState(0)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [data, setData] = useState([]);


    // Get
    useEffect(() => {
    fetch(userURL)
        .then(response => response.json())
        .then(data => setData(data.User));
    });



    // Delete
    const deleteFunc = (id) => {
        fetch(userURL + String(id), {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        }).then(data => data.json() )
    }



    // Edit/Add
    const saveFunc = () => {     
        if (editing) {
            fetch(userURL + String(id), {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ _id: id, username: username, password: password, name: name, dob: dob })
            }).then(data => data.json() )   
            setEditing(false)
        }
        else {
            fetch(userURL, {
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
            <Link to="/">Home</Link>

            <div>USERS PAGE</div><br/>
            <div>
            <form onSubmit={() => saveFunc()}>
            <label for="username">Username:</label><br/>
            <input type="text" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
            <label for="password">Password:</label><br/>
            <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <label for="name">Name:</label><br/>
            <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <label for="dob">DOB:</label><br/>
            <input type="text" id="dob" name="dob" value={dob} onChange={(e)=>setDob(e.target.value)}/><br/>
            <input type="submit" value="Submit"></input>
            </form>
            </div><br/>

            <div>ALL USERS</div><br/>
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
                {data.map(e => (
                    <tr key={e._id}>
                    <td>{e._id}</td>
                    <td>{e.username}</td>
                    <td>{e.password}</td>
                    <td>{e.name}</td>
                    <td>{e.dob}</td>
                    <td>{e.created_at}</td>
                    <td><button onClick={()=> editFunc(e._id, e.username, e.password, e.name, e.dob)}>Edit</button></td>
                    <td><button onClick={()=> deleteFunc(e._id)}>Delete</button></td>  
                    </tr>
                ))}
                </tbody>
            </table><br/>
      </div>
    );
}
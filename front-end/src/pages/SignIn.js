import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')
    const [arrUser,setArrUser] = useState(null);
    const navigate = useNavigate()

    console.log(arrUser);
    const handleSignIn = useCallback((e)=>{
        e.preventDefault();
        if(username === ""  || password === ""){
            toast.error('type your username && password')
        } else {
            const result = arrUser && arrUser.filter(item=>item.username === username);
            console.log(result);
           if(result[0].password === password){
            let string = JSON.stringify(result);
            localStorage.setItem('currentUser',string)
             navigate('/')
           } else {
            console.log('password wrong')
           }
        }
    },[username,password,arrUser]);

    useEffect(()=>{
        axios.get('http://localhost:3001/users/signIn')
        .then((res)=>{
            setArrUser(res.data);
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return <div className="d-flex justify-content-center align-items-center w-100 " style={{height:"100vh"}}>
                <div className="w-50 bg-light border border-secondary rounded p-2"> 
                       <form onSubmit={handleSignIn}>
                        <h2 className="text-center">Sign In</h2>
                        <div>
                                <label htmlFor="">UserName</label>
                                <input type="text" onChange={e =>setUsername(e.target.value)} placeholder="username" className="form-control"/>
                        </div>
                        <div>
                                <label htmlFor="">Password</label>
                                <input type="text" onChange={e=> setPassword(e.target.value)} placeholder="password" className="form-control"/>
                        </div>
                        <div className="d-flex justify-content-end align-items-center mt-3">
                            <input type="submit" value="Sign In" className="border-secondary rounded px-4 "/>
                        </div>
                        <div className="text-secondary"> Dont have account <span className="text-decoration-underline cursor-pointer" style={{cursor:"pointer"}}><Link to="/signUp">Sign Up</Link></span></div>
                       </form>
                </div>
            </div>
}

export default SignIn
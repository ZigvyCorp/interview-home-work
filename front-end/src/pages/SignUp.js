import axios from "axios";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () =>{
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');

    const handleSignUp = useCallback((e)=>{
        e.preventDefault();
        if(userName === '' || password ===""){
            // toast.error('fill user and password.')
            console.log('username')
        } else if(passwordConfirm !== password){
            // toast.error('password not fixed.')
            console.log('password')

        } else {
            axios.post('http://localhost:3001/users/signUp', {
            username:userName,
            password,
            name:"",
            created_at:12345,
            dob: ""
        })
        .then(result =>console.log(result))
        .catch(err=>console.log(err))
        }
    },[userName,password,passwordConfirm])

    return <div className="d-flex justify-content-center align-items-center w-100 " style={{height:"100vh"}}>
                <div className="w-50 bg-light border border-secondary rounded p-2"> 
                       <form onSubmit={handleSignUp}>
                        <h2 className="text-center">Sign Up</h2>
                        <div>
                                <label htmlFor="">UserName</label>
                                <input type="text" onChange={e=>setUserName(e.target.value)} placeholder="username" className="form-control"/>
                        </div>
                        <div>
                                <label htmlFor="">Password</label>
                                <input type="text" onChange={e =>setPassword(e.target.value)} placeholder="password" className="form-control"/>
                        </div>
                        <div>
                                <label htmlFor="">Password Confirm</label>
                                <input type="text" onChange={e=>setPasswordConfirm(e.target.value)} placeholder="password confirm" className="form-control"/>
                        </div>
                        
                        <div className="d-flex justify-content-end align-items-center mt-3">
                            <input type="submit" value="Sign Up" className="border-secondary rounded px-4 "/>
                        </div>
                        <div className="text-secondary"> Back to  <span className="text-decoration-underline cursor-pointer" style={{cursor:"pointer"}}><Link to="/signIn">Sign In</Link></span></div>
                       </form>
                </div>
            </div>
}

export default SignUp
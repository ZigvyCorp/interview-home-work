import { Link } from 'react-router-dom';
import React from 'react'
import './index.css';
import fbImages from '../../images/fb.png'
import ggImages from '../../images/google.png'

function Login(props){

    const submitHandler =(e)=>{
        e.preventDefault();

    }

    return <div className="formContain">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2 className="title">Welcome</h2>
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"></input>

                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"></input>
                    </li>
                    <li>
                        <button type="submit" className="btn btn-primary">
                                Login 
                        </button>
                    </li>
                    <li>
                       <Link to="/forgotPass/" className="forgot">Forgotten password?</Link> 
                    </li>
                    <li className="sign-up">
                        <p>
                            Don't have an account?
                            <Link to="/login" className="borders" >
                                Sign Up
                            </Link>
                        </p>
                        
                    </li>
                
                    <li className="facebook">
                        <p>
                            Login with
                                <img className="img-fa" src={fbImages} alt=""/>
                                <img className="img-gg" src={ggImages} alt=""/>     
                        </p> 
                    </li>     
                </ul>
             </form> 
            
            </div>
    
    
}
export default Login;
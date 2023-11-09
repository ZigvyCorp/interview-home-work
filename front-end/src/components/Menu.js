import React, { useCallback, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '.././App.css'
import { MdOutlineBoy } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin,setIsLogin] = useState(false);
    const [localUser,setLocalUser] = useState(null)
    const router = useNavigate();

    console.log(localUser)

    const handleSignIn = useCallback(()=>{
        localStorage.removeItem('currentUser');
        router('/signIn')
    },[router])
 
    useEffect(()=>{
        
        let retiveLocalStorage = localStorage.getItem('currentUser');
       if(retiveLocalStorage){
        let retriveArr = JSON.parse(retiveLocalStorage);
         setLocalUser(retriveArr)
       }
    },[])
  return <div className="d-flex justify-content-between align-items-center border border-3 border-dark mt-1 mx-1" style={{height:"40px"}} >
                <div className='d-flex align-items-center h-100' style={{width:"7.5%"}}>
                    <div className='w-50 h-100 mr-2' style={{background:"#d7d5d5", color:"#d7d5d5"}}>t</div>
                    <Link to="/" className='text-decoration-none text-dark text-capitalize ms-1'>logo</Link>
                </div>
                <div >
                    <Link to="/create" className='text-decoration-none text-dark' >Create Post</Link>
                </div>
           
            <div className=' h-100 px-4 border-end border-start border-dark border-3' style={{background:"#d7d5d5"}}>
                <div>Blog</div>
                <div className="blog"></div>
            </div>
            <div className='d-flex align-items-center h-100'>
                <div className='h-100  border-end border-start border-3 border-dark' style={{background:"#d7d5d5"}}><MdOutlineBoy/></div>
                <div className='mx-4' onClick={handleSignIn}>{localUser ? localUser[0].username :"Sign In"}</div>
            </div>
           
        </div>
};
export default Menu
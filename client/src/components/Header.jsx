import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getUsers} from '../actions/userActions';
import Logo from '../assets/images/instagram.png';
import Account from '../assets/images/account.png';

function Header(props) {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.usersData.userList);
    const getAllUser = () => dispatch(getUsers());
    useEffect(()=>{
        getAllUser();
    },[])
  return (
    <header className='header'>
        <nav>
            <ul>
                <li className="list_item logo">
                    <img src={Logo} width={50} height={50} alt="" /> 
                </li>
                <li className="list_item blog">Blogs</li>
                <li className="list_item user">
                    <img src={Account} width={50} height={50} alt="" /> 
                    <p>{userList.length !==0 && userList[0].name}</p>
                </li>
            </ul>
        </nav>
    </header>
  )
}


export default Header;

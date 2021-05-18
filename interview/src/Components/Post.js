import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, getCmts } from '../actions';


export const Post = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const cmts = useSelector(state => state.cmts);
    const postDetail = useSelector(state => state.postDetail);
    const userId = postDetail.userId;
    const id = postDetail.id;
    
    const user = users.find(u => u.id === userId);
    


    function randomDate(start, end) {
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        const newDate = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate(); 
        return newDate;
    }


    useEffect(() => {
        dispatch(getCmts(id));
    },[])

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-light bg-primary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-dark">
                    <i className="fas fa-home"></i> Home
                    </Link>
                </div>
            </nav>
            
            <div className="row">
                <div className="col-md-4">
                    <img src="https://source.unsplash.com/random" className="card-img-top" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card bg-light border-light">
                        <div className="card-body">
                            <h2 className="card-title text-primary text-center" style={{fontFamily: 'Pattaya'}}>
                                {postDetail.title}
                            </h2>
                            <h5><i className="fas fa-pen-alt"></i> {user.name}</h5>
                            <p>
                                <em>
                                    <i className="far fa-calendar"></i> {randomDate(new Date(2018, 0, 1), new Date())}
                                </em> 
                            </p>
                            <h5 className="text-danger card-text" style={{fontFamily: 'Merriweather'}}><i className="fas fa-certificate"></i> {postDetail.body}</h5>
                        </div>
                        
                        <div className="card-body">
                            <h6>
                                Comment: <em>{cmts && cmts.length} <i className="fas fa-comments"></i></em>
                            </h6>
                            <ul className="list-group list-group-flush">
                                
                                {
                                    cmts && cmts.map((cmt, index) => {
                                        return(<li key={index} className="list-group-item container">
                                            <div className="row">
                                                <ul className="list-group list-group-flush col-md-3">
                                                    <li className="list-group-item">
                                                        <i className="fas fa-user"></i>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i class="fas fa-clock"></i> {randomDate(new Date(2018, 0, 1), new Date())}
                                                    </li>
                                                </ul>
                                                
                                                <ul className="list-group list-group-flush col-md-7">
                                                    <li className="list-group-item">
                                                        {cmt.email}
                                                    </li>
                                                    <li className="list-group-item">{cmt.body}</li>
                                                </ul>
                                                
                                            </div>
                                        </li>);
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
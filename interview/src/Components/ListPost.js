import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPostDetail } from '../actions';
import { getCmts } from '../actions';

export const ListPost = ({post}) => {
    const {title, id, userId, body} = post;
    const cmts = useSelector(state => state.cmts);
    const users = useSelector(state => state.users);

    const user = users.find(u => u.id === userId);
    const dispatch = useDispatch();

    const handleCmt = (id) => {
        const ele = document.querySelectorAll(`#ul-${id} .list-group-item`);
        for(let i = 0; i < ele.length; i++) {
            ele[i].style.display = "block";
        }
    }

    useEffect(() => {
        dispatch(getCmts(id));
    }, []);


    
    function randomDate(start, end) {
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        const newDate = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate(); 
        return newDate;
    }


    return (
        <>
        <div className="card mb-5 bg-light border-primary">
            <div className="card-body">
                <h2 style={{fontFamily: 'Pattaya'}} className="card-title text-primary text-center">{title}</h2>
                <h6>Author: {user && user.name}</h6>
                <p>
                    <em>
                        Date: {randomDate(new Date(2018, 0, 1), new Date())} 
                    </em> 
                </p>
                <p  style={{fontFamily: 'Merriweather'}} className="card-text fs-5">
                    <i className="fas fa-certificate"></i> {body.slice(0, 100)}
                </p>
                <Link to={`/detail/${id}`} 
                className="btn btn-success mb-3"
                onClick={() => dispatch(setPostDetail(post))}
                >
                    <i className="fas fa-info-circle"></i> Detail post
                </Link><br/>
                
                <button className="btn btn-primary mb-2" onClick={() => handleCmt(id)}>
                    <i className="fas fa-eye"></i> comments
                </button>
                <h6>
                    Comment: <em>{cmts && cmts.length} <i className="fas fa-comments"></i></em>
                </h6>
                <ul className="list-group mt-3" id={`ul-${id}`}>
                {
                    cmts && cmts.map((cmt, index) => {
                        if(index === 0) {
                            return(
                                <li key={index} className="list-group-item container">
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
                                        </li>
                                );
                        }
                        return(
                            <li key={index} style={{display: 'none'}} className="list-group-item container">
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
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </div>
        </>
    );
}
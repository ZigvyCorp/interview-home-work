import React, { useEffect }  from 'react';
import { getUsers } from '../../redux/reducers/users';
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/HomePage.css";
import Comment from '../Comment/Comment';

const PostCard = (props) => {
    const { post } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const users = useSelector((state) => state.users.users);

    return (
        <div className="post">
            <div className="post-title"><h1>{post.title}</h1></div>
            <div className="post-info">
                {users.map(user => {
                    if(user.id === post.userId){
                        return(
                            <p>Author: {user.name}</p>
                        )
                    }
                })}
                <p>Created at: August 31, 2021</p>
            </div>
            <div className="post-content"><p>{post.body}</p></div>
            <div>
                <Comment id={post.id}/>
            </div>
        </div>
    );
};

export default PostCard;
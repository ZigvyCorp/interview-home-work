import { useEffect, useState } from 'react';
import ListPost from '../../components/ListPost.jsx/ListPost';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../../components/Post';
import { ListComment } from '../../components/ListComment';
import { getPost } from '../../redux/post/postAction';
import { useParams } from 'react-router-dom';

const PostDetail = ({ title }) => {
    const param = useParams('id');
    const dispatch = useDispatch();
    const data = useSelector(((state)=>state.post.post))
   
    useEffect(() => {
        document.title = title;
    }, []);

    useEffect(() => {
        dispatch(getPost(`${param.id}`));
    }, []);
    
    
    return (
        <div className="w-300 mx-auto flex flex-col space-y-24 py-24">
            <Post props={data} full={true}/>
            <ListComment pid={data.id} />
           
        </div>
    );
};
export default PostDetail;

import { useEffect } from 'react';
import { ListComment } from '../ListComment';
import { Post } from '../Post';

import { useDispatch, useSelector } from 'react-redux';
import { getListPost } from '../../redux/post/postAction';

const PostList = ({index,size}) => {
    
    const dispatch = useDispatch();
    const data = useSelector(((state)=>state.post.posts))
  
    useEffect(() => {
        dispatch(getListPost(`?pageIndex=${index}&pageSize=${size}`));
    }, [index,size]);

    return (
        <ul>
            {data && data?.map((data) => (
                <li key={data.id} className="border-b-2 mt-4">
                    <Post props={data} full={false}/>
                    <ListComment pid={data.id} />
                </li>
            ))}
        </ul>
    );
};

export default PostList;

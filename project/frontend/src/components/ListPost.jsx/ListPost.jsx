import { useEffect } from 'react';
import { ListComment } from '../ListComment';
import { Post } from '../Post';

import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../redux/post/postSage';
import onLoadPost from '../../redux/post/postSage';
import { getListPost, getListPostSuccess } from '../../redux/post/postAction';

const PostList = (props) => {
    const posts = [
        {
            title: 'Title 1',
            author: 'John Smith',
            createdAt: '2023-09-20',
            tag: ['thể thao', 'Bóng đá'],
            content:
                'You must use React for front-end development. For back-end, ExpressJS or MeteorJS is a must. And database, you must use either MongoDB or PostgreSQL. Other libraries that will help you with your development are not limited. i.e: axios, lodash, Bootstrap, Ant design, et',
        },
        {
            title: 'Title 2',
            author: 'Adam Levine',
            createdAt: '2023-09-18',
            tag: ['thể thao', 'Bóng đá'],
            content:
                'You must use React for front-end development. For back-end, ExpressJS or MeteorJS is a must. And database, you must use either MongoDB or PostgreSQL. Other libraries that will help you with your development are not limited. i.e: axios, lodash, Bootstrap, Ant design, et',
        },
    ];
    const dispatch = useDispatch();
    const data = useSelector(((state)=>state.post.post))
    console.log(data)
    useEffect(() => {
        dispatch(getListPost());
    }, []);

    return (
        <ul>
            {posts.map((data) => (
                <li key={data.id} className="border-b-2 mt-4">
                    <Post props={data} />
                    <ListComment />
                </li>
            ))}
        </ul>
    );
};

export default PostList;

import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getPosts,getCommentOfPost,getPostById} from '../actions/postActions';
import {getUsers} from '../actions/userActions';
import {Pagination} from 'antd';
import Header from '../components/Header';
import Post from '../components/Post/Post';

function Home(props) {
    const dispatch = useDispatch();
    const postsData = useSelector((state)=> state.postsData);
    const usersData = useSelector((state)=> state.usersData);
    const [page,setPage] = useState(1);
    const getAllPosts = ()=> dispatch(getPosts());
    const getAllUsers = () => dispatch(getUsers());
    useEffect(()=>{
        getAllPosts();
        getAllUsers();
    },[])

    function onChange(pageNumber) {
        setPage(pageNumber);
    }
    return (
        <section className='home_pages'>
            <Header></Header>
            <ul className='list_post'>
                {
                    usersData.userList.length !==0 && postsData.postList.flatMap((post,index)=>{
                        if(index >= (page-1)*10 && index/(page*10) < 1){
                            let author;
                            for(let i of usersData.userList){
                                if(Number(i.id) === Number(post.owner)){
                                    author = i;
                                    break
                                }
                            }
                            return  <li key={post.id}><Post post={post} author={author}/> </li>
                        }
                    })
                }
            </ul>
            <Pagination
            className='pagination'
            showSizeChanger
            defaultCurrent={1}
            onChange={onChange}
            total={postsData.postList.length !==0 ? postsData.postList.length : 0}
            />
        </section>
    )
}

export default Home;

import React , {useEffect,useState}from "react";
import { useDispatch,useSelector } from "react-redux"
import {getPosts} from "../src/actions/postAction"
import {getComment} from "../src/actions/commentAction"
import {getUser} from "../src/actions/userAction"
import Main from "./component/mainComponent"
import {Row,Col,Container} from "react-bootstrap";
// import InfiniteScroll from 'react-infinite-scroll-component';
import ReactPaginate from "react-paginate";

function App() {

  const styles = {
    header: {
       border: '2px solid'
    },
    title_header: {
      marginTop: '20px',
      textAlign: 'center'
    },
    display_flex: {
      display: 'flex',
    }
}

  const postList = useSelector(state => state.postList.posts);
  const commentList = useSelector(state => state.commentList.comments);
  const userList = useSelector(state => state.userList.users);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts())
    dispatch(getComment())
    dispatch(getUser())
  },[]);



  return (
    <>
      {(Object.keys(userList).length === 0) ? (<h1>...</h1>) : (
        <Main postList={postList} commentList={commentList} userList={userList}></Main>
      )}
    </>
  );
}

export default App;

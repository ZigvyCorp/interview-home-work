import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./home.scss";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Comment from "../../components/Comment";
import TagColor from "../../components/TagColor";

Home.propTypes = {};

function Home(props) {
  const dispatch = useDispatch();
  let history = useHistory();

  const [toggle, setToggle] = useState();
  const [count, setCount] = useState(1);
  const [dataSearch, setDataSearch] = useState("");
  const [type, setType] = useState("not-search"); 
  const [stateInput, setStateInput] = useState('');

  useEffect(() => {
    // lấy ds các bài posts
    async function getPostData() {
      await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      })
        .then((res) => {
          dispatch({
            type: "SET_POST",
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    async function getUserData() {
      await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
      })
        .then((res) => {
          console.log("data user", res.data); //data là 1 mảng object
          dispatch({
            type: "SET_USER",
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    async function getCommentData() {
      await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/comments",
      })
        .then((res) => {
          dispatch({
            type: "SET_COMMENT",
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getPostData();
    getUserData();
    getCommentData();
  }, []);

  const postList = useSelector((state) => state.post.post);
  const userList = useSelector((state) => state.user.user);
  const commentList = useSelector((state) => state.comment.comment);

  const injectCommentToPost = (commentList, postList) => {
    // Steps:
    // 1. Build a Map of user to be able to access directly
    // 2. Loop through post
    // 3. Inject user's info
    const commentMap = commentList.reduce((map, comment) => {
      map.set(comment.postId, comment);
      return map;
    }, new Map());

    return postList.map((post) => ({
      ...commentMap.get(post.id),
      ...post,
    }));
  };
  const combineCommentAndPostData = injectCommentToPost(commentList, postList);

  const injectToUser = (commentPostList, userList) => {
    // Steps:
    // 1. Build a Map of user to be able to access directly
    // 2. Loop through post
    // 3. Inject user's info
    const userMap = userList.reduce((map, user) => {
      map.set(user.id, user);
      return map;
    }, new Map());

    return commentPostList.map((post) => ({
      ...userMap.get(post.userId),
      ...post,
    }));
  };

  const finalData = injectToUser(combineCommentAndPostData, userList);


  
    dispatch({
      type: "SET_COMBINE_DATA",
      payload: finalData,
    });


  const clickToDetailPage = (id) => {
    history.push(`/detail/${id}`);
  };

  const clickToExpand = (id, count) => {
    if (id) {
      setToggle(id);
      setCount(count + 1);
      console.log(count);
    }
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    const keyword = document
      .getElementById("txtSearch")
      .value.trim()
      .toLowerCase();
    setDataSearch(keyword);
    setType("SEARCH");
    setStateInput(e.target.value);
   
    if(stateInput.length===1){
      setType("NOT_SEARCH");
    }
    dispatch({
      type: "SEARCH",
    });
  };

  // whenever people look up => type: SEARCH

  const renderData = () => {
    let result = null;
    if(type==="SEARCH"){
      result =  finalData.filter(data => data.title.includes(dataSearch)).map((data,index)=> (
        <div key={index}>
          <p>{data.title}</p>
        </div>
      ));    
    }

    else {
      result = finalData.map((data, index) => (
        <div
          key={index}
          className="border-bottom border-top px-3 border-dark text-center"
        >
          <div>
            <h1
              className="title__section pt-4 mb-0"
              onClick={() => {
                clickToDetailPage(data.id);
              }}
            >
              Post title {index + 1} {data.title}
            </h1>
            <div className="headline__section d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-left mb-0">Author: {data.username}</h6>
                <h6 className="text-left">
                  Created at: {Math.floor(Math.random() * 31)} /{" "}
                  {Math.floor(Math.random() * 13)} / 2021{" "}
                </h6>
              </div>
              <div className="tagcolor__section">
                <TagColor />
              </div>
            </div>
            <h6 className="text-left"> {data.body} </h6>
          </div>
          <div
            onClick={() => {
              clickToExpand(data.id, count);
            }}
          >
            <p className="comment__section text-left text-secondary border-bottom">
              {data.postId} comments
            </p>
            <div className="h-75 d-inline-block">
              {toggle === data.id && count % 2 == 0 ? (
                <div>
                  <Comment />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ));

    }
    return result;
  
  };

  return (
    <div>
      <Header />
      {/* search section */}
      <div className="container mt-3 mb-3 pl-0 pr-0 input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Search
          </span>
        </div>
        <input
          onChange={handleChangeSearch}
          value={stateInput}
          id="txtSearch"
          type="text"
          className="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
    

      <div className="container pl-0 pr-0  border ">
        <div>{renderData()}</div>
      </div>
    </div>
  );
}

export default Home;

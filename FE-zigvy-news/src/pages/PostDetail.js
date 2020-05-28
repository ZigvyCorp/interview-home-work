/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { formatDateToString, capitalize } from "../utils/helper";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { fetchPost, createComment, deletePost } from "../actions";
import ReactHtmlParser from 'react-html-parser';
import PostEdit from "../components/posts/post-edit";
import CommentList from "../components/comments/comment-list";
import 'antd/dist/antd.css';

const { confirm } = Modal;

const Post = (props) => {
  const { postState, match, userState, commentState, history } = props;
  const { post } = postState;
  const [showEditModal, setShowEditModal] = useState(false);
  const [comment, setComment] = useState({
    _idOwner: null,
    _idPost: null,
    content: ''
  });

  useEffect(() => {
    const { id } = match.params;
    props.fetchPostAction(id);
  }, [commentState.comment, postState.updatedPost]);

  const handleSubmit = e => {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      props.createCommentAction({
        ...comment,
        _idOwner: userState.user._id,
        _idPost: post._id
      });
      setComment({ ...comment, content: '' })
    }
  }

  const handleChange = e => {
    setComment({ ...comment, content: e.target.value })
  }

  if (post) {
    const comments = post.comments.filter(item => !item.isDelete).reverse();
    return (
      <div className="container-fluid mb-3">
        <PostEdit post={post} showEditModal={showEditModal} setShowEditModal={setShowEditModal}/>
        <div className="card">
          <div className="card-header">
            <div className="d-flex">
              <img height={60} src={post.images} alt="" />
              <div className="ml-2">
                <h2 className="mb-0">{capitalize(post.title)}</h2>
                <span>Created by <strong>{post.owner.name}</strong> - </span>
                <small className="text-muted">
                  {formatDateToString(post.createdAt)}
                </small>
              </div>
            </div>

            {userState.user && userState.user._id === post._idOwner && (
              <span style={{ position: 'absolute', top: 5, right: 10 }}>
                <span className="post-tool-item" onClick={() => setShowEditModal(true)}><i className="fa fa-pencil" /></span>
                <span className="post-tool-item" onClick={() => {
                  confirm({
                      title: 'Do you want to delete these items?',
                      icon: <ExclamationCircleOutlined />,
                      content: 'Are you sure you want to delete this post?',
                      onOk() {
                        props.deletePostAction(post);
                        history.push('/');
                      },
                      onCancel() {},
                    });
                  }}><i className="fa fa-trash" />
                </span>
              </span>
            )}
          </div>
          
          <div className="card-body">
            {ReactHtmlParser(post.content)}
            <div>
              Tags: 
              {post.tags.map(item => {
                return <span className="ml-2 badge badge-danger" key={item.toString()}>{item}</span>
              })}
            </div>
          </div>
          <div className="card-footer text-muted">
            {userState.user && (
              <div className="d-flex justify-content-center mb-5" style={{ height: 80 }}>
                <img src={userState.user.images} height={80} width={80} style={{ verticalAlign: 'baseline' }} alt=""/>
                <textarea 
                  className="form-control d-inline-block ml-2" 
                  style={{ width: 'calc(100% - 100px)'}}
                  name="content"
                  value={comment.content}
                  onChange={handleChange}
                  onKeyPress={handleSubmit}
                  placeholder="Write a comment ..."
                />
              </div>
            )}
            <CommentList comments={comments}/>
          </div>
        </div>
      </div>
    );
  }
  return <div className="text-center m-5">No post here</div>;

};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    postState: state.postState,
    commentState: state.commentState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostAction: bindActionCreators(fetchPost, dispatch),
    createCommentAction: bindActionCreators(createComment, dispatch),
    deletePostAction: bindActionCreators(deletePost, dispatch)

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));

import React, { Component } from "react";
import PostService from "../../services/post.service";
import CommentService from "../../services/comment.service";
import { Link } from "react-router-dom";
import moment from "moment";
import { Modal } from 'react-bootstrap';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

export default class HomeListPost extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.getAllPost = this.getAllPost.bind(this);
    this.onClickTag = this.onClickTag.bind(this);
    this.handleCreatePost = this.handleCreatePost.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.saveNewPost = this.saveNewPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.addCommnent = this.addCommnent.bind(this);
    this.editComment = this.editComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.state = {
      posts: [],
      search: "",
      isShow: false,
      isCreate: false,
      isEdit: false,
      isEditComment: true,
      currentEditPostId: "",
      currentEditCommentId: "",
      title: "",
      content: "",
      tags: [],
    };
  }

  componentDidMount() {
    this.getAllPost();
  }

  handleCreatePost(e) {
    this.setState({
      isShow: true,
      isCreate: true,
      title: "",
      content: "",
      tags: [],
    });
  }

  handleClose(e) {
    this.setState({
      isCreate: false,
      isEdit: false,
      isShow: false,
      title: "",
      content: "",
      tags: [],
    });
  }

  editPost(post) {
    this.setState({
      isShow: true,
      isEdit: true,
      currentEditPostId: post.id,
      title: post.title,
      content: post.content,
      tags: post.tags,
    });
  }

  deletePost(postId) {
    PostService.deletePost(postId).then(() => {
      this.getAllPost();
    });
  }

  editComment(postId, comment) {
    var el = document.getElementById(`commentInput-${postId}`);
    el.focus();
    el.value = comment.content;
    this.setState({
      currentEditCommentId: comment.id,
      isEditComment: true,
    });
  }

  deleteComment(commentId) {
    CommentService.deleteComment(commentId).then(() => {
      this.getAllPost();
    });
  }

  onClickTag(e) {
    console.log('click tag');
  } 

  getAllPost() {
    PostService.getAllPost().then((res) => {
      console.log(res);
      this.setState({
        posts: res.data.data,
      });
    })
    .catch(e => {
      console.log(e);
    });
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeTags(tags) {
    this.setState({ tags });
  }

  saveNewPost(e) {
    const data = {
      ownerId: localStorage.getItem("userId"),
      title: this.state.title,
      content: this.state.content,
      tags: this.state.tags,
    };
    PostService.saveNewPost(data).then(() => {
      alert("Created new post");
      this.setState({
        isShow: false,
        title: "",
        content: "",
        tags: [],
      });
      this.getAllPost();
    });
  }

  updatePost(e) {
    const data = {
      title: this.state.title,
      content: this.state.content,
      tags: this.state.tags,
    };
    PostService.updatePost(this.state.currentEditPostId, data).then(() => {
      alert("Updated post");
      this.setState({
        isShow: false,
        isEdit: false,
        currentEditPostId: "",
        title: "",
        content: "",
        tags: [],
      });
      this.getAllPost();
    });
  }

  addCommnent(e, postId) {
    if (e.key === 'Enter') {
      var el = document.getElementById(`commentInput-${postId}`);
      if (!this.state.isEditComment) {
        const newData = {
          ownerId: localStorage.getItem("userId"),
          postId,
          content: e.target.value,
        };
        CommentService.addNewComment(newData).then(() => {
          this.getAllPost();
          el.value = "";
        });
      } else {
        const updateData = {
          content: e.target.value,
        };
        CommentService.updateComment(this.state.currentEditCommentId, updateData).then(() => {
          this.getAllPost();
          el.value = "";
          this.setState({
            currentEditCommentId: "",
            isEditComment: false,
          });
        });
      }
    }
  }

  onSearch(e) {
    this.setState({
      search: e.target.value,
    });
    PostService.getAllPost(e.target.value)
      .then(res => {
        this.setState({
          posts: res.data.data,
        });
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { posts, isShow, tags, title, content, search, isEdit } = this.state;
    const userId = localStorage.getItem("userId");
    return (
      <div className="container">
        <div className= "row">
          <div className="col-md-2 pull-right">
            <button type="button" className="btn btn-primary" onClick={this.handleCreatePost}>Create post</button>
          </div>
        </div>
        <div className="list row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="search"
                value={search}
                onChange={this.onSearch}
                name="title"
                placeholder="Search by title or tags"
              />
            </div>
            { 
              posts && posts.map((p) => (
                <div className="card" style={{marginBottom: "10px"}}>
                  <div className="card-body">
                    <h2 className="card-title" style={{textAlign: "center"}}>{p.title}</h2>
                    {
                      p.ownerId === userId ?
                      (<div style={{textAlign: "right"}}>
                        <button type="button" className="btn btn-primary" onClick={() => this.editPost(p)} style={{marginRight: '3px'}}>Edit</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.deletePost(p.id)} style={{marginRight: '3px'}}>Delete</button>
                      </div>) : null
                    }
                    <p className="card-text">Author: {p.ownerName}</p>
                    <p className="card-text">Created at: {moment(p.createdAt).format("lll")}</p>
                    <p className="card-text">{p.content}</p>
                    {
                      p.tags && p.tags.map((t) => (
                        <span className="badge badge-primary" style={{marginRight: '5px'}} onClick={this.onClickTag}>{t}</span>
                      ))
                    }
                    {
                      p.totalComments > 0 ? (<p className="card-text">{p.totalComments} Replies</p>) : null
                    }
                    <div style={{marginBottom: "70px"}}>
                      {
                        p.comments && p.comments.map((c) => (
                          <div>
                            <div style={{width: "90%",float: "left"}}>
                              <p className="card-text">{c.user}: {c.content}</p>
                            </div>
                            <div style={{textAlign: "right", width: "10%",float: "left"}}>
                              <svg className="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginRight: "5px"}} onClick={() => this.editComment(p.id, c)}>
                                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clip-rule="evenodd"/>
                              </svg>
                              <svg className="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginRight: "5px"}} onClick={() => this.deleteComment(c.id)}>
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd"/>
                              </svg>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    <input
                      type="text"
                      id={`commentInput-${p.id}`}
                      className="form-control"
                      onKeyUp={(e) => this.addCommnent(e, p.id)}
                      name="commentInput"
                      ref="commentInput"
                      placeholder="Comment something...."
                    />
                    {/* <a href="#" className="btn btn-primary">Read More &rarr;</a> */}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Modal show={isShow}>
          <Modal.Header>
          <Modal.Title>{ isEdit ? 'Update Post' : 'Create Post'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
              type="text"
              className="form-control"
              id="title"
              required
              value={title}
              onChange={this.onChangeTitle}
              name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea className="form-control" rows="3" id="content" name="content" value={content} required onChange={this.onChangeContent}></textarea>
            </div>
            <div className="form-group">
              <label for="tags">Tags</label> 
              <TagsInput id="tags" value={tags} onChange={this.onChangeTags} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Close</button>
            {
              isEdit ? (<button type="button" className="btn btn-primary" onClick={this.updatePost}>Update</button>) : (<button type="button" className="btn btn-primary" onClick={this.saveNewPost}>Save</button>)
            }
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
import "./index.scss";
import React, { Component } from "react";
import { Tag, Button, Icon } from "antd";
import Comments from "../Comments/index";
import AddPost from "../AddPost/index";
import { get_post } from "../../actions/post";
import { connect } from "react-redux";

const tagColor = ["green", "red", "magenta", "gold","geekblue" ]

export class PostList extends Component {
  state = {
    visible: false,
  };

  UNSAFE_componentWillMount() {
      this.props.get_post();   
  }

  handleClick = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    const { postList } = this.props;
    
    return (
      <>
        <Button
          className="add-post"
          type="primary"
          onClick={this.handleClick}
          key="modal"
        >
          <Icon type="plus-circle" />
          Add new Post
        </Button>
        {postList.length ? 
        <div>
          {postList.map(post => (
            <div className="post">
              <div className="post-content">
                <div className="post__title" key="title">{post.title}</div>
                <div className="post__midle">
                  <div className="post__midle--create">
                    <div className="author">Author: John Smith</div>
                    <div className="createAt">Create at : {new Date(post.createAt).toDateString()}</div>
                  </div>
                  <div className="post__midle--tag">
                  {post.tags ? post.tags.map(item => ( <Tag color={tagColor[Math.floor(Math.random() * 10 / 3)]}>{item}</Tag>)) : ''}
                  </div>
                </div>

                <div className="post__content" key="content">{post.content}</div>

                <Comments></Comments>
              </div>
            </div>
          ))}
        </div> :''}
        <AddPost visible={visible} handleCancel={this.handleCancel} />
      </>
    );
  }
}

const mapStateToProps = ({ post }) => ({ postList:  post.postList});

export default connect(mapStateToProps, { get_post })(PostList);

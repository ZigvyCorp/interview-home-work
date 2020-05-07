import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';

class Home extends Component {
  componentDidMount() {
    this.props.requestData()
  }

  render() {
    const { postList, commentList, userList } = this.props;
    return (
      <div className="container" style={{ marginTop: 54 }}>
        <div className="row">
          <div className="col" style={{ marginTop: 24 }}>
            {postList.map(post => {
              const owner = userList.filter(user => user.id == post.owner)
              const comments = commentList.filter(comment => comment.post == post.id)
              return (
                <PostCard
                  id={post.id}
                  title={post.title}
                  author={owner[0].name}
                  createdAt={post.created_at}
                  shortContent={post.content.slice(0, 100) + '...'}
                  commentList={comments}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userList,
    postList: state.postList,
    commentList: state.commentList,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestData: () => {
      dispatch({ type: 'REQUEST_DATA' });
    }
  }
};

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default Home;
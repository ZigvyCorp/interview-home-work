import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostCard from '../components/PostCard';
import FloatingButton from '../components/FloatingButton';

class Home extends Component {
  componentDidMount() {
    this.props.requestData()
  }

  render() {
    const { postList, commentList, userList, searchTerms, currentUserId } = this.props;
    const filteredPostList = searchTerms !== "" ? postList.filter(post => {
      const terms = searchTerms.toLowerCase().split(" ")
      const found = terms.some(term => {
        return post.title.toLowerCase().indexOf(term) >= 0 || post.tags.indexOf(term) >= 0
      })
      return found
    }) : postList
    return (
      <div className="container" style={{ marginTop: 54 }}>
        <div className="row">
          <div className="col" style={{ marginTop: 24 }}>
            {filteredPostList.map(post => {
              const owner = userList.filter(user => user.id == post.owner)
              const comments = commentList.filter(comment => comment.post == post.id)
              return (
                <PostCard
                  key={post.id}
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
        {currentUserId && <FloatingButton />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userList,
    postList: state.postList,
    commentList: state.commentList,
    searchTerms: state.searchTerms,
    currentUserId: state.currentUserId
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
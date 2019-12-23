import React from 'react';
import * as types from '../../redux/actions/actionTypes'
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onLoad } = this.props;
    const endpoint = 'http://localhost:8080/api/posts';
    axios.get(endpoint).then(res => onLoad(res.data));
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">Blogs</h1>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            {posts && posts.map((post) => {
              return (
                <div className="card my-3" key={post._id}>
                  <div className="card-header card-article-title">
                    {post.title}
                  </div>
                  <div className="card-body">
                    <div className="tag-field">
                      <div className="card-article-tag">
                        {post.tags.map(tag => {
                          return <div className="tag-item"> {tag} </div>
                        })}
                      </div>
                    </div>
                    <p className="text-muted card-author"><b>{post.owner}</b></p>
                    <p className="card-created-date">Created at: {moment(new Date(post.created_at)).fromNow()}</p>

                    <div className="card-post-content">{post.content}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = dispatch => ({
  onLoad: posts => dispatch({ type: types.LOAD_ALL_POSTS, posts }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
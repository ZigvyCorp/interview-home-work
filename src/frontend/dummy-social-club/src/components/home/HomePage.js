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
    const {onLoad} = this.props;
    const endpoint = 'http://localhost:8080/api/posts';
    axios.get(endpoint).then(res => onLoad(res.data) );
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
                <div className="card-header">
                  {post.title}
                </div>
                <div className="card-body">
                  {post.content}
                  <p className="mt-5 text-muted"><b>{post.owner}</b> {moment(new Date(post.created_at)).fromNow()}</p>
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
  state: state
});

const mapDispatchToProps = dispatch => ({
  onLoad: posts => dispatch({type: types.LOAD_ALL_POSTS, posts}),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
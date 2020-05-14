import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/index';

class PostDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  renderTag(tags) {
    return tags.map(tag => {
      return <a className="badge badge-primary tag" href="#" key={tag}>{tag}</a>
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading</div>
    }

    let date = new Date(post.created_at).toDateString();
    return (
      <div className="post-detail" key={post.id}>
        <div className="header-post">
          <h3 className="text-center">{post.title}</h3>
          <p> <span className="font-weight-bold">Author:</span> <span> {post.owner}</span></p>
          <p> <span className="font-weight-bold">Created Date:</span> <span> {date}</span></p>
        </div>
        <div className="content-post"><span>{post.content}</span></div>
        {this.renderTag(post.tags)}
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostDetail);

import { PostList } from '../components';
import { connect } from 'react-redux';
import { fetchNewestPosts } from '../store/actions/posts';

const mapStateToProps = state => {
  const { loading, totalCount, posts = []} = state.posts.toJS()
  return ({
    loading,
    totalCount,
    posts,
    hasMore: !loading && totalCount > posts.length
  })
}

const mapDispatchToProps = dispatch => ({
  fetchNewestPosts: (payload) => dispatch(fetchNewestPosts(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);


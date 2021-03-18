import { PostDetail } from '../components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchPostDetail } from '../store/actions/posts'

const mapStateToProps = state => ({
  post: state.posts.getIn(['postDetail', 'post']).toJS(),
  loading: state.posts.getIn(['postDetail', 'loading'])
});
const mapDispatchToProps = dispatch => ({
  fetchPostDetail: (id) => dispatch(fetchPostDetail({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetail));


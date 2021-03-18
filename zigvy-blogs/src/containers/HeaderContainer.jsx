import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header } from '../components';
import { setFilter } from '../store/actions/posts';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  setFilter: (payload) => dispatch(setFilter(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));

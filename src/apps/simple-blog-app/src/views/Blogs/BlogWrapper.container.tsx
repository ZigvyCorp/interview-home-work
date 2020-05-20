import React from 'react';
import BlogModel from '../../shared/models/Blog';
import Blog from './Blog.view';
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

interface IProps {
  blogs: BlogModel[],
  fetchBlogs: (skip: number) => any
}

interface IState {
  hasMore: boolean,
}
class BlogWrapper extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    blogs: [],
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      hasMore: false,
    };
  }

  componentDidMount() {
    this.props.fetchBlogs(0);
  }

  buildBlogs() {
    return this.props.blogs.map(blog => <Row key={blog._id} ><Blog blog={blog} /></Row>);
  }

  render() {
    return (
      <Container>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.props.fetchBlogs}
          hasMore={this.state.hasMore}
          loader={<div className="loader" key={0}>Loading ...</div>}
          useWindow={false}
        >
          {this.buildBlogs()}
        </InfiniteScroll>
      </Container>
    )
  };
}
interface RootState {
  blogState: {
    blogs: []
  }
}

const mapState = (state: RootState) => ({
  blogs: state.blogState.blogs
})

const mapDispatch = {
  fetchBlogs: (skip: number) => ({ type: 'API_CALL_REQUEST', skip })
}
const connector = connect(mapState, mapDispatch)

export default connector(BlogWrapper);

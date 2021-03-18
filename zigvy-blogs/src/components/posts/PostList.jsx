import React from 'react';
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import PostItem from './PostItem';

export default class PostList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.loadNewestPosts(true)
  }

  handleInfiniteOnLoad() {
    this.loadNewestPosts(false)
  };

  loadNewestPosts(isRefreshed) {
    const { fetchNewestPosts } = this.props
    fetchNewestPosts({ isRefreshed })
  }

  render() {
    const { posts, hasMore } = this.props
    return (
      <div>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={() => this.handleInfiniteOnLoad()}
          hasMore={hasMore}
          loader={<div key="loader"><Spin/></div>}
        >
          <List
            dataSource={posts}
            renderItem={post => (
              <List.Item key={post.id}>
                <PostItem post={post}/>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    );
  }
}

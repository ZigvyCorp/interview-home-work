import React, { Component } from 'react';
import { connect } from 'react-redux';

import { get as _get } from 'lodash';
import { List, Button, Skeleton, Input } from 'antd';

import * as actions from './../../store/actions';
import ShortPost from './../../components/ShortPost/ShortPost';

const LIMIT_POST = 5;
class Blogs extends Component {

  componentDidMount() {
    if(this.props.initLoading) this.props.initFetchPosts(LIMIT_POST);
  }

  loadMoreHandler = () => {
    this.props.fetchMorePosts(this.props.page, LIMIT_POST);
  }

  render() {
    const { initLoading, loading, reachLimit, list } = this.props;
    const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={this.loadMoreHandler} disabled={reachLimit}>{reachLimit ? `don't have any post` : 'loading more'}</Button>
      </div>
    ) : null;
    return (
      <>
        <Input.Search
          placeholder="Filter By Title"
          onChange={(e) => this.props.filterPostTitle(e.target.value)}
          value={this.props.filterTitleValue}
          size="large"
          style={{ width: '100%', marginBottom: '24px' }}
        />
        <List
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={item => {
            const id = _get(item, '_id', '');
            const title = _get(item, 'title', '');
            const author = _get(item, 'author.name', '');
            const createdAt = _get(item, 'createdAt', '');
            const tags = _get(item, 'tags', []);
            const shortContent = _get(item, 'content','').substring(0, 100);
            const comments = _get(item, 'comments', [])
            return (
              <Skeleton avatar title={false} loading={item.loading} active>
                <ShortPost
                  key={id}  
                  title={title}
                  author={author}
                  createdAt={createdAt}
                  tags={tags}
                  shortContent={shortContent}
                  comments={comments}
                />
              </Skeleton>
            )
          }}
        />
      </>
    )
  }
}


const mapStateToProps = (state) => {
  const { initLoading, loading, page, reachLimit, list, filterTitleValue } = state.blogs;
  return {
    initLoading,
    loading,
    page,
    reachLimit,
    list,
    filterTitleValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initFetchPosts: (limit) => dispatch(actions.initFetchPosts(limit)),
    fetchMorePosts: (page, limit) => dispatch(actions.fetchPosts(page, limit)),
    filterPostTitle: (value) => dispatch(actions.filterPostTitle(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
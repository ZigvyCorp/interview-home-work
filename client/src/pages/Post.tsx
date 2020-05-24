import React, { useEffect } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts } from './actions';
import { Skeleton } from 'antd';

function Post(props: any) {
  useEffect(() => {
    props.getPosts();
    // eslint-disable-next-line
  }, []);

  if (props.posts.loading) {
    return <Skeleton />;
  }

  return (
    <div>
      <Header />
      <PostList />
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ getPosts }, dispatch);
};

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

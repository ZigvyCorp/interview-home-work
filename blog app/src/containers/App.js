import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import { Route, Switch } from "react-router-dom";
import { fetchPosts, fetchComments, persistPosts } from "../store/actions/post";
import InfiniteScroll from "react-infinite-scroll-component";
import FullPost from "./FullPost/FullPost";
import Spinner from "../components/Spinner/Spinner";
import classes from "./App.module.css";

class App extends Component {
  state = { page: 1 };

  componentDidMount() {
    this.props.fetchingPosts(this.state.page);
    this.props.fetchComments();
    this.props.persistPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.fetchingPosts(this.state.page);
    }
    if (prevProps.showPosts !== this.props.showPosts) {
      this.props.persistPosts();
    }
  }

  render() {
    const posts = this.props.showPosts.map((p) => (
      <Posts
        key={p.id}
        title={p.title}
        body={p.body}
        id={p.id}
        cmt={this.props.cmt}
      />
    ));
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <InfiniteScroll
                dataLength={this.props.showPosts.length}
                next={() => {
                  this.setState({ page: this.state.page + 1 });
                }}
                hasMore={this.state.page > 10 ? false : true}
                loader={<Spinner />}
                endMessage={
                  <p className={classes.endMessage}>
                    <b>No more posts</b>
                  </p>
                }
              >
                {posts}
              </InfiniteScroll>
            )}
          />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showPosts: state.posts.posts,
    cmt: state.posts.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingPosts: (page) => dispatch(fetchPosts(page)),
    fetchComments: () => dispatch(fetchComments()),
    persistPosts: () => dispatch(persistPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

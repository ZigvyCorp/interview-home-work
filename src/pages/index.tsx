import React, { useEffect, useState } from "react";
import { Utils } from "../@helper/utils";
import { Posts } from "../API/Post/Interface";
import { Users } from "../API/User/Interface";
import { Header } from "../components/Header";
import { PostComponent } from "../components/Post";
import { LoadingActions, PostActions, UserActions } from "../store/actions";
import { createPostsSelector } from "../store/selectors/PostSelector";
import { createUsersSelector } from "../store/selectors/UserSelector";
interface IProps {
  postList: Posts.PostList;
  userList: Users.UserList;
  getUsers: Function;
  getPosts: Function;
}
const AppContainer = (props: IProps) => {
  const { userList, getUsers, getPosts, postList } = props;
  const [savePostListState, setSavePostListState] = useState(postList);
  const [postListState, setPostListState] = useState(postList);

  useEffect(() => {
    getUsers();
    getPosts();
  }, [getUsers, getPosts]);
  const handleSearch = (value: string) => {
    const tList = [...savePostListState].filter((item: Posts.Post) =>
      Utils.removeVietnameseTones(item.title || "").includes(
        Utils.removeVietnameseTones(value || "")
      )
    );
    setPostListState(tList);
  };
  return (
    <div className="container-fluid">
      <Header userInfo={userList[0].name} />
      <div className="mt-2 d-flex d-flex justify-content-center align-items-center">
        <input
          className="w-25 form-control"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <PostComponent PostList={postListState} />
    </div>
  );
};

export default Utils.connectToRedux({
  component: AppContainer,
  stateProps: (state: any) => ({
    userList: createUsersSelector()(state),
    postList: createPostsSelector()(state),
  }),
  dispatchProps: (dispatch: any) => {
    return {
      startLoadding: () => {
        dispatch(LoadingActions.start());
      },
      stopLoadding: () => {
        dispatch(LoadingActions.stop());
      },
      getUsers: () => dispatch(UserActions.fetchUsers()),
      getPosts: () => dispatch(PostActions.fetchPosts()),
    };
  },
});

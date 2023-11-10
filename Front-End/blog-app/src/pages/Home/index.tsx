import { Affix, Button, Skeleton, Space } from "antd";
import Post from "./Post";
import { useEffect } from "react";
import { getPostsRq } from "../../redux/actions/postAction";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, selectSearchText } from "../../redux/slices/postsSlice";
import { PostsType } from "../../models";
import { loadingPostsSelector } from "../../redux/slices/blacklistSlice";
import SkeletonHome from "./Skeleton";
import ModalPost from "./ModalPost";
import { showModal } from "../../redux/slices/modalSlice";

function Home() {
  const dispatch = useDispatch();
  const posts: PostsType[] = useSelector(selectPosts);
  const searchText = useSelector(selectSearchText);

  const postsSearch = posts.filter((post) => {
    return post?.title.toLowerCase().includes(searchText.toLowerCase());
  });
  const loading: boolean = useSelector(loadingPostsSelector);
  const showModalHandler = () => {
    dispatch(showModal());
  };
  useEffect(() => {
    dispatch(getPostsRq());
  }, []);
  return (
    <div>
      <Space direction="vertical" size={[0, 16]} style={{ display: "flex" }}>
        <ModalPost />
        {loading ? (
          <SkeletonHome />
        ) : (
          postsSearch?.map((item, i: number) => <Post key={i} post={item} />)
        )}
        <Affix style={{ position: "absolute", right: 60 }} offsetBottom={60}>
          <Button type="primary" onClick={showModalHandler}>
            Add post
          </Button>
        </Affix>
      </Space>
    </div>
  );
}

export default Home;

import { Row } from "antd";
import postData from "../../../../data/posts.json";
import { Post } from "@/components/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getListPostActionRequest,
  searchPostActionRequest,
} from "@/redux/actions/postActions";

export default function PostList(): React.ReactElement {
  const dispatch = useDispatch();
  const valuePostState = useSelector((state: any) => state.postStates);

  const { loading, error, listPost, commentsData } = valuePostState;
  const { data, Pagination } = listPost;

  useEffect(() => {
    dispatch(getListPostActionRequest({ pageNumber: 1, pageSize: 10 }));
  }, []);

  const onSearch = (value: any) => {
    dispatch(
      searchPostActionRequest({ pageNumber: 1, pageSize: 10, title: value })
    );
  };
  return (
    <Row className="">
      {data?.map
        ? data?.map((item: any) => (
            <Post
              title={item.title}
              content={item.content}
              created_at={item.create_at}
              tags={item.tags}
              owner={1}
            />
          ))
        : ""}
    </Row>
  );
}

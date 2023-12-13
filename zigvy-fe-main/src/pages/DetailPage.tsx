import { Space, Tag, Divider, Avatar, Tooltip, Typography, Spin } from "antd";
import { useParams } from "react-router-dom";
import { defaultAva } from "../res";
import { Comment } from "@ant-design/compatible";
import { useDispatch, useSelector } from "react-redux";
import { taskPostSelector, taskUserSelector } from "../redux/selector";
import { AppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { fetchDetailPost } from "../redux/slices/postSlicer";
import { fetchUserById } from "../redux/slices/userSlicer";
import { useQuery } from "react-query";
import CommentService from "../services/CommentService";

const { Text, Title } = Typography;
function DetailPage() {
  const { postId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const postSelector = useSelector(taskPostSelector);
  const userSelector = useSelector(taskUserSelector);
  const [error, setError] = useState(false);

  const fetchCommentsQuery = useQuery({
    queryKey: ["comment", postId],
    queryFn: () => CommentService.fetchCommentFromPost(+postId!),
    onSuccess: (_) => {},
  });

  useEffect(() => {
    if (postId) {
      dispatch(fetchDetailPost(postId));
    } else {
      setError(true);
    }
  }, []);

  useEffect(() => {
    if (postSelector.data.postDetail?.userId) {
      dispatch(fetchUserById(postSelector.data.postDetail.userId.toString()));
    }
  }, [postSelector.data.postDetail]);
  if (error || postSelector.error) {
    return (
      <div className="h-[100%] flex justify-center items-center">
        <Title>Error fetching data</Title>
      </div>
    );
  }

  return postSelector.isLoading ? (
    <div className="h-[100%] flex justify-center items-center">
      <Spin size="large" />
    </div>
  ) : (
    <div className="flex flex-col justify-start items-center w-[90%] border-2 p-2 mb-2 rounded-md">
      <Title level={2}>{postSelector.data.postDetail?.title}</Title>
      <div className="flex w-[100%] flex-row justify-between items-center">
        <div className="flex flex-1 flex-col">
          <Text strong={true}>
            Author: {userSelector.data.userDetail?.name}
          </Text>
          <Text strong={true}>Created at: Set 18, 2018</Text>
        </div>
        <div className="w-[30%]">
          <Space size={[0, 5]} wrap={true}>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
          </Space>
        </div>
      </div>
      <div className="w-[100%] pt-3">
        <Text strong={true}>
          {postSelector.data.postDetail?.body.substring(0, 100)}
        </Text>
      </div>
      <div className="w-[100%] pt-3">
        <Text strong={true}>
          {fetchCommentsQuery.isLoading ? 0 : fetchCommentsQuery.data?.length}{" "}
          replies
        </Text>
        <Divider />
        {fetchCommentsQuery.isFetched &&
          fetchCommentsQuery.data?.map((comment) => {
            return (
              <Comment
                key={comment.id}
                className="px-3"
                author={
                  <Text strong className="text-black">
                    {comment.name}
                  </Text>
                }
                avatar={<Avatar size={"large"} src={defaultAva} />}
                content={<Text>{comment.body}</Text>}
                datetime={
                  <Tooltip title="2016-11-22 11:22:33">
                    <span>8 hours ago</span>
                  </Tooltip>
                }
                actions={[<span key="comment-nested-reply-to">Reply to</span>]}
              />
            );
          })}
      </div>
    </div>
  );
}

export default DetailPage;

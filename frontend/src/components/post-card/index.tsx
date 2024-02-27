import { Button, Card, Flex, Tag, Typography } from "antd";
import "./style.css";
import {
  ArrowLeftOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Comment from "../comment";
import { Fragment, useEffect, useState } from "react";
import { apiGetAllComments, apiGetUser } from "../../apis";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const PostCard = ({
  data,
  detail = false,
}: {
  data: any;
  detail?: boolean;
}) => {
  const navigate = useNavigate();
  const [isShowComment, setIsShowComment] = useState(false);
  const [author, setauthor] = useState<any>({});
  const [comments, setComments] = useState<any>([]);

  const fetchAuthor = async () => {
    const response = await apiGetUser(data?.userId);
    if (response?.status === 200) {
      setauthor(response?.data);
    }
  };

  const fetchComents = async () => {
    const response = await apiGetAllComments(data?.id);
    if (response?.status === 200) {
      setComments(response?.data);
    }
  };
  useEffect(() => {
    setIsShowComment(false);
    fetchAuthor();
    fetchComents();
  }, [data]);

  return (
    <Card
      style={{
        width: "100%",
        border: "1px solid #cedfdf",
        position: "relative",
      }}
    >
      {detail && (
        <ArrowLeftOutlined
          size={32}
          style={{
            position: "absolute",
            left: "15px",
            top: "15px",
            cursor: "pointer",
          }}
          className="icon-back"
          onClick={() => navigate(-1)}
        />
      )}

      <Flex vertical gap="8px">
        <Title
          level={3}
          style={{ textAlign: "center", padding: "0 48px", cursor: "pointer" }}
          onClick={() => !detail && navigate(`/blog/${data?.id}`)}
        >
          {data?.title}
        </Title>
        <Flex justify="space-between" align="center">
          <div>
            <Paragraph strong>{`Author: ${author?.name}`}</Paragraph>
            <Paragraph strong>Created at: 16/12/2002</Paragraph>
          </div>
          <Flex wrap="wrap" gap="small" style={{ width: "30%" }}>
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
          </Flex>
        </Flex>
        <Paragraph>
          {!detail && data?.body?.length > 100
            ? `${data?.body?.slice(0, 100)} ...`
            : data?.body}
        </Paragraph>
        <div
          style={{
            borderBottom: "2px solid #cedfdf",
          }}
        >
          <Button
            type="text"
            icon={isShowComment ? <DownOutlined /> : <RightOutlined />}
            onClick={() => setIsShowComment(!isShowComment)}
          >
            {comments?.length} replies
          </Button>
        </div>
        {isShowComment &&
          comments?.map((el: any, index: any) => (
            <Fragment key={index}>
              <Comment data={el} />
            </Fragment>
          ))}
      </Flex>
    </Card>
  );
};

export default PostCard;

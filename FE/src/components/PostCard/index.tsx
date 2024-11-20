import { Col, Collapse, ConfigProvider, Divider, Flex, Row, Space, Tag, Typography } from "antd";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import CustomComment from "../../components/CustomComment";
import { CommentList } from "../../models/comments.model";
import { Post } from "../../models/posts.model";
import { getCommentByPostId } from "../../services/api/comments.api";
import { theme } from "../../styled/theme/globalTheme";
import truncateTextWithEllipsis from "../../helper/ellipsis";
import { useResponsiveBreakpoints } from "../../hooks/useResponsiveBreakpoints ";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;
const currentDate = moment().format("DD/MM/YYYY");

interface PostCardProps extends Post {
  isEllipsis?: boolean;
}

const PostCard = ({ title, body, userName, id, isEllipsis = true }: PostCardProps) => {
  const [commentList, setCommentList] = useState<CommentList>([]);
  const { isMobile } = useResponsiveBreakpoints();
  const navigate = useNavigate();

  const fetchCommentList = useCallback(async () => {
    try {
      const { data } = await getCommentByPostId(id);
      setCommentList(data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const navigateToPostDetail = () => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    fetchCommentList();
  }, [fetchCommentList]);

  return (
    <Flex
      vertical
      style={{
        paddingBottom: "1rem",
      }}
    >
      <Flex justify='center' style={{ width: "100%", textAlign: "center" }}>
        <Title
          style={{ cursor: !isEllipsis ? "default" : "pointer" }}
          onClick={!isEllipsis ? undefined : navigateToPostDetail}
          level={isMobile ? 4 : 1}
        >
          {title}
        </Title>
      </Flex>
      <Row
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "1rem",
          flexDirection: isMobile ? "column" : "row",
          gap: "1rem",
        }}
      >
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 6,
          }}
        >
          <Flex vertical>
            <Text
              style={{
                fontSize: isMobile ? theme.fontSizes.md : theme.fontSizes["2xl"],
                fontWeight: theme.fontWeights.semiBold,
                lineHeight: isMobile ? theme.lineHeights.md : theme.lineHeights["2xl"],
              }}
            >
              {`Author: ${userName}`}
            </Text>
            <Text
              style={{
                fontSize: isMobile ? theme.fontSizes.md : theme.fontSizes["2xl"],
                fontWeight: theme.fontWeights.semiBold,
                lineHeight: isMobile ? theme.lineHeights.md : theme.lineHeights["2xl"],
              }}
            >
              {`Created at: ${currentDate}`}
            </Text>
          </Flex>
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 6,
          }}
        >
          <Space size={[0, 8]} wrap>
            <Tag color='magenta'>magenta</Tag>
            <Tag color='red'>red</Tag>
            <Tag color='volcano'>volcano</Tag>
            <Tag color='orange'>orange</Tag>
            <Tag color='gold'>gold</Tag>
            <Tag color='lime'>lime</Tag>
            <Tag color='green'>green</Tag>
            <Tag color='cyan'>cyan</Tag>
            <Tag color='blue'>blue</Tag>
            <Tag color='geekblue'>geekblue</Tag>
            <Tag color='purple'>purple</Tag>
          </Space>
        </Col>
      </Row>
      <Paragraph
        style={{
          fontSize: "24px",
          fontWeight: theme.fontWeights.semiBold,
          lineHeight: theme.lineHeights["2xl"],
          cursor: !isEllipsis ? "default" : "pointer",
        }}
        onClick={!isEllipsis ? undefined : navigateToPostDetail}
      >
        {isEllipsis ? truncateTextWithEllipsis(body, 100) : body}
      </Paragraph>
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              padding: 0,
              contentPadding: 0,
            },
          },
        }}
      >
        <Collapse ghost bordered={false}>
          <Panel forceRender showArrow={false} header={`${commentList.length} reply`} key='1'>
            {commentList.length && commentList.map((comment) => <CustomComment key={comment.id} {...comment} />)}
          </Panel>
        </Collapse>
        <Divider style={{ margin: 0 }} />
      </ConfigProvider>
    </Flex>
  );
};

export default PostCard;

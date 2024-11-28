import { Collapse, Typography } from "antd";

const { Panel } = Collapse;
const { Text } = Typography;

const CommentsList = ({ postId, comments }) => {
  const postComments = comments.filter((comment) => comment.postId === postId);
  const commentCount = postComments.length;

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Collapse defaultActiveKey={[]} expandIconPosition="right">
        <Panel
          header={
            <Text strong>
              {commentCount} Comment{commentCount !== 1 ? 's' : ''}
            </Text>
          }
          key="1"
        >
          <ul style={{ listStyleType: "none", paddingLeft: "1rem" }}>
            {postComments.map((comment) => (
              <li key={comment.id}>
                <Text strong>
                  {comment.name} ({comment.email}):
                </Text>{" "}
                {comment.body}
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
};

export default CommentsList;

/* eslint-disable react/prop-types */
import { Avatar, Collapse, Flex, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { formDateToNow } from '../utils/DateFormat';
const { Text, Paragraph } = Typography;
export const CommentSection = ({ postId, comments }) => {
  const filteredComments = comments.filter(
    (comment) => comment.post._id === postId
  );
  const commentCount = filteredComments.length;

  return (
    <Collapse ghost defaultActiveKey={[]}>
      {commentCount > 0 ? (
        <Collapse.Panel
          showArrow={false}
          header={
            <div
              style={{ borderBottom: '1px solid grey' }}
            >{`${commentCount} replies`}</div>
          }
          key="1"
        >
          {filteredComments.map((comment) => (
            <Flex gap="10px" style={{ margin: '10px' }} key={comment._id}>
              <Flex>
                <Avatar icon={<UserOutlined />} />
              </Flex>

              <Flex vertical gap="1px" style={{ marginBottom: '20px' }}>
                <Text
                  style={{
                    fontSize: '16px',
                    color: 'grey',
                  }}
                >
                  {comment.owner.name || comment.owner.username}
                  <Text style={{ color: 'darkgray', marginLeft: '10px' }}>
                    {formDateToNow(comment.created_at)}
                  </Text>
                </Text>

                <Paragraph>{comment.content}</Paragraph>
                <Text style={{ color: 'gray' }}>Reply to</Text>
              </Flex>
            </Flex>
          ))}
        </Collapse.Panel>
      ) : (
        <Collapse.Panel
          showArrow={false}
          header={
            <div
              style={{ borderBottom: '1px solid grey' }}
            >{`${commentCount} replies`}</div>
          }
        />
      )}
    </Collapse>
  );
};

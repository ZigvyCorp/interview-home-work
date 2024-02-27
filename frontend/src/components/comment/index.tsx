import { Flex, Typography } from "antd";
import moment from "moment";

const { Paragraph } = Typography;

const Comment = ({ data }: { data: any }) => {
  return (
    <Flex gap="8px">
      <img
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt=""
        width="32px"
        height="32px"
      />
      <Flex vertical>
        <Flex gap="8px">
          <Paragraph strong>{data?.name}</Paragraph>
          <Paragraph italic>{moment().fromNow()}</Paragraph>
        </Flex>
        <Paragraph>{data?.body}</Paragraph>
      </Flex>
    </Flex>
  );
};

export default Comment;

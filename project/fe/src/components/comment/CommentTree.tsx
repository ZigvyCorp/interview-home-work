import { UserOutlined } from "@ant-design/icons";
import { Flex, Avatar } from "antd";
import { useState } from "react";
import { CommentInput } from "./CommentInput";
import { IComment } from "../../utils/type";

const CommentTree = ({ comment }: { comment: IComment[] }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      {comment.map((item) => (
        <Flex gap={10} key={item._id}>
          <Avatar icon={<UserOutlined />} />
          <div>
            <div>Han Solo 2 days ago</div>
            <p>contnet</p>
            <>
              <span
                role="button"
                style={{ cursor: "pointer" }}
                onClick={() => setShow(!show)}
              >
                Reply
              </span>
              {show && <CommentInput />}
            </>
          </div>
        </Flex>
      ))}
    </div>
  );
};

export default CommentTree;

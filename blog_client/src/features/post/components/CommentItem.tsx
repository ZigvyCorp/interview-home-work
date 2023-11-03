import { useAppSelector } from "../../../app/hooks";
import { Comment } from "../../../models/comment";
import { selectUserList } from "../../user/userSlice";
import { Avatar, List } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { shortenContent } from "../../../utils/shortenContent";

function CommentItem({ data }: { data: Comment[] }) {
  const userList = useAppSelector(selectUserList);

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size="small" icon={<UserOutlined />} />}
              title={
                <p className="d-flex justify-content-start">
                  {userList?.find((user: any) => user.id === item.owner)
                    ?.name || "No Name"}
                </p>
              }
              description={
                <span className="d-flex justify-content-start">
                  <p className="text-justify">{shortenContent(item.content)}</p>
                </span>
              }
            />
          </List.Item>
          <a className="d-flex justify-content-start">Reply</a>
        </>
      )}
    />
  );
}

export default CommentItem;

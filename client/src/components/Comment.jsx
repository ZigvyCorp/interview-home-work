import { Avatar, List } from "antd";

const Comment = ({ data }) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item key={index}>
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            />
          }
          title={<a href="https://ant.design">{item.name}</a>}
          description="dbsbdfhsdbfjhsdj"
        />
      </List.Item>
    )}
  />
);
export default Comment;

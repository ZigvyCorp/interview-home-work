import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Collapse,
  Flex,
  Space,
  Tag,
  Tooltip,
} from "antd";
import { Link } from "react-router-dom";
import { BLOG_PATH, PATHS } from "../../constants/path";

const BlogItem = ({ id, user, comments, description, title }) => {
  return (
    <>
      <Link to={BLOG_PATH + `/${id}`}>
        <Card title={title} bordered={true}>
          <Flex justify="space-between">
            {/* Author */}
            <div>
              {user?.name && <p>Author: {user.name}</p>}
              <p>Created at: Sep 20, 2018</p>
            </div>

            {/* Tags */}
            <Space size={[0, 6]} wrap style={{ maxWidth: "314px" }}>
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
          </Flex>

          {/* Content */}
          <div className="post-content text-overflow">{description || ""}</div>

          {/* Comments */}
          <Collapse
            bordered={false}
            size="small"
            items={[
              {
                key: "1",
                label: `${comments?.length} replies`,
                children: comments?.map((comment, index) => {
                  const { name, body } = comment || {};
                  return (
                    <div
                      style={{ display: "flex", gap: 26, marginTop: 8 }}
                      key={comment.id || new Date().getDate() + index}
                    >
                      {/* Avatar */}
                      <Tooltip title={name || ""} placement="top">
                        <Avatar
                          src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                          icon={<UserOutlined />}
                        />
                      </Tooltip>

                      {/* Content */}
                      <div className="comment-content">
                        <p className="comment-content__user">
                          {!!name && <span>{name}</span>}
                          <span>a day ago</span>
                        </p>
                        {!!body ? (
                          <p className="comment-content__desc text-overflow">
                            {body}
                          </p>
                        ) : (
                          <p>No comment</p>
                        )}
                        <Button type="text" className="comment-content__reply">
                          Reply to
                        </Button>
                      </div>
                    </div>
                  );
                }),
              },
            ]}
            expandIcon={() => <></>}
          />
        </Card>
      </Link>
    </>
  );
};

export default BlogItem;

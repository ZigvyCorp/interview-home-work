import { Flex, Tag } from "antd";
import Comment from "../comment/Comment";
import { IBlog } from "../../utils/type.ts";
import { Link } from "wouter";

const tagList = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];
const Blogs: React.FC<IBlog> = ({ title, content, createdAt, author, _id }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link
          to={`/detail/${_id}`}
          style={{
            color: "#333",
            fontSize: "28px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          {title}
        </Link>
      </div>
      <Flex justify="space-between">
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li>Author: {author}</li>
            <li>Created at: {createdAt}</li>
          </ul>
        </div>
        <div style={{ maxWidth: 350 }}>
          {tagList.map((item, index) => (
            <Tag key={index} color={item}>
              {item}
            </Tag>
          ))}
        </div>
      </Flex>
      <div style={{ margin: "10px", padding: "0 30px" }}>
        <p>{content}</p>
      </div>
      <Comment blogid={_id}/>
    </div>
  );
};

export default Blogs;

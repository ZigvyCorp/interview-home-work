import { Typography, Flex } from "antd";
import styles from "./post.module.css";
import { Ref, forwardRef, useState } from "react";
import Colors from "../colors/colors.componet";
import { Comments } from "../comments";
import { Link } from "react-router-dom";
import { ROUTES } from "src/constant/navigation.constant";
const { Title, Paragraph, Text } = Typography;
interface IPostProps {
  title: string;
  author: string;
  createdAt: Date;
  content: string;
  postId: number;
}

const Post = forwardRef(
  (
    { content, title, author, createdAt, postId }: IPostProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    return (
      <Link ref={ref} to={`${ROUTES.POSTS}/${postId}`} className={styles.post}>
        <Title className={styles.title}>{title}</Title>
        <Flex className={styles.postDetails} justify="space-between">
          <Flex vertical gap="small">
            <Text strong>Author: {author}</Text>
            <CreatedAtPost createdAt={createdAt} />
          </Flex>
          <Colors />
        </Flex>
        <PostContent content={content} />

        <Comments postId={postId} />
      </Link>
    );
  }
);
// const Post = () => {
//   return (
//     <Link to={`${ROUTES.POSTS}/${postId}`} className={styles.post}>
//       <Title className={styles.title}>{title}</Title>
//       <Flex className={styles.postDetails} justify="space-between">
//         <Flex vertical gap="small">
//           <Text strong>Author: {author}</Text>
//           <CreatedAtPost createdAt={createdAt} />
//         </Flex>
//         <Colors />
//       </Flex>
//       <PostContent content={content} />

//       <Comments postId={postId} />
//     </Link>
//   );
// };
const PostContent = ({ content }: { content: string }) => {
  const [isShowFullContent, setIsShowFullContent] = useState(false);
  const splitCharacters = content.split(" ");
  const displayedContent = isShowFullContent
    ? content
    : content.split(" ").slice(0, 100).join(" ");
  const handleShowText = () => {
    setIsShowFullContent((prev) => !prev);
  };
  return (
    <Paragraph className={styles.paragraph} strong>
      {displayedContent}
      {splitCharacters.length > 100 && (
        <button
          style={{
            marginLeft: "8px",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={handleShowText}
        >
          {" "}
          {!isShowFullContent && "..."}
          <span style={{ color: "var(--color-primary)" }}>
            {isShowFullContent ? "Show Less" : "Show full"}{" "}
          </span>
        </button>
      )}
    </Paragraph>
  );
};
const CreatedAtPost = ({ createdAt }: { createdAt: Date }) => {
  const date = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  }).format(date || new Date());

  return <Text strong>Created at: {formattedDate}</Text>;
};

export default Post;

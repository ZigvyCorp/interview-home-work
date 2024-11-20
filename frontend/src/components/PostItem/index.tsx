import Card from "react-bootstrap/Card";
import CommentSection from "src/components/CommentSection";
import { formatCreatedDate } from "./utils";
import classNames from "classnames";
import "./style.css";
import { IComment } from "src/interfaces/comment";

export interface IPostItemProps {
  id: string;
  author: string;
  createdAt: string;
  title: string;
  content: string;
  comments: IComment[];
  isViewDetail: boolean;
}

const PostItem = (props: IPostItemProps) => {
  const { id, author, createdAt, title, content, comments, isViewDetail } =
    props;

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          {title} {id}
        </Card.Title>
        <Card.Text className="my-0">Author: {author}</Card.Text>
        <Card.Text>Created at: {formatCreatedDate(createdAt)}</Card.Text>
        <Card.Text
          className={classNames("mb-1", {
            "text-truncate": !isViewDetail,
          })}
        >
          {content}
        </Card.Text>
        {!isViewDetail && (
          <Card.Link
            href={`/posts/${id}`}
            target="_blank"
            className="mb-2 d-block"
          >
            View post
          </Card.Link>
        )}
        <CommentSection
          comments={comments}
          isViewDetail={isViewDetail}
          postId={Number(id)}
        />
      </Card.Body>
    </Card>
  );
};

export default PostItem;

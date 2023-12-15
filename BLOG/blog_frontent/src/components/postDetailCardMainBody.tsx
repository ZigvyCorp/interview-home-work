import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PostType } from "types/postType";
import DateFormat from "utils/dateFormat";

const PostDetailCardMainBody: FC<{ postItem: PostType }> = ({ postItem }) => (
  <Card.Body>
    <Card.Title className="mt-4 mb-4 text-center">{postItem.title}</Card.Title>
    <Card.Subtitle className="mb-3 text-muted">
      Author: {postItem.user.name}
    </Card.Subtitle>
    <Card.Subtitle className="mb-3 text-muted">
      Create at: {DateFormat(postItem.createdAt)}
    </Card.Subtitle>
    <Card.Text>{postItem.body}</Card.Text>

    <div className="view_details ">
      <Link to="/">
        <Button className=" font-bold Allbtn " variant="outline-dark">
          Back Home
        </Button>
      </Link>
    </div>
  </Card.Body>
);

export default PostDetailCardMainBody;

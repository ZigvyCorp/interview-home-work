import { FC } from "react";
import { Card, useAccordionButton, Accordion } from "react-bootstrap";
import CommentSection from "./commentCard";
import { PostType } from "types/postType";
import { CommentType } from "types/commentType";
import { Link } from "react-router-dom";
import DateFormat from "utils/dateFormat";

function ContextAwareToggle({ children, eventKey, callback }: any) {
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );
  return (
    <button
      className="w-100 bg-selectPostList border-0 pl-2 d-flex align-items-start"
      type="button"
      onClick={decoratedOnClick}
    >
      <p> {children}</p>
    </button>
  );
}

const PostCard: FC<{ postItem: PostType }> = ({ postItem }) => {
  const detailPostUrl = `/detail-post/${postItem._id}`;

  return (
    <>
      {postItem && (
        <Card style={{ width: "90vw" }} key={postItem._id}>
          <Card.Body>
            <Link to={detailPostUrl} className="text-decoration-none">
              <Card.Title className="text-center text-black">
                {postItem.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Author: {postItem.user.name}
              </Card.Subtitle>

              <Card.Subtitle className="mb-2 text-muted">
                Create at: {DateFormat(postItem.createdAt)}
              </Card.Subtitle>

              <Card.Text className="text-black">
                {postItem.body.length > 100
                  ? `${postItem.body.substring(0, 100)}...`
                  : postItem.body}
              </Card.Text>
            </Link>
          </Card.Body>

          <Card.Body className="border-top p-0">
            <Accordion defaultActiveKey="0">
              <Card className="border-0 w-100">
                <Card.Header className="bg-transparent border-0">
                  <ContextAwareToggle eventKey="1">
                    <b>{postItem.comments.length} Reply</b>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="pt-0">
                    <CommentSection
                      commentListItems={postItem.comments as CommentType[]}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default PostCard;

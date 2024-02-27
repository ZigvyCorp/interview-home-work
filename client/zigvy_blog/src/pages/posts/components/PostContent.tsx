import { Container } from "react-bootstrap";
import { PostDataType } from "../model";
import { useState } from "react";

/**
 * Renders the content of a post.
 * @param body - the body of the post
 * @returns the rendered post content
 */
export default function PostContent({ body }: Pick<PostDataType, "body">) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <Container className="d-flex justify-content-center my-1">
      {!isExpanded ? (
        <>
          {body.length >= 100 ? (
            <div className="d-flex">
              <p>
                {body.slice(0, 250)}...{" "}
                <span
                  className="text-decoration-underline fw-bold"
                  onClick={() => {
                    setIsExpanded(!isExpanded);
                  }}
                >
                  view more
                </span>
              </p>
            </div>
          ) : (
            body
          )}
        </>
      ) : (
        <p>
          {body}{" "}
          <span
            className="text-decoration-underline fw-bold"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            view less
          </span>
        </p>
      )}
    </Container>
  );
}

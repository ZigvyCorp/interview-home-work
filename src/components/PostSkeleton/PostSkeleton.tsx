import React from "react";
import { Placeholder } from "react-bootstrap";

const PostSkeleton = () => {
  return (
    <div className="post shadow p-3 mb-5 bg-white rounded">
      <Placeholder animation="glow">
        <div className="post__content">
          <div className="post_content-heading column-gap-2">
            <div>
              <Placeholder className="mb-1 fw-bold" size="sm" xs={5} />
            </div>
            <div>
              <Placeholder className="mb-1 fw-bold" size="sm" xs={6} />
            </div>
          </div>
          <div className="post_content-body">
            <Placeholder className="mt-3 mb-4" xs={12} style={{ height: 40 }} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={8} />
          </div>
        </div>
      </Placeholder>
    </div>
  );
};

export default PostSkeleton;

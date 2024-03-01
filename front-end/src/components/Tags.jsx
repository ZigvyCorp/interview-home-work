import React from "react";
import Button from "react-bootstrap/Button";
import getRandomVariant from "../utils/randomVariant";
function Tags({ tags }) {
  return (
    <div className="d-flex justify-content-end">
      {tags
        ? tags.map((tag, index) => (
            <Button className="fw-bold m-2" key={index} variant={getRandomVariant()}>
              {tag}
            </Button>
          ))
        : null}
    </div>
  );
}

export default Tags;

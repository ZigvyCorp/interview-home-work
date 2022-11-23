import { Avatar, Col } from "antd";
import moment from "moment";
import React from "react";

const Comment = ({ name, content, created_at, postId }) => {

  return (
    <Col span={24}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <div style={{ marginTop: 10 }}>
          <Avatar src={"https://randomuser.me/api/portraits/men/11.jpg"} />
        </div>

        <div style={{ marginLeft: 10 }}>
          <p style={{ fontWeight: "bold" }}>
            {name}
            <span style={{ fontWeight: 200, color: "gray", marginLeft: 6 }}>
              {moment(created_at).fromNow()}
            </span>
          </p>
          <p>{content}</p>
          <p style={{ fontWeight: 400, color: "gray" }}>reply</p>
        </div>
      </div>
    </Col>
  );
};

function areEqual(prevProps, nextProps) {
  if (prevProps.toString() === nextProps.toString()) {
    return true;
  }
  return false;
}

export default React.memo(Comment, areEqual);

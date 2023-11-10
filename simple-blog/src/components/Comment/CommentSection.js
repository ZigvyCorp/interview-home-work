import React, { useState, useEffect } from "react";
import { Collapse, Avatar, Input, Row, Col, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Axios from "axios";

const { Panel } = Collapse;
const { TextArea } = Input;

const CommentSection = () => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch users
    Axios.get("https://jsonplaceholder.typicode.com/users?_limit=2")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

    // Fetch comments
    Axios.get("https://jsonplaceholder.typicode.com/comments?_limit=2")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, []);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    alert("Đùa thôi không add được đâu =))");
  };

  return (
    <div>
      <Button type="primary" onClick={toggleComments}>
        {showComments ? "Hide comments" : "Show more comment"}
      </Button>

      {showComments && (
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          style={{ width: "100%" }}
        >
          <Panel header="Comments" key="1">
            <div>
              {comments.map((comment, index) => (
                <div key={index}>
                  <Row gutter={[16, 16]} style={{ marginBottom: "8px" }}>
                    <Col span={1}>
                      <Avatar
                        src={users[index] ? users[index].avatar : ""}
                        icon={<UserOutlined />}
                      />
                    </Col>
                    <Col span={20}>
                      <div style={{ fontWeight: "bold" }}>
                        {users[index] ? users[index].name : ""}
                      </div>
                      <div>{comment.body}</div>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "16px" }}>
              <Row gutter={[16, 16]}>
                <Col span={1}>
                  <Avatar icon={<UserOutlined />} />
                </Col>
                <Col span={20}>
                  <TextArea
                    rows={3}
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Your comment..."
                  />
                  <Button
                    type="primary"
                    onClick={handleAddComment}
                    style={{ marginTop: "8px" }}
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </div>
          </Panel>
        </Collapse>
      )}
    </div>
  );
};

export default CommentSection;

import React, { useState } from "react";
import { Button, Col, Form, Input, message, Row, Tag } from "antd";
import Comment from "./Comment";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_NEW_COMMENT_REQUEST } from "../redux/types/postType";
const { TextArea } = Input;

const Post = ({
  title,
  created_at,
  tags,
  ownerName,
  content,
  countReplies,
  comments,
  postId,
}) => {
  const [toggleComment, setToggleComment] = useState(false);
  const [commentForm] = Form.useForm();
  const postState = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const _onComment = (values) => {
    console.log(values);
    dispatch({
      type: CREATE_NEW_COMMENT_REQUEST,
      payload: {
        postId: postId,
        content: values.content,
        callback: (msg) => {
          success(msg);
          commentForm.resetFields();
        },
        callbackError: (msg) => {
          error(msg);
        },
      },
    });
  };
  const success = (msg) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };

  const error = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };
  return (
    <>
      {contextHolder}

      <div style={{ marginTop: 20 }}>
        <Row>
          <Col span={24}>
            <h2 style={{ textAlign: "center" }}>{title} </h2>
          </Col>
        </Row>

        <Row>
          <Col xl={24}>
            <p style={{ fontSize: 20, fontWeight: 600 }}>Auth: {ownerName}</p>
            <p style={{ fontSize: 15, fontWeight: 300 }}>
              Created at:{" "}
              {moment(created_at).subtract(1, "month").format("MMMM, DD YYYY")}
            </p>
          </Col>

          <Col xl={24} sm={24} xs={24}>
            {tags.map((value) => (
              <Tag key={value} style={{ marginTop: 10 }} color={value}>
                {value}
              </Tag>
            ))}
          </Col>
        </Row>

        <Row>
          <div>
            <p style={{ fontSize: 18, lineHeight: 1.5 }}>{content}</p>
          </div>
        </Row>

        <Row>
          <div
            onClick={() => setToggleComment(!toggleComment)}
            style={{ cursor: "pointer" }}
          >
            <p style={{ color: "gray" }}>{countReplies} Replies</p>
          </div>
        </Row>

        {toggleComment ? (
          <div>
            {comments.map((value) => (
              <Row key={value._id}>
                <Comment
                  name={value.owner.name}
                  content={value.content}
                  created_at={value.createdAt}
                  postId={postId}
                />
              </Row>
            ))}
            <Form
              name="normal_create_new_post"
              onFinish={_onComment}
              form={commentForm}
              style={{ paddingRight: 10, paddingLeft: 10, marginTop: 30 }}
            >
              <Form.Item
                name="content"
                rules={[
                  { required: true, message: "Please write your comment!" },
                ]}
              >
                <TextArea placeholder="Write your comment" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ float: "right" }}
                  loading={postState.loading}
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : null}
      </div>
    </>
  );
};



export default Post;

import {
  Avatar,
  Button,
  Form,
  Input,
  Layout,
  Modal,
  message,
  DatePicker,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_FETCH, LOG_OUT, REGISTER_FETCH } from "../redux/types/authType";
import { getRandomInt } from "../utils";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { listSelectTags } from "../utils/data";
import { CustomTag } from "../components/CustomTag";
import { CREATE_NEW_POST_REQUEST } from "../redux/types/postType";

const { TextArea } = Input;

const ColorList = ["#f56a00"];

const MainLayout = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  const [isOpenModalCRNP, setIsOpenModalCRNP] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const [loginForm] = Form.useForm();
  const [registerForm] = Form.useForm();
  const [createPostForm] = Form.useForm();

  const authState = useSelector((state) => state.auth);
  const postState = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const _onLogin = (values) => {
    dispatch({
      type: LOG_IN_FETCH,
      payload: {
        username: values.username,
        password: values.password,
        callback: (msg) => {
          success(msg);
          loginForm.resetFields();
          setIsOpenModal(false);
        },
        callbackError: (msg) => {
          error(msg);
        },
      },
    });
  };

  const _onRegister = (values) => {
    let formatDob = new Date(values.dob.$d).getTime();
    dispatch({
      type: REGISTER_FETCH,
      payload: {
        username: values.username,
        password: values.password,
        name: values.name,
        dob: formatDob,
        callback: (msg) => {
          success(msg);
          registerForm.resetFields();
          setIsOpenModalRegister(false);
        },
        callbackError: (msg) => {
          error(msg);
        },
      },
    });
  };

  const _onCreateNewPost = (values) => {
    console.log(values);
    dispatch({
      type: CREATE_NEW_POST_REQUEST,
      payload: {
        title: values.title,
        content: values.content,
        tags: values.tags,
        callback: (msg) => {
          success(msg);
          createPostForm.resetFields();
          setIsOpenModalCRNP(false);
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

  const _onLogout = () => {
    dispatch({
      type: LOG_OUT,
    });
  };
  const _renderLoginInfo = () => {
    return authState.user ? (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Button type="primary">Login</Button> */}
        <p style={{ marginRight: 8, fontSize: 15, fontWeight: "normal" }}>
          Hello, {authState.user.name}
        </p>
        <Avatar
          style={{
            backgroundColor: ColorList[getRandomInt(ColorList.length)],
            verticalAlign: "middle",
            marginRight: 8,
          }}
          gap={4}
          size="large"
        >
          {authState.user.name ? authState.user.name.substring(0, 1) : ""}
        </Avatar>

        <Button
          onClick={() => setIsOpenModalCRNP(true)}
          style={{ marginRight: 8 }}
          type="primary"
        >
          Create new post
        </Button>
        <Button onClick={_onLogout} type="dashed" danger>
          Log out
        </Button>
      </div>
    ) : (
      <div>
        <Button onClick={() => setIsOpenModalRegister(true)} type="dashed">
          Register
        </Button>
        <Button
          style={{ marginLeft: 10 }}
          onClick={() => setIsOpenModal(true)}
          type="primary"
        >
          Log In
        </Button>
      </div>
    );
  };

  return (
    <>
      {contextHolder}
      <Layout className="layout">
        <nav className="header-nav">
          <div className="logo">
            <p>LOGO</p>
          </div>
          {_renderLoginInfo()}
        </nav>
        <div style={{ padding: "0 50px" }}>{children}</div>

        <Modal
          title="Login"
          centered
          open={isOpenModal}
          onOk={() => setIsOpenModal(false)}
          onCancel={() => setIsOpenModal(false)}
          footer={null}
          okText={"Login"}
        >
          <Form
            name="normal_login"
            className="login-form"
            onFinish={_onLogin}
            form={loginForm}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
                { min: 12, message: "password must be minimum 12 characters." },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: "right" }}
                loading={authState.loading}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Register"
          centered
          open={isOpenModalRegister}
          onOk={() => setIsOpenModalRegister(false)}
          onCancel={() => setIsOpenModalRegister(false)}
          footer={null}
          okText={"Register"}
        >
          <Form
            name="normal_register"
            onFinish={_onRegister}
            form={registerForm}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
                { min: 12, message: "password must be minimum 12 characters." },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="dob"
              rules={[
                { required: true, message: "Please input your Date of birth!" },
              ]}
            >
              <DatePicker type="dob" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: "right" }}
                loading={authState.loading}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Create New Post"
          centered
          open={isOpenModalCRNP}
          onOk={() => setIsOpenModalCRNP(false)}
          onCancel={() => setIsOpenModalCRNP(false)}
          footer={null}
          okText={"Create New Post"}
        >
          <Form
            name="normal_create_new_post"
            onFinish={_onCreateNewPost}
            form={createPostForm}
          >
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Please input title!" }]}
            >
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item
              name="content"
              rules={[{ required: true, message: "Please input content!" }]}
            >
              <TextArea placeholder="Content" />
            </Form.Item>

            <Form.Item
              name="tags"
              rules={[{ required: true, message: "Please select tags" }]}
            >
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select tags"
                options={listSelectTags}
                tagRender={CustomTag}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: "right" }}
                loading={postState.loading}
              >
                Create
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Layout>
    </>
  );
};

export default MainLayout;

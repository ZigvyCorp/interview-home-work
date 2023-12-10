import { Button, Form, Input, Modal, message } from "antd";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { RootState, useAppDispatch } from './store';
import { loginUser, register } from './store/userSlice';
import { blog, createBlog, getListBlog } from "./store/blogSlice";
import { comment, commentBlog, getListCommentByBlog, setListComment } from "./store/commentSlice";

type FieldTypeLogin = {
  email?: string;
  password?: string;
};

type FieldTypeRegister = {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

type FieldTypeBlog = {
  content?: string;
  title?: string;
}

type FieldTypeComment = {
  content?: string;
}

const localToken = localStorage.getItem('token');
function App() {
  const [modelLogin, setModalLogin] = useState<{ type: "LOGIN" | "REGISTER", status: boolean }>({ type: "LOGIN", status: false })
  const [modelCreateBlog, setModalCreateBlog] = useState<boolean>(false)
  const { loadingUser, detailUser } = useSelector((state: RootState) => state.user);
  const { loadingBlog, listBlog } = useSelector((state: RootState) => state.blog);
  const { loadingComment, listComment } = useSelector((state: RootState) => state.comment);
  const dispatch = useAppDispatch();
  const onFinish = async (values: any) => {
    try {
      modelLogin.type === "LOGIN" ? dispatch(loginUser({ ...values }))
        .then(v => {
          if (v.meta.requestStatus === "fulfilled") message.success("Login success")
          if (v.meta.requestStatus === "rejected") message.error("Login failed")
        })
        .finally(() => setModalLogin((pre) => { return { ...pre, status: false } })) :
        dispatch(register({ ...values }))
          .then(v => {
            if (v.meta.requestStatus === "fulfilled") return message.success("Register successfully! Please login!");
            if (v.meta.requestStatus === "rejected") return message.error("Register failed")
          })
          .finally(() => setModalLogin((pre) => { return { ...pre, status: false } }))
    } catch (err) {
      console.log({ err });

    }
  };

  const onCreate = async (values: any) => {
    try {
      const create = await dispatch(createBlog({ ...values, author: detailUser?._id })).then(v => v)
        .finally(() => setModalCreateBlog(false))
      if (create.meta.requestStatus === "fulfilled") {
        message.success("Create blog successfully")
        return dispatch(getListBlog());
      } if (create.meta.requestStatus === "rejected")
        return message.error("Create blog failed")
    } catch (err) {
      console.log({ err });
      return message.error("Create blog failed")
    }
  }

  const onComment = async (values: any, blogId: string) => {
    try {
      const { content } = values;
      const create = await dispatch(
        commentBlog({ comment: content, userComment: detailUser?._id, blog: blogId })
      ).then()
      if (create.meta.requestStatus === "fulfilled") {
        message.success("Create comment successfully")
        return dispatch(getListBlog());
      } if (create.meta.requestStatus === "rejected")
        return message.error("Create comment failed")
    } catch (error) {
      return message.error("Create comment failed")
    }
  }

  const getListComment = (id: string) => { dispatch(getListCommentByBlog(id)) }

  const renderComment = (listComment: comment[]) => {
    return listComment.map((item, index) => {
      return (
        <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "10%", width: "70vw" }}>
          <p>{item.userCommentUser.name}</p>
          <p style={{ wordBreak: "break-word" }}>{item.comment}</p>
        </div>
      )
    })
  }

  const renderBlog = (listBlog: blog[]) => {
    return listBlog.map((item, index) => {
      return (
        <div key={index} id={item._id}>
          <h1>{item.title}</h1>
          <p style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "10%" }}>
            <p>Author: {item.author.name}</p>
            <p>Create at: {new Date(item.createdAt).toUTCString()}</p>
            <p>{item.content}</p>
            <p style={{ cursor: "pointer" }} onClick={() => { }}>
              {item.comment.length > 0 ? `${item.comment.length} replies` : ""}
            </p>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={(v) => { onComment(v, item._id) }}
              autoComplete="off"
            >
              <Form.Item<FieldTypeComment>
                label="content"
                name="content"
                rules={[{ required: true, message: 'Please input your content!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={loadingComment}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <hr
              style={{ display: "block", width: "70%", color: "black", height: "5px", cursor: "pointer" }}
              onClick={() => {
                if (listComment.length > 0) { return dispatch(setListComment([])) }
                if (!detailUser?._id) return message.error("Please login to view");
                else return getListComment(item._id)
              }}
            />
          </p>
          {renderComment(item.comment)}
        </div>
      )
    })
  }

  useEffect(() => { dispatch(getListBlog()) }, [dispatch])

  return (
    <div className="App">
      <div>
        <table style={{ width: "100%", tableLayout: "fixed", border: "5px solid" }}>
          <tbody>
            <tr>
              <td>
                Logo
              </td>
              <td>
                Blog
              </td>
              <td>
                <div style={{ display: "inline-flex", gap: "10px", justifyItems: "center", alignItems: "center" }}>
                  <p style={{ cursor: "pointer" }} onClick={() => { setModalCreateBlog(true) }}>{detailUser?.name}</p>
                  {!detailUser?._id ?
                    <div style={{ display: "inline-flex", gap: "10px", justifyItems: "center", alignItems: "center" }}>
                      <Button onClick={() => { setModalLogin({ type: "LOGIN", status: true }) }} >
                        Login
                      </Button>
                      <Button onClick={() => { setModalLogin({ type: "REGISTER", status: true }) }} >
                        Register
                      </Button>
                    </div>
                    : <Button onClick={() => { localStorage.clear(); window.location.href = "http://localhost:3000" }}>
                      Logout
                    </Button>}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          {renderBlog(listBlog)}
        </div>
      </div>
      {
        modelLogin.status && <Modal
          open={modelLogin.status}
          footer={false}
          closable={false}
          onCancel={() => setModalLogin((pre) => { return { ...pre, status: false } })}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '500px', height: "70vh" }}
        >
          {modelLogin.type === "LOGIN" ? <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<FieldTypeLogin>
              label="email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldTypeLogin>
              label="password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" loading={loadingUser}>
                Submit
              </Button>
            </Form.Item>
          </Form> :
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<FieldTypeRegister>
                label="name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldTypeRegister>
                label="phone"
                name="phone"
                rules={[{ required: true, message: 'Please input your phone!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldTypeRegister>
                label="email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldTypeRegister>
                label="password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={loadingUser}>
                  Submit
                </Button>
              </Form.Item>
            </Form>}
        </Modal>
      }
      {modelCreateBlog && <Modal
        open={modelCreateBlog}
        footer={false}
        closable={false}
        onCancel={() => setModalCreateBlog(false)}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '500px', height: "70vh" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onCreate}
          autoComplete="off"
        >
          <Form.Item<FieldTypeBlog>
            label="title"
            name="title"
            rules={[{ required: true, message: 'Please input your title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldTypeBlog>
            label="content"
            name="content"
            rules={[{ required: true, message: 'Please input your content!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loadingUser}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>}
    </div>
  );
}

export default App;

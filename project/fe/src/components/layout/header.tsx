import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import react from "../../assets/react.svg";
import { Button, Modal, Flex, TabsProps, Tabs } from "antd";
import { useState } from "react";

import { Link } from "wouter";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../utils/type.ts";
import LoginForm from "../auth/login.tsx";
import Register from "../auth/Register.tsx";
import { login, logout, register } from "../../redux/action.ts";
const Header = () => {
  const dispatch = useDispatch();
  const { authReducer } = useSelector((state: RootStore) => state);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Login",
      children: (
        <LoginForm
          onLogin={(v) => {
            dispatch(login(v));
            if (authReducer.user !== null) {
              setOpenModal(false);
            }
          }}
        />
      ),
    },
    {
      key: "2",
      label: "Register",
      children: (
        <Register
          onRegister={(v) => {
            dispatch(register(v));
            if (authReducer.user !== null) {
              setOpenModal(false);
            }
          }}
        />
      ),
    },
  ];
  return (
    <>
      <Flex justify="space-around" className="header">
        <Link href="/" className="flex-center" style={{ gap: 12 }}>
          <img src={react} alt="react-logo" width={48} height={48} />
        </Link>
        <h3>React Blog App</h3>
        <div className="flex-center">
          {authReducer.user ? (
            <Button
              type={"primary"}
              icon={<LogoutOutlined />}
              onClick={() => dispatch(logout())}
            >
              Logout
            </Button>
          ) : (
            <Button
              icon={<LoginOutlined />}
              type="primary"
              onClick={() => setOpenModal(true)}
            >
              Login/Sign Up
            </Button>
          )}
        </div>
      </Flex>
      <Modal
        open={openModal}
        footer={null}
        onCancel={() => setOpenModal(false)}
        key="auth-modal"
      >
        <Tabs defaultActiveKey="1" items={items} centered />
      </Modal>
    </>
  );
};

export default Header;

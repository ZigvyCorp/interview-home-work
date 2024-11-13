import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Zigvy Interview Assignment © {new Date().getFullYear()} Developed by{" "}
      <a href="mailto:KhacToan432@gmail.com">KhacToan432@gmail.com</a>
    </Footer>
  );
};

export default FooterComponent;

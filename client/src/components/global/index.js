import React from "react";
import { ConfigProvider } from "antd";
import "./style.css";

const Global = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 8,
        },
      }}>
      {children}
    </ConfigProvider>
  );
};

export default Global;

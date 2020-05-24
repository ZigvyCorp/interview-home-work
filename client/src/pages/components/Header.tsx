import React from "react";
import { Affix, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
function Header() {
  return (
    <div>
      <Affix offsetTop={0} style={{ background: "white" }}>
        <div
          style={{
            borderTop: "1px solid #000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "10px 5px 0px 5px",
            background: "white",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: 30,
                width: 30,
                background: "grey",
              }}
            />
            <text style={{ paddingLeft: 5 }}>Logo</text>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "pink",
              justifyContent: "center",
              position: "relative",
              padding: "0px 10px",
              zIndex: 10,
            }}
          >
            BLOGS
            <div
              style={{
                width: "100%",
                display: "flex",
                flex: 1,
                justifyContent: "center",
                position: "absolute",
                top: "100%",
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: " 10px solid transparent",
                  borderTop: "10px solid pink",
                  position: "absolute",
                  top: "100%",
                }}
              ></div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar icon={<UserOutlined />} />
            <text style={{ paddingLeft: 5 }}>Adam Levine</text>
          </div>
        </div>
      </Affix>
    </div>
  );
}

export default Header;

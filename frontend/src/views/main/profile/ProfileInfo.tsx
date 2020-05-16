import { User } from "@/models/user";
import { Row, Typography } from "antd";
import React from "react";

export const ProfileInfo: React.FC<{
  profile: User;
}> = (props) => {
  return (
    <React.Fragment>
      <Row>
        <Typography.Text strong style={{ margin: "0 auto", fontSize: 18 }}>
          {props.profile.firstName} {props.profile.lastName}
        </Typography.Text>
      </Row>
    </React.Fragment>
  );
};

import { Layout } from "antd";
import React from "react";
import { ProfileSider } from "./ProfileSider";
import { UserTimeline } from "./TimeLine";

const Profile: React.FC = () => {
  return (
    <Layout style={{ background: "#eee" }}>
      <ProfileSider />
      <UserTimeline />
    </Layout>
  );
};

export default Profile;

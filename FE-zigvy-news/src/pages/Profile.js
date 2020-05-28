import React, { useEffect } from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import ProfileEdit from "../components/profile/profile-edit";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import ProfileChangePassword from "../components/profile/profile-changepassword";

const { TabPane } = Tabs;

const Profile = ({ history, userState }) => {
  useEffect(() => {
    if (!userState.isLogin) {
      toast.warn("Please login to access this site.");
      history.push("/login");
    }
  });

  return (
    <div className="container-fluid">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Information" key="1">
          <ProfileEdit />
        </TabPane>
        <TabPane tab="Change Password" key="2">
          <ProfileChangePassword />
        </TabPane>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

export default connect(mapStateToProps, null)(withRouter(Profile));

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ErrorBoundary from "../components/errorBound";

interface IProps {
  notifications: any;
}

const Notifications = (props: IProps) => {
  const { notifications } = props;
  return (
    <ErrorBoundary>
      <React.Fragment>{notifications.data}</React.Fragment>
    </ErrorBoundary>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.object.isRequired
};

export default connect(
  (state: any) => ({
    notifications: state.notifications
  }),
  {}
)(Notifications);

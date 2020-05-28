import React from "react";
import { Modal } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteComment } from "../../actions";
import 'antd/dist/antd.css';

const CommentDeleteConfirm = (props) => {
  const { comment, state, setState } = props;

  return (
    <Modal
      title="Delete comment"
      visible={state.showDeleteConfirm}
      onCancel={() => setState({ ...state, showDeleteConfirm: false })}
      onOk={() => {
        props.deleteCommentAction(comment);
        setState({ ...state, showDeleteConfirm: false });
      }}
    >
      <p>Do you want to delete this comment?</p>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCommentAction: bindActionCreators(deleteComment, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CommentDeleteConfirm));

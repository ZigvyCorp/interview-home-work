import React, { useState } from "react";
import { Modal } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateComment } from "../../actions";
import 'antd/dist/antd.css';

const CommentEdit = (props) => {
  const { comment, state, setState } = props;
  const [updateComment, setUpdateComment] = useState({ ...comment});

  return (
    <Modal
      title="Edit comment"
      visible={state.showEditModal}
      onCancel={() => setState({ ...state, showEditModal: false })}
      onOk={() => {
        props.updateCommentAction(updateComment);
        setState({ ...state, showEditModal: false });
      }}
    >
      <div className="form-group">
        <label for="content">Content</label>
        <textarea
          type="text"
          className="form-control"
          style={{ height: 100 }}
          name="content"
          id="content"
          value={updateComment.content}
          onChange={e => setUpdateComment({ ...updateComment, content: e.target.value })}
        />
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCommentAction: bindActionCreators(updateComment, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CommentEdit));

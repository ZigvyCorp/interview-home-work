import React, { useState } from "react";
import { formatDateToString, calculateTimeTilNow } from "../../utils/helper";
import ReactHtmlParser from 'react-html-parser';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CommentEdit from "./comment-edit";
import CommentDeleteConfirm from "./comment-delete";

const Comment = ({ owner, comment, userState }) => {
  const createdDate = calculateTimeTilNow(comment.createdAt);
  const [state, setState] = useState({
      showEditModal: false,
      showDeleteConfirm: false
  });

  return (
    <li className="media" key={comment._id}>
      <span className="pull-left mr-3">
        <img className="img-circle" src={owner.images} alt="" />
      </span>
      <div className="media-body">
        <span className="text-muted pull-right">
          <small className="text-muted">
            {createdDate.includes('d') ? formatDateToString(comment.createdAt) : `${createdDate} ago`}
          </small>
        </span>
        <strong className="text-success">{owner.name}</strong>

        {userState.user && comment._idOwner === userState.user._id && (
            <span className="comment-tool">
                <span className="comment-tool-item" onClick={() => setState({ ...state, showEditModal: true })}><i className="fa fa-pencil" /></span>
                <span className="comment-tool-item" onClick={() => setState({ ...state, showDeleteConfirm: true })}><i className="fa fa-trash" /></span>
            </span>
        )}
        
        <p>{ReactHtmlParser(comment.content)}</p>
      </div>
      <CommentEdit state={state} setState={setState} comment={comment}/>
      <CommentDeleteConfirm state={state} setState={setState} comment={comment}/>
    </li>
  );
};

const mapStateToProps = (state) => {
    return {
      userState: state.userState,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {};
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Comment));

import React, { useState } from "react";
import { Modal, Progress, Tag, Input, Tooltip } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createPost } from "../../actions";
import { toast } from "react-toastify";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import firebase from "../../utils/firebase";
import "antd/dist/antd.css";
import { SERVER_URL } from "../../utils/constant";

const PostCreate = (props) => {
  const { showCreateModal, setShowCreateModal, userState } = props;
  const initState = {
    _idOwner: null,
    title: '',
    content: '',
    images: `${SERVER_URL}/images/no-avatar.png`,
    tags: [],
  };

  const [state, setState] = useState(initState);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [tagState, setTagState] = useState({
    inputVisible: false,
    inputValue: '',
    editInputIndex: -1,
    editInputValue: '',
  });
  
  const handleSubmit = () => {
    const storage = firebase.storage();
    const newState = { ...state, _idOwner: userState.user._id };
    if (image && image !== state.images) {
      const task = storage.ref(`images/${image.name}`).put(image);
      task.on(
        "state_changed",
        (snapshot) => {
          setProgress(
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          );
        },
        (error) => {
          toast.error(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((images) => {
              props.createPostAction({ ...newState, images });
              setState(initState);
              setShowCreateModal(false);
            });
        }
      );
    } else {
      props.createPostAction(newState);
      setState(initState);
      console.log(initState);
      setShowCreateModal(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setImage(e.target.files[0]);
      setState({
        ...state,
        images: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }
  };

  const handleCKEditorChange = (event, editor) => {
    setState({ ...state, content: editor.getData() })
  }

  const showInput = () => {
    setTagState({ ...tagState, inputVisible: true });
  };

  const handleClose = removedTag => {
    const tags = state.tags.filter(tag => tag !== removedTag);
    setState({ ...state, tags });
  };

  const handleInputChange = e => {
    setTagState({ ...tagState, inputValue: e.target.value });
  };

  const handleInputConfirm = () => {
    const { inputValue } = tagState;
    let { tags } = state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    setState({ ...state, tags });
    setTagState({
      ...tagState,
      inputVisible: false,
      inputValue: '',
    });
  };

  const handleEditInputChange = e => {
    setTagState({ ...tagState, editInputValue: e.target.value });
  };

  const handleEditInputConfirm = () => {
    const { tags } = state;
    const { editInputIndex, editInputValue } = tagState;
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setState({ ...state, tags });
    setTagState({
      ...tagState,
      editInputIndex: -1,
      editInputValue: '',
    });
  };

  return (
    <Modal
      title="Create Post"
      style={{ width: "calc(100vw - 100px)" }}
      visible={showCreateModal}
      onCancel={() => setShowCreateModal(false)}
      onOk={() => handleSubmit()}
    >
      <form>
        <div className="d-flex justify-content-center">
          <img height={60} width={60} src={state.images} alt="" />
          <label htmlFor="images" style={{ cursor: "pointer" }}>
            <i className="fa fa-pencil-square ml-2" />
          </label>
          <input
            style={{ visibility: "collapse", width: 0 }}
            type="file"
            name="image"
            id="images"
            accept=".png, .jpg, .jpeg"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={state.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Title"
          />
        </div>

        <div className="form-group">
          <label>Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={state.content}
            onChange={handleCKEditorChange}
          />
        </div>

        <div>
          {state.tags.map((tag, index) => {
            if (tagState.editInputIndex === index) {
              return (
                <Input
                  key={index.toString()}
                  size="small"
                  className="form-control tag-input"
                  value={tagState.editInputValue}
                  onChange={handleEditInputChange}
                  onBlur={handleEditInputConfirm}
                  onPressEnter={handleEditInputConfirm}
                />
              );
            }

            const isLongTag = tag.length > 20;

            const tagElem = (
              <Tag
                className="edit-tag"
                key={tag}
                closable={index !== 0}
                onClose={() => handleClose(tag)}
              >
                <span
                  onDoubleClick={(e) => {
                    if (index !== 0) {
                      setTagState({
                        ...tagState,
                        editInputIndex: index,
                        editInputValue: tag,
                      });
                      e.preventDefault();
                    }
                  }}
                >
                  {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </span>
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          })}

          {tagState.inputVisible && (
            <Input
              type="text"
              size="small"
              className="form-control tag-input"
              value={tagState.inputValue}
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          )}
          {!tagState.inputVisible && (
            <Tag className="site-tag-plus" onClick={showInput}>
              <i className="fa fa-plus" /> New Tag
            </Tag>
          )}
        </div>
        <small>
          <Progress percent={progress} showInfo={false} />
        </small>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPostAction: bindActionCreators(createPost, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostCreate));

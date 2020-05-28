/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import firebase from "../../utils/firebase";
import "antd/dist/antd.css";
import { updateUser } from "../../actions";
import moment from 'moment';

const ProfileEdit = (props) => {
  const { userState } = props;
  const initState = {
    _id: '',
    images: '',
    username: '',
    name: '',
    dob: new Date(),
  };
  const [state, setState] = useState(initState);
    
  useEffect(() => {
    if (props.userState.user) {
      setState({
        _id: userState.user._id,
        images: userState.user.images,
        username: userState.user.username,
        name: userState.user.name,
        dob: new Date(userState.user.dob),
      });
    }
  }, [userState.user]);

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storage = firebase.storage();

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
              props.updateUserAction({ ...state, images });
            });
        }
      );
    } else {
      props.updateUserAction(state);
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

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            value={state.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="dob">DOB</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            id="dob"
            value={moment(state.dob).format('YYYY-MM-DD')}
            onChange={handleChange}
          />
        </div>

        <div className="text-center mt-5">
          <button type="submit" className="btn btn-primary w-25 mr-5">
            Save
          </button>
          <button
            type="reset"
            className="btn btn-outline-primary w-25"
            onClick={() => setState(initState)}
          >
            Reset
          </button>
        </div>
        <small>
          <Progress percent={progress} showInfo={false} />
        </small>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserAction: bindActionCreators(updateUser, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileEdit));

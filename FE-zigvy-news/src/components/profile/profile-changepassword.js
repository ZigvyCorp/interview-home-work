import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import { updateUser } from "../../actions";

const ProfileChangePassword = (props) => {
  const { userState } = props;
  const initState = {
    password: '',
    cpassword: ''
  };
  const [state, setState] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, cpassword } = state;
    if (password === cpassword) {
        const newState = { password, _id: userState.user._id };
        props.updateUserAction(newState);
    } else {
        toast.warn('Your password does not match!');
    }
    setState(initState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="cpassword"
            id="cpassword"
            value={state.cpassword}
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
)(withRouter(ProfileChangePassword));

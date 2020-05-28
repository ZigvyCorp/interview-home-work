import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { showLoading, hideLoading } from '../actions';

const CustomLoader = ({ generalState }) => {
  return (
    <div
      style={{
        backgroundImage: 'url(\'bg-black70.png\')',
        display: `${generalState.isLoading ? 'block' : 'none'}`,
        position: 'fixed',
        zIndex: 99,
        height: `100%`,
        width: `100%`,
      }}>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
        <Loader
          visible="true"
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    generalState: state.generalState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoadingAction: bindActionCreators(showLoading, dispatch),
    hideLoadingAction: bindActionCreators(hideLoading, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomLoader);

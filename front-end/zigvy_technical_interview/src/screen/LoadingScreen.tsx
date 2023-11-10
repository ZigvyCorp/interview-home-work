import ReactLoading from "react-loading";

const LoadingScreen = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      <ReactLoading type="bars" color="#7DF9FF" />
      <h3 style={{}}>Wait a minutes ... </h3>
    </div>
  );
};

export default LoadingScreen;

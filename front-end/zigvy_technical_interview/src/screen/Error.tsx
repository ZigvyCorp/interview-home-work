const ErrorScreen = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/message-app-b0e83.appspot.com/o/false-2061132_1280.png?alt=media&token=c3849d81-26ff-48d9-9a54-bbc4b982412b"
        alt="error"
        style={{ width: "100px", height: "100px", marginTop: "100px" }}
      />
      <h3>Oops! Dont't have data to display </h3>
    </div>
  );
};

export default ErrorScreen;

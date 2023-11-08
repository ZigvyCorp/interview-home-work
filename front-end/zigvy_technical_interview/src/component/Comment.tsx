const Comments = () => {
  return (
    <div className="d-flex flex-row mx-3">
      <div style={{ marginRight: "30px" }}>
        <img
          className="rounded-circle"
          src="https://firebasestorage.googleapis.com/v0/b/message-app-b0e83.appspot.com/o/DH-Hoa-Sen-Main-Icon.png?alt=media&token=e67fe95b-65cd-4059-91c8-bc8f00c68a29&_gl=1*17tsuf4*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5OTQxMjkwMS4yOS4xLjE2OTk0MTI5NjguNTMuMC4w"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <p style={{ fontWeight: "bold" }}>Han Solo</p>
          <p style={{ marginLeft: "30px", color: "grey" }}>a day ago</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          lacinia sapien. Suspendisse velit lacus, molestie sit amet tempor
          viverra, ullamcorper eget est.{" "}
        </p>
        <p style={{ cursor: "pointer", color: "grey" }}>Reply to</p>
      </div>
    </div>
  );
};

export default Comments;

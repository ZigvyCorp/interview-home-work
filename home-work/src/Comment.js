import React from "react";
import { AdamLevine } from "./img";

const Comment = () => {
  return (
    <div class="d-flex flex-column justify-content-start align-items-start">
      <div
        class="d-flex justify-content-start align-items-center"
        style={{ marginBottom: "70px" }}
      >
        <div
          class="d-flex justify-content-start align-items-start "
          style={{ width: "5%", height: "100px" }}
        >
          <img src={AdamLevine} alt="Adam Levine" width="50" />
        </div>
        <div
          class="d-flex flex-column justify-content-start align-items-start "
          style={{ width: "95%", height: "100px" }}
        >
          <div class="d-flex" style={{ marginBottom: "10px" }}>
            <p class="font-weight-normal" style={{ marginRight: "10px" }}>
              Han Solo
            </p>
            <p class="font-weight-light">a day ago</p>
          </div>
          <div class="d-flex" style={{ marginBottom: "10px" }}>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resourses (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          </div>
          <div class="d-flex" style={{ marginBottom: "10px" }}>
            <p class="font-weight-light">Reply to</p>
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-start align-items-center"
        style={{ marginBottom: "70px" }}
      >
        <div
          class="d-flex justify-content-start align-items-start "
          style={{ width: "5%", height: "100px" }}
        >
          <img src={AdamLevine} alt="Adam Levine" width="50" />
        </div>
        <div
          class="d-flex flex-column justify-content-start align-items-start "
          style={{ width: "95%", height: "100px" }}
        >
          <div class="d-flex" style={{ marginBottom: "10px" }}>
            <p class="font-weight-normal" style={{ marginRight: "10px" }}>
              Han Solo
            </p>
            <p class="font-weight-light">a day ago</p>
          </div>
          <div class="d-flex" style={{ marginBottom: "10px" }}>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resourses (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          </div>
          <div class="d-flex" style={{ marginBottom: "10px" }}>
            <p class="font-weight-light">Reply to</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

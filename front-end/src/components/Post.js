import React from "react";
import "./Post.css";

function Post({ username, title, content, created_at, tags, id }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title text-center">{title}</h4>
        <div className="row justify-content-between card-content">
          <div className="col-4">
            <h6>
              {username} - {created_at}
            </h6>
          </div>
          <div className="tags col-4">
            {tags.map((tag, i) => (
              <span key={i} className="badge text-bg-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="card-text">{content}</p>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseOne_${id}`}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              2 replies
            </button>
          </h2>
          <div
            id={`collapseOne_${id}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h6>username</h6>
              <p>
                It is shown by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

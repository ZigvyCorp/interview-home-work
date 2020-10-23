import React from "react";

const post = (props) => {
  return (
    <div className="container text-center">
      <div className="row ">
        <div className="col">
          <div className="float-left">
            <p>
              Author: <span>{props.owner.name}</span>
            </p>
            <p>
              Create at: <span>{Date(props.created_at)}</span>
            </p>
          </div>

          <h2 className="text-center">{props.title}</h2>
          <div className="float-right">
            <ul>
              {props.tags.map((tag, idx)=>{
                return <li key={idx}>{tag}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <p>{props.content.substring(0, 100)}...</p>
      </div>
      <hr/>
    </div>
  );
};

export default post;

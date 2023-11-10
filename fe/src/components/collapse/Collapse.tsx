import React, { ReactNode } from "react";
import "./style.scss";

interface Props {
  children: ReactNode;
  text: string;
  id: number;
}

const Collapse = (props: Props) => {
  return (
    <div className="accordion" id={`accordionExample${props.id}`}>
      <div className="">
        <div className="" id="headingOne">
          <span
            className={`collapse-text collapse-custom`}
            data-bs-toggle={`collapse`}
            data-bs-target={`#collapseOne${props.id}`}
            aria-expanded="true"
            aria-controls={`collapseOne`}
          >
            {props.text}
          </span>
        </div>

        <div
          id={`collapseOne${props.id}`}
          className={`collapse show`}
          aria-labelledby={`headingOne`}
          data-bs-parent={`#accordionExample${props.id}`}
        >
          <div className="card-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;

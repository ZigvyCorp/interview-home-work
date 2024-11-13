import React from "react";

import { Color } from "../types";

type Props = {
  color: Color;
};

const Tag = (props: Props) => {
  const { color } = props;
  return (
    <div
      style={{
        color,
        borderColor: color,
        borderStyle: "solid",
        borderRadius: 2,
        borderWidth: 1,
        padding: "2px 6px",
        width: "fit-content",
        fontSize: 10,
      }}
    >
      {color}
    </div>
  );
};

export default React.memo(Tag);

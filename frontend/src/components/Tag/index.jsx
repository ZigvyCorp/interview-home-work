import React from "react";
import "./style.scss";

function Tag({ type = "default", value }) {
  const tagStyle = [
    { name: "magenta", color: "#e88cbc", bgColor: "#fdf2f6" },
    { name: "red", color: "#EA7471", bgColor: "#FDF2F1" },
    { name: "volcano", color: "#F6C2AE", bgColor: "#FDF2E9" },
    { name: "orange", color: "#F3B57B", bgColor: "#FEF7E8" },
    { name: "gold", color: "#F1B956", bgColor: "#FFFBE8" },
    { name: "lime", color: "#C0DF70", bgColor: "#FEFFE9" },
    { name: "green", color: "#9FD47C", bgColor: "#F8FFF0" },
    { name: "cyan", color: "#73CACA", bgColor: "#ebfffb" },
    { name: "blue", color: "#519AF7", bgColor: "#e9f7fe" },
    { name: "geekblue", color: "#8ba0f0", bgColor: "#F1F5FE" },
    { name: "purple", color: "#855ed3", bgColor: "#f8f2fe" },
    { name: "default", color: "#333", bgColor: "#eeeeee" },
  ];

  let style = tagStyle.find((tagStyle) => tagStyle.name === type);
  if (style === undefined) {
    style = tagStyle.find((tagStyle) => tagStyle.name === "default");
  }

  return (
    <span
      className="tag"
      style={{
        background: `${style.bgColor}`,
        color: `${style.color}`,
        borderColor: `${style.color}`,
      }}
    >
      {value}
    </span>
  );
}

export default Tag;

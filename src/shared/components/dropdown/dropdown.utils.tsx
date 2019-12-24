import React from "react";

export const useMouseDown = (props: any) => {
  const { fn } = props;
  const hanleMouseDown = (e: any) => fn(e);
  React.useEffect(() => {
    window.addEventListener("mousedown", hanleMouseDown);
    return () => window.removeEventListener("mousedown", hanleMouseDown);
  });
  return [];
};

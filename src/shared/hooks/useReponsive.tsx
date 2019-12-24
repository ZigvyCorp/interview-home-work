import React from "react";

export default () => {
  const [state, setState] = React.useState(window.innerWidth);
  const handleOnResize = (e: any) => setState(e.target.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", handleOnResize);
    return () => {
      window.removeEventListener("resize", handleOnResize);
    };
  });
  return [state];
};

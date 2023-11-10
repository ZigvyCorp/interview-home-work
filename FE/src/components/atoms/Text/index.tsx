import { ReactNode } from "react";
import "./styles.css";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "l" | "m" | "s";
  children: ReactNode;
}

export const Text = ({ variant, children, ...props }: TextProps) => {
  let style = "medium";
  switch (variant) {
    case "l":
      style = "large";
      break;
    case "s":
      style = "small";
      break;
    default:
      style = "medium";
      break;
  }

  return <div {...props} className={style}>{children}</div>;
};

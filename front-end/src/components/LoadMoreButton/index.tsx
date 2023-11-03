import React from "react";
import { Button, Spin } from "antd";

function LoadMoreButton({
  postLength,
  size,
  pending,
  onClick,
}: {
  postLength: number;
  size: number;
  pending: boolean;
  onClick: () => void;
}) {
  if (postLength === size) return null;

  if (postLength === 0) return null;

  if (pending) return <Spin />;

  return <Button onClick={onClick}>Load More</Button>;
}

export default LoadMoreButton;

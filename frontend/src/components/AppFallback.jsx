import { Spin } from "antd";

export const AppFallback = () => {
  return (
    <div className="h-screen w-screen flex justify-around items-center">
      <Spin />
    </div>
  );
}
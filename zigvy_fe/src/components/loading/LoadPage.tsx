import { Spin } from "antd";

const LoadPage = () => {
  return (
    <div className="w-full h-[calc(100vh-var(--head-height))] flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
};

export default LoadPage;

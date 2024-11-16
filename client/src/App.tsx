import { Suspense } from "react";
import MainRoutes from "./routes";
import { Spin } from "antd";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Spin />
          </div>
        }
      >
        <MainRoutes />
      </Suspense>
    </main>
  );
};

export default App;

import { Spin } from "antd";
import { Suspense } from "react";
import MainRoutes from "./routes";

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

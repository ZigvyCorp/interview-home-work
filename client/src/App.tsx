import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const App = () => {
  const isLoading = useSelector(
    (state: { loading: boolean }) => state.loading
  );

  return (
    <Spin className="" spinning={isLoading}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Spin>
  );
};

export default App;

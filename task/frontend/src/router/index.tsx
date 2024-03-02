import { Route, Routes } from "react-router-dom";
import { Home, Blog } from "../Page";

export interface IRouterProps {}
const Router: React.FunctionComponent<IRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};
export default Router;

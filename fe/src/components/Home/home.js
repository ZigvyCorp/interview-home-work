import className from "classnames/bind";
import style from "./Home.module.scss";

import Header from "./header";
import Body from "./body";

const cx = className.bind(style);
function Home() {
  return (
    <div className={cx("container")}>
      <Header></Header>
      <Body />
    </div>
  );
}

export default Home;

import { Pagination } from 'antd';

import LayoutDefault from "../../components/LayoutDefault";
import PostItem from "./PostItem";

function Post() {
  return (
    <LayoutDefault>
      <PostItem />
      <PostItem />
      <PostItem />
      <div style={{textAlign: "center", marginTop: 20}}>
        <Pagination defaultCurrent={1} total={30} />
      </div>
    </LayoutDefault>
  );
}

export default Post;

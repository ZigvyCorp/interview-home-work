import "./styles.css";

import { Text } from "@/components/atoms";

export const BlogBadge = () => {
  return (
    <div className="blogWrapper">
      <div className="blog align-items-center justify-content-center d-flex ">
        <div className="d-flex align-items-center  bg-grey textWrapper">
          <Text variant="m">Blogs</Text>
        </div>
      </div>
    </div>
  );
};

import { Fragment } from "react";
import BlogCard from "../component/BlogCard";

const ListPost = () => {
  return (
    <Fragment>
      <BlogCard
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia sapien. Suspendisse velit lacus, molestie sit amet tempor viverra, ullamcorper eget est. Nulla pharetra mi nisi. Duis tempus feugiat sapien, sed consectetur massa tincidunt quis. Pellentesque pharetra dui nec felis fringilla, eget porta felis dictum. Quisque egestas imperdiet diam quis sagittis. Maecenas rutrum suscipit libero sit amet dictum. Quisque id lorem turpis.

                    Integer nec aliquet est. Maecenas feugiat id leo eu ultrices. Proin vitae tristique neque. Sed egestas, mauris ac malesuada condimentum, augue nulla tincidunt ipsum, vitae tempor nisl nulla a odio. Suspendisse pulvinar accumsan purus non viverra. Aliquam scelerisque, lectus vitae accumsan vulputate, nisi massa pulvinar ex, volutpat iaculis eros erat vel nisi. Cras eget nunc iaculis, rutrum augue at, fringilla lacus. Nulla feugiat faucibus neque sit amet hendrerit.

                    Sed eget dictum ipsum. Integer id posuere dui, quis consectetur tellus. Duis efficitur congue fringilla. Aliquam malesuada scelerisque sem at ultrices. Proin id augue vel nisi porta malesuada eu a est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vitae libero eu ligula tempus faucibus. Donec id sapien et orci posuere dignissim. Phasellus fermentum neque orci. Donec iaculis urna at pellentesque facilisis. Curabitur.`}
      />
    </Fragment>
  );
};

export default ListPost;

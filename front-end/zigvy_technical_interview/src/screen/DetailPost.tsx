import { Fragment, useState } from "react";
import Comments from "../component/Comment";

const DetailPost = () => {
  const [showComment, setShowComment] = useState(false);

  const handleShowComment = () => {
    setShowComment(!showComment);
  };
  return (
    <Fragment>
      <div className="p-4 mt-5 d-flex flex-column">
        <h1 className="text-center">Post Title 1</h1>
        <div className="d-flex justify-content-between">
          <div>
            <p>Author: John Smith</p>
            <p>Create at: Sep 20, 2018</p>
          </div>
          <div>coming soon</div>
        </div>
        <div className="my-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            lacinia sapien. Suspendisse velit lacus, molestie sit amet tempor
            viverra, ullamcorper eget est. Nulla pharetra mi nisi. Duis tempus
            feugiat sapien, sed consectetur massa tincidunt quis. Pellentesque
            pharetra dui nec felis fringilla, eget porta felis dictum. Quisque
            egestas imperdiet diam quis sagittis. Maecenas rutrum suscipit
            libero sit amet dictum. Quisque id lorem turpis. Integer nec aliquet
            est. Maecenas feugiat id leo eu ultrices. Proin vitae tristique
            neque. Sed egestas, mauris ac malesuada condimentum, augue nulla
            tincidunt ipsum, vitae tempor nisl nulla a odio. Suspendisse
            pulvinar accumsan purus non viverra. Aliquam scelerisque, lectus
            vitae accumsan vulputate, nisi massa pulvinar ex, volutpat iaculis
            eros erat vel nisi. Cras eget nunc iaculis, rutrum augue at,
            fringilla lacus. Nulla feugiat faucibus neque sit amet hendrerit.
            Sed eget dictum ipsum. Integer id posuere dui, quis consectetur
            tellus. Duis efficitur congue fringilla. Aliquam malesuada
            scelerisque sem at ultrices. Proin id augue vel nisi porta malesuada
            eu a est. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Mauris vitae libero eu ligula
            tempus faucibus. Donec id sapien et orci posuere dignissim.
            Phasellus fermentum neque orci. Donec iaculis urna at pellentesque
            facilisis. Curabitur.
          </p>
        </div>
        <div className="mx-3">
          <p style={{ cursor: "pointer" }} onClick={() => handleShowComment()}>
            2 replies
          </p>
        </div>
        <hr className="mx-3"></hr>
        {showComment ? <Comments /> : ""}
      </div>
    </Fragment>
  );
};

export default DetailPost;

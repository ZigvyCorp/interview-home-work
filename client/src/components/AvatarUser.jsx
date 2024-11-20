import React from "react";
import { Image } from "react-bootstrap";

const AvatarUser = () => {
  return (
    <div className="d-flex align-items-center">
      <Image src="avatar.jpg" width="40" height="40" className="mr-2" />
      <span className="text-white mx-2">User Name</span>
    </div>
  );
};

export default AvatarUser;

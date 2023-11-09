import React, { memo, useEffect, useState } from "react";
import Avatar from "assets/img/avatar.png";
import { userService } from "services/userService";
import { UserSkeleton } from "components";

const Conversation = ({ chat, currentUserId, isOnline }) => {
  const [userData, setUserData] = useState(null);

  const handleGetUserId = async (id) => {
    const rs = await userService.handleGetUserId(id);
    if (rs?.success) {
      setUserData(rs.response);
    }
  };

  useEffect(() => {
    const userId = chat.members.find((el) => el !== currentUserId);
    handleGetUserId(userId);
  }, [chat.members, currentUserId]);

  return (
    <UserSkeleton isLoading={userData ? false : true}>
      <div className="flex items-center gap-3 hover:bg-main cursor-pointer p-2 rounded-lg">
        <div className="relative">
          <img
            className="w-[50px] cursor-pointer shadow-md rounded-full"
            src={userData?.image ? `${userData?.image}` : Avatar}
            alt=""
          />
          <div
            className={`${isOnline ? "bg-green-500" : "bg-gray-500"
              }  w-[15px] h-[15px]  absolute top-0 right-0 rounded-full`}
          ></div>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold">
            {userData?.firstName + "" + userData?.lastName}
          </h3>
          <p className="text-sub">{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>
    </UserSkeleton>
  );
};

export default memo(Conversation);

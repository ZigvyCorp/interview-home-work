/* eslint-disable react/prop-types */
import { Avatar, Space } from "antd";

const Comment = ({comment}) => {

    const {userId , body} = comment

  return (
    <div className="flex gap-4">
      <div>
        <Avatar
          src={userId?.avatar}
          size={55}
        />
      </div>

      <Space direction="vertical">
        <p className="text-[gray] font-medium text-[18px]">{userId?.fullName}</p>
        <p className="font-normal text-[18px]">
         {body}
        </p>
        <span className="text-[gray] font-medium text-[16px] cursor-pointer">
          Reply to
        </span>
      </Space>
    </div>
  );
};

export default Comment;

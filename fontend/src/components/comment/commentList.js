import React from "react";
import { Avatar, List } from "antd";

// const data = [
//   {
//     title: "Ant Design Title 1",
//   },
//   {
//     title: "Ant Design Title 2",
//   },
//   {
//     title: "Ant Design Title 3",
//   },
//   {
//     title: "Ant Design Title 4",
//   },
// ];
const commentList = ({ comment }) => {
  return (
    <div>
      <List itemLayout="horizontal">
        {comment?.map((item, index) => {
          return (
            <List.Item bordered={false}>
              <div className="flex flex-row gap-1">
                <div className="w-2/10">
                  <Avatar
                    size={50}
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                </div>
                <div className="w-8/10">
                  <h1 className="text-slate-600 mb-2 text-lg flex items-start justify-start">
                    {item.name}
                    <span className="text-slate-400 ml-2">a day ago</span>
                  </h1>
                  <p className="text-justify mb-2 text-lg font-normal">
                    {item.body}
                  </p>
                  <span className="text-slate-600 flex mb-2 text-lg">
                    Reply to
                  </span>
                </div>
              </div>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default commentList;

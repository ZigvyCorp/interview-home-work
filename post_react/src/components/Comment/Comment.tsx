import React from "react";
import { Collapse, ConfigProvider, CollapseProps, Avatar } from "antd";
import { I_Comment } from "../../model/commentInterface";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import moment from "moment";

type Props = {
  comments: I_Comment[];
};

export const Comment: React.FC<Props> = ({ comments }) => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <p className='border-b-[1px]'>{comments.length} replies</p>,
      children: (
        <div className='space-y-4'>
          {comments &&
            comments.map((item) => {
              return (
                <div key={item._id}>
                  <div className='flex space-x-4'>
                    <Avatar src={`https://i.pravatar.cc/150?u=${item._id}`} />
                    <div>
                      <div className='space-x-4 mb-2'>
                        <span className='text-slate-400 font-semibold'>{item.userId.name}</span>
                        <span className='text-slate-300'>
                          {moment(item.createdAt).startOf("day").fromNow()}
                        </span>
                      </div>
                      <div className='space-y-1'>
                        <p>{item.content}</p>
                        <p className='text-slate-400'>Reply to</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ),
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            headerBg: "transparent",
            headerPadding: 0,
          },
        },
      }}>
      <Collapse
        items={items}
        expandIcon={(e) => {
          const { isActive } = e;
          return <span>{isActive ? <CaretUpOutlined /> : <CaretDownOutlined />}</span>;
        }}
        bordered={false}
      />
    </ConfigProvider>
  );
};

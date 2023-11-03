import React, { useState } from "react";
import { Rate } from "antd";
import { Collapse, Space } from 'antd';

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const PostDetail = () => {
  const [value, setValue] = useState(4);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-5">
        <h1 className="text-center text-2xl font-bold">Post title</h1>
        <div className="flex flex-row py-4">
          <div className="basis-1/2">
            <h2>Author</h2>
            <h2>Create At</h2>
          </div>
          <div className="basis-1/2 text-right">
            <span>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? (
                <span className="ant-rate-text">{desc[value - 1]}</span>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          nisi.
        </p>
        <div className="py-4">
        <Space direction="vertical">
          <Collapse
            collapsible="header"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: "This panel can only be collapsed by clicking text",
                children: <p>{text}</p>,
              },
            ]}
          />
        </Space>

        </div>
      </div>
    </div>
  );
};

export default PostDetail;

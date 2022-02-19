import React from 'react';
import { Spin, List, Avatar } from 'antd';

export default function Comments({ visible = true, data = [] }) {
  return (
    <>
      {visible && (
        <Spin spinning={!data.length}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<p> {item?.name}</p>}
                  description={item?.body}
                />
              </List.Item>
            )}
          />
        </Spin>
      )}
    </>
  );
}

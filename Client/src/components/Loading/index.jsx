import { Spin } from 'antd';

export function Loading({ ...props }) {
  return (
      <Spin
          {...props}
      />
  );
}

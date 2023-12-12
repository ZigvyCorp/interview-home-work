import { Button, Typography } from "antd";
import Title from "antd/es/typography/Title";

export default function Logo() {
  return (
    <Button type="text">
      <Typography.Title level={4} style={{ margin: 0, color: "#ffffff" }}>
        Zigvy
      </Typography.Title>
    </Button>
  );
}

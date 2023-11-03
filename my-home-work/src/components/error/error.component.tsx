import { Typography } from "antd";
const { Text } = Typography;
const Error = ({ msg }: { msg: string }) => {
  return (
    <Text
      strong
      style={{
        fontSize: "var(--large-font-size)",
        textAlign: "center",
        display: "block",
      }}
      type="danger"
    >
      {msg}
    </Text>
  );
};
export default Error;

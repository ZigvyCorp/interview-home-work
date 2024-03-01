import { Flex, Typography } from "antd";
const boxStyle = {
  width: "100%",
  height: 57,
  borderRadius: 6,
};
const textStyle = {
  width: "100%",
  height: 57,
  border: "2px solid #000000",
  textAlign: "center",
  lineHeight: "50px",
};
const Headers = () => {
  // const [justify, setJustify] = React.useState(justifyOptions[0]);
  // const [alignItems, setAlignItems] = React.useState(alignOptions[0]);
  return (
    <Flex>
      {/* <p>Select justify :</p>
      <Segmented options={justifyOptions} onChange={setJustify} />
      <p>Select align :</p>
      <Segmented options={alignOptions} onChange={setAlignItems} /> */}
      <Flex style={boxStyle} justify={"space-between"} align={"center"}>
        <Typography.Text style={textStyle}>logo</Typography.Text>
        <Typography.Text style={textStyle}>Blog</Typography.Text>
        <Typography.Text style={textStyle}>Account</Typography.Text>
      </Flex>
    </Flex>
  );
};
export default Headers;

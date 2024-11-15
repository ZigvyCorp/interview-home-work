import { Avatar, Layout } from "antd";
import { useNavigate } from "react-router-dom";

function PageHeader() {
  const navigate = useNavigate();
  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Avatar onClick={() => {
        navigate("/");
      }} src={"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"} />
    </Layout.Header>
  );
}

export default PageHeader;
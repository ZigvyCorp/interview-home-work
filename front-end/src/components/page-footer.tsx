import { Layout } from "antd";

function PageFooter() {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      TienDNM ©{new Date().getFullYear()} Created by Do Ngoc Minh Tien
    </Layout.Footer>
  );
}

export default PageFooter;
import { Layout } from "antd";
import Header from "./Header";

interface ILayout {
  children: React.ReactElement;
}

export default function DefaultLayout({
  children,
}: ILayout): React.ReactElement {
  return (
    <Layout className="layout">
      <Header />
      {children}
    </Layout>
  );
}

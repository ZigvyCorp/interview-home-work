import { Layout } from "antd";
const { Content } = Layout;
const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        padding: `0 var(--gutter-container-x) `,
      }}
    >
      {children}
    </Content>
  );
};
export default Main;

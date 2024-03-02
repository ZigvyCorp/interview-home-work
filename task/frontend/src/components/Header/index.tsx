import { Layout } from "antd";
const { Header } = Layout;
const HeaderSide = ({ children }: { children: React.ReactNode }) => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        paddingTop: "25",
        display: "flex",
        alignItems: "center",
        background: "transparent",
      }}
    >
      {children}
    </Header>
  );
};

export default HeaderSide;

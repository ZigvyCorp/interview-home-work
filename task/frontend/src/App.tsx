import { Layout, theme } from "antd";
import HeaderSide from "./components/Header";
import MenuSide from "./components/Menu";
import Router from "./router";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
const { Content, Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="App">
      <GlobalStyle>
        <Layout>
          <HeaderSide>
            <MenuSide />
          </HeaderSide>
          <Content style={{ padding: "0 48px" }}>
            <div
              style={{
                padding: 24,
                marginTop: 25,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Router />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            LECHIHAI ©{new Date().getFullYear()} Created by LECHIHAI
          </Footer>
        </Layout>
      </GlobalStyle>
    </div>
  );
};

export default App;

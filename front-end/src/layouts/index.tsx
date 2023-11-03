import { Flex, Layout, theme } from 'antd';
const { Content, Header } = Layout;
import vite from '/vite.svg';
import { Link } from 'react-router-dom';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ backgroundColor: colorBgContainer }}>
      <Header>
        <Flex justify="center" align="center" style={{ height: '100%' }}>
          <div className="logo">
            <Link to={'/'}>
              <img src={vite} alt="logo" />
            </Link>
          </div>
        </Flex>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
}

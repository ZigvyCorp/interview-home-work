import { Layout, Menu } from 'antd';
import { useLocation, useNavigate   } from 'react-router-dom'
import './style.css'

const { Header, Content } = Layout;

const items = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Login",
    path: "/login"
  },
  {
    label: "Register",
    path: "/register"
  },
];

function LayoutDefault(props) {
  const { children } = props;
  const location = useLocation();
  const navigate  = useNavigate ();

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["" + (items.findIndex(item => item.path === location.pathname) + 1)]}
          items={items.map((item, index) => ({
            key: String(index + 1),
            label: item.label,
            onClick: () => {  navigate(item.path); }
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '50px',
          marginTop: 64,
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}

export default LayoutDefault;

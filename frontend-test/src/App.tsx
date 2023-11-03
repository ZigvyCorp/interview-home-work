import { Route, Routes } from 'react-router-dom'
import PostListPages from './pages/PostListPages';
import { Layout } from 'antd';
import { Col, Row } from 'antd';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function App() {
  return (
      <Layout>
        <Header style={headerStyle}>
          <Row gutter={16} style={{ width: '100%' }}>
            <Col className="gutter-row" span={8}>
              <div>Logo</div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div>Blogs</div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div>Justin Huynh</div>
            </Col>
          </Row>
        </Header>

        <Routes>
          <Route path='/*' element={<PostListPages />} />
        </Routes>
      </Layout>
  );
}

export default App;

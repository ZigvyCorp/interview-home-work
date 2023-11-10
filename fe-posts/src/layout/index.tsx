import { Layout } from 'antd';
import LayoutContent from './components/LayoutContent';
import LayoutFooter from './components/LayoutFooter';
import LayoutHeader from './components/LayoutHeader';

type Props = { children: React.ReactNode };

const VerticalLayout = ({ children }: Props) => {
  return (
    <Layout>
      <LayoutHeader />
      <LayoutContent>{children}</LayoutContent>
      {/* <LayoutFooter>Footer</LayoutFooter> */}
    </Layout>
  );
};

export default VerticalLayout;

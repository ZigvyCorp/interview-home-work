import { Layout as AntdLayout } from 'antd';

import Search from './Search';

const Layout = ({ children }) => {
    return (
        <AntdLayout>
            <AntdLayout.Header className="sticky top-0 z-10 bg-white flex justify-between items-center">
                <div>Logo</div>
                <div>BLOGS</div>
                <Search />
            </AntdLayout.Header>
            <AntdLayout.Content className="px-12">
                {children}
            </AntdLayout.Content>
        </AntdLayout>
    );
};
export default Layout;

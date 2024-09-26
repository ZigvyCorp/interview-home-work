import { Layout as AntdLayout } from 'antd';
import { Link } from 'react-router-dom';

import Search from './Search';

const Layout = ({ children }: { children: React.ReactElement }) => {
    return (
        <AntdLayout>
            <AntdLayout.Header className="sticky top-0 z-10 bg-white dark:bg-neutral-900 dark:text-white flex items-center justify-between">
                <div className="bg-neutral-900 text-white dark:bg-neutral-300 dark:text-black text-xl font-bold italic rounded-lg h-10 w-20 flex justify-center items-center">
                    Logo
                </div>
                <Link to="/">
                    <div className="text-4xl ml-56">BLOGS</div>
                </Link>
                <Search />
            </AntdLayout.Header>
            <AntdLayout.Content className="px-12 dark:bg-neutral-800">
                <div className="dark:text-white my-2 rounded-lg ">
                    {children}
                </div>
            </AntdLayout.Content>
        </AntdLayout>
    );
};
export default Layout;

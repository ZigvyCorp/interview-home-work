import { Layout as AntdLayout } from 'antd'
import { ReactNode, type FC } from 'react'
import styles from './index.module.scss'
import Header from './Header'
import Content from './Content'

export const {
    Header: AntdHeader,
    Content: AntdContent
} = AntdLayout

interface IProps {
    children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <AntdLayout className={styles.root}>
            <Header />
            <Content>
                {children}
            </Content>
        </AntdLayout>
    )
}

export default Layout

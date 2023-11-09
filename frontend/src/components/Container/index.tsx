import { Layout } from "antd"
import "./styles.scss"

interface IContainer {
    children?: any
}

export function Container({ children }: IContainer) {
    return (
        <Layout className="zigvyContainer" style={{minHeight: 480, paddingBottom: 30}}>
            {children}
        </Layout>
    )
}


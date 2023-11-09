import { Layout } from "antd"
import "./styles.scss"

interface IContainer {
    children?: any
}

export function Container({ children }: IContainer) {
    return (
        <Layout className="zigvyContainer">
            {children}
        </Layout>
    )
}


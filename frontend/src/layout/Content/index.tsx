import { AntdContent } from "..";
import { ReactNode, type FC } from 'react'

interface IProps {
    children: ReactNode
}

const Content: FC<IProps> = ({ children }) => {
    return (
        <AntdContent className="mt-[30px]">
            {children}
        </AntdContent>
    )
}

export default Content

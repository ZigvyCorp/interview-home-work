import { Container, Text } from "components";
import { AntdHeader } from "..";
import { type FC } from 'react'

const Header: FC = () => {
    const Triangle = (
        <div
            style={{
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderTop: '15px solid #000'
            }}
            className="w-0 h-0 absolute bottom-[-15px]"
        >
            <div
                style={{
                    borderLeft: '17px solid transparent',
                    borderRight: '17px solid transparent',
                    borderTop: '12px solid #ccc'
                }}
                className="w-0 h-0 absolute top-[-15px] left-[-17px]"
            ></div>
        </div>
    )

    const Left = (
        <Container width="40" flex justify="start">
            <Text fontSize={20} fontWeight={500} >Logo</Text>
        </Container>
    )

    const Center = (
        <Container
            width="20" height="100" flex justify="center"
            className="outline py-4 color bg-[#ccc] relative"
        >
            <Text fontSize={20} fontWeight={500} >Blogs</Text>
            {Triangle}
        </Container>
    )

    const Right = (
        <Container width="40" flex justify="end">
            <Text fontSize={20} fontWeight={500} >User</Text>
        </Container>
    )

    return (
        <AntdHeader style={{ all: 'unset' }}>
            <Container
                className="px-2 border-[3px] border-solid border-[#000]"
                flex align="center"
            >
                {Left}
                {Center}
                {Right}
            </Container>
        </AntdHeader>
    )
}

export default Header

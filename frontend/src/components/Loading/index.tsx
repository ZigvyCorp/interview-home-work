import {
    Spin as AntdSpin,
    SpinProps as AntdSpinProps,
    ConfigProvider as AntdConfigProvider
} from 'antd'
import { type FC } from 'react'

const Loading: FC<AntdSpinProps> = (props) => {
    return (
        <AntdConfigProvider theme={{ token: { colorPrimary: '#000' } }}>
            <AntdSpin
                className='w-full h-full flex justify-center items-center'
                {...props}
            />
        </AntdConfigProvider>
    )
}

export default Loading

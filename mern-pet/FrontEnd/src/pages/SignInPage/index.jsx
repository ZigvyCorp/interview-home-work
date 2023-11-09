import React, { useState } from "react";
import InputComponent from '../../components/InputComponent'
import ButtonComponent from "../../components/ButtonComponent";
import { EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons';

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(0,0,0,0.53)', height: '100vh'}}>
            <div style={{ width: 600, height: 435, borderRadius: 6, background: '#fff', display: 'flex'}}>
                <div style={{ flex: 1, padding: '20px 45px 24px', display: 'flex', flexDirection: 'column'}}>
                    <h1>Have a nice day!</h1>
                    <p>Sign in to the accout</p>
                    <InputComponent style={{ marginBottom: 10}} placeholder="User name" />
                    <div style={{ position: 'relative'}}>
                        <span style={{
                            zIndex: 10,
                            position: "absolute",
                            top: 4,
                            right: 8,
                        }}>
                            {isShowPassword ? (<EyeOutlined />) : (<EyeInvisibleOutlined />)}
                        </span>
                    </div>
                    <InputComponent placeholder="Password" type={isShowPassword ? "text" : "password"} />
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: 48,
                            width: '100%',
                            border: 'none',
                            borderRadius: 4,
                            margin: '26px 0 10px'
                        }}
                        textButton={'Sign In'}
                        styleTextButton={{ color: '#fff', fontSize: 15, fontWeight: 700}}
                    />
                    <p>Don't have account yet? <span style={{ color: 'rgb(13,92,182', fontSize: 13, cursor: "pointer"}}>Sign Up</span> </p>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
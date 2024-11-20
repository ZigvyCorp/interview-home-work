import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import Loading from "../ui/Loading";
import { Link } from "react-router-dom";

const { Option } = Select;

type RegisterType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dob: string;
    sex: "male" | "female";
};

const SignUpForm = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleSignUp = async ({
        firstName,
        lastName,
        email,
        password,
        dob,
        sex,
    }: RegisterType) => {
        try {
            setLoading(true);
            //   const response = await UserService.signUp({
            //     firstName,
            //     lastName,
            //     email,
            //     password,
            //     dob,
            //     sex,
            //   });
            //   if (response && response.type == "Success") {
            //     setUser(response.message as IUser);
            //     localStorage.setItem(
            //       "accessToken",
            //       String(response.message.accessToken)
            //     );
            //     localStorage.setItem(
            //       "refreshToken",
            //       String(response.message.refreshToken)
            //     );
            //     router.push("/");
            //   }
        } catch (err) {
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-black bg-white p-5 rounded-xl text-center">
            <div className="w-full flex flex-col items-center justify-center pb-5">
                <strong className="text-2xl">Tạo tài khoản mới</strong>
            </div>
            <Form
                name="register"
                onFinish={handleSignUp}
                style={{ maxWidth: 600 }}
                scrollToFirstError
                className="m-auto"
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        { required: true, message: "Hãy nhập tên họ của bạn!" },
                    ]}
                >
                    <Input placeholder="Họ" />
                </Form.Item>

                <Form.Item
                    name="username"
                    label="User Name"
                    rules={[
                        { required: true, message: "Hãy nhập tên của bạn!" },
                    ]}
                >
                    <Input placeholder="Tên" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "Email không hợp lệ!",
                        },
                        {
                            required: true,
                            message: "Hãy nhập email của bạn!",
                        },
                    ]}
                >
                    <Input placeholder="E-mail" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[
                        {
                            required: true,
                            message: "Hãy nhập mật khẩu của bạn!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Mật khẩu" />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Xác nhận mật khẩu"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Hãy xác nhận lại mật khẩu!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        "Mật khẩu xác nhận lại không khớp!"
                                    )
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Xác nhận mật khẩu" />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-fit bg-green-500 py-3 px-10 text-lg font-bold text-white rounded-md hover:bg-green-600 mx-auto flex items-center justify-center"
                    >
                        {isLoading ? <Loading size="small" /> : "Đăng kí"}
                    </Button>
                </Form.Item>
            </Form>
            <Link
                to="../"
                className="-mt-2 cursor-pointer text-blue-600 text-sm text-center hover:underline mx-auto"
            >
                Bạn đã có tài khoản ư?
            </Link>
        </div>
    );
};

export default SignUpForm;

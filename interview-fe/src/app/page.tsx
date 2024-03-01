"use client";

import { Button, Card, Checkbox, Form, Input, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthContextType } from "@/contexts/auth/jwt-context";
import { useMounted } from "@/hooks/use-mounted";

export default function LoginPage() {
  const { user, isAuthenticated } = useAuth();

  const { signIn } = useAuth<AuthContextType>();

  const isMounted = useMounted();

  const onFinish = async (values: any) => {
    try {
      const user = await signIn(values.username, values.password);
      if (isMounted() && user) {
        router.push("/home");
      }
    } catch (error) {}
  };

  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/home");
    }
  }, [isAuthenticated, router]);

  return (
    <main className="flex w-full justify-center items-center h-screen">
      <div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Hãy nhập tên đăng nhập",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên đăng nhập"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="login-form-button">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
}

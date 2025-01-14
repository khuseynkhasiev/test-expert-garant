import { Button, Form, Input } from "antd";
import React from "react";

interface LoginComponentProps {
    handleLogin: () => void;
    loading: boolean;
}
export const LoginComponent: React.FC<LoginComponentProps> = (props) => {
    return (
        <div style={{ maxWidth: 400, margin: "50px auto" }}>
            <h2>Вход в систему</h2>
            <Form onFinish={props.handleLogin}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Введите имя пользователя",
                        },
                    ]}
                >
                    <Input placeholder="Имя пользователя" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Введите пароль" }]}
                >
                    <Input.Password placeholder="Пароль" />
                </Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={props.loading}
                    block
                >
                    Войти
                </Button>
            </Form>
        </div>
    );
};

import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../../context";
import { LoginComponent } from "../../components/login";

export const LoginContainer = () => {
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    // пока без запроса к серверу
    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            login();
            message.success("Успешный вход!");
            setLoading(false);
        }, 1000);
    };

    return <LoginComponent handleLogin={handleLogin} loading={loading} />;
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

interface HeaderMenuComponentProps {
    isAuthenticated: boolean;
    logout: () => void;
}

export const HeaderMenuComponent: React.FC<HeaderMenuComponentProps> = (
    props
) => {
    const navigate = useNavigate();
    return (
        <menu>
            {props.isAuthenticated ? (
                <Button type="primary" onClick={props.logout}>
                    Выйти
                </Button>
            ) : (
                <Button
                    type="primary"
                    onClick={() => navigate("/login", { replace: true })}
                >
                    Авторизоваться
                </Button>
            )}
        </menu>
    );
};

import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { MenuItem } from "../../types/types";

interface MenuComponentProps {
    items: MenuItem[];
}
export const MenuComponent: React.FC<MenuComponentProps> = (props) => {
    return (
        <Menu
            theme="dark"
            items={props.items.map((item) => ({
                label: (
                    <NavLink to={item.path}>
                        {item.icon} {item.label}
                    </NavLink>
                ),
                key: item.key,
                title: item.label,
            }))}
        />
    );
};

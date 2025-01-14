import Sider from "antd/es/layout/Sider";
import { MenuComponent } from "../../components/menu";
import { SiderHeaderComponent } from "../../components/sider-header";
import { HomeOutlined, TableOutlined } from "@ant-design/icons";
import { MenuItem } from "../../types/types";
import { useAuth } from "../../context";

export const MenuContainer = () => {
    const { isAuthenticated } = useAuth();

    const items: MenuItem[] = [
        {
            key: "/",
            label: "Главная",
            icon: <HomeOutlined />,
            path: "/",
        },
        ...(isAuthenticated
            ? [
                  {
                      key: "report",
                      label: "Отчет",
                      icon: <TableOutlined />,
                      path: "/report",
                  },
              ]
            : []),
    ];

    return (
        <Sider width={200} style={{ padding: "20px 10px" }}>
            <SiderHeaderComponent />
            <MenuComponent items={items} />
        </Sider>
    );
};

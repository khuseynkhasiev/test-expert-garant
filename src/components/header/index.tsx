import { Layout } from "antd";
import "./styles.css";
import { HeaderMenuContainer } from "../../containers/header-menu";
const { Header } = Layout;

export const HeaderApp = () => {
    return (
        <Header className="HeaderApp">
            <HeaderMenuContainer />
        </Header>
    );
};

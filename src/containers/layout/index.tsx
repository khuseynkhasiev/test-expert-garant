import { Layout } from "antd";
import { FooterApp } from "../../components/footer";
import { HeaderApp } from "../../components/header";
import { Content } from "antd/es/layout/layout";
import { Router } from "../../routers/router";
import "./styles.css";
import { MenuContainer } from "../menu";

export const LayoutContainer = () => {
    return (
        <Layout>
            <MenuContainer />
            <Layout className="LayoutContainer">
                <HeaderApp />
                <Content className="LayoutContainer__site-content">
                    <Router />
                </Content>
                <FooterApp />
            </Layout>
        </Layout>
    );
};

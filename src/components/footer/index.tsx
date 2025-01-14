import { Layout } from "antd";
import "./styles.css";
const { Footer } = Layout;

export const FooterApp = () => {
    return (
        <Footer className="FooterApp">
            <p className="FooterApp__text">ООО "Эксперт Гарант"</p>
        </Footer>
    );
};

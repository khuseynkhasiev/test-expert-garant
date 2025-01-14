import { HeaderMenuComponent } from "../../components/header-menu";
import { useAuth } from "../../context";

export const HeaderMenuContainer = () => {
    const { isAuthenticated, logout } = useAuth();
    
    return (
        <HeaderMenuComponent
            isAuthenticated={isAuthenticated}
            logout={logout}
        />
    );
};

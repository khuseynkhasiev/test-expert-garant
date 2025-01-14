import { Navigate } from "react-router-dom";
import { useAuth } from "../context";

interface ProtectedRouteProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.ComponentType<any>;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    component: Component,
}) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

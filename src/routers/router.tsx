import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/not-found";
import { LoginPage } from "../pages/login";
import { MainPublicPage } from "../pages/main-public";
import { ReportPage } from "../pages/report";
import { ProtectedRoute } from "./protected-route";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/report"
                element={<ProtectedRoute component={ReportPage} />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

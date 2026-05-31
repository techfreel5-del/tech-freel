import { type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

type Props = {
    children: ReactNode;
    requirePremium?: boolean;
};

export default function ProtectedRoute({ children, requirePremium = false }: Props) {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "1.1rem", color: "#666" }}>Cargando...</span>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (requirePremium && user.plan !== "premium") {
        return <Navigate to="/membresia" replace />;
    }

    return <>{children}</>;
}

import { Navigate } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { useAuthStore } from "../stores/authStore";

const PublicRoute = () => {
    const accessToken = useAuthStore(s => s.accessToken);
    const isAuthenticated = !!accessToken; // Check if the user is authenticated

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Login />;
};

export default PublicRoute;
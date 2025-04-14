
import useAuthStore from "../stores/authStore/store.ts";
import {Navigate, Outlet} from "react-router-dom";


const PrivateRoutes = () => {
    const {accessToken} = useAuthStore();

    if (!accessToken) {
         return <Navigate to={'/login'} replace />;
    }

    return <Outlet />
};

export default PrivateRoutes;
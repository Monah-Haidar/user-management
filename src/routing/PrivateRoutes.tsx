
import useAuthStore from "../stores/authStore/store.ts";
import {Navigate, Outlet} from "react-router-dom";
import {Navbar} from "../components/molecules/Navbar";


const PrivateRoutes = () => {
    const {accessToken} = useAuthStore();

    if (!accessToken) {
         return <Navigate to={'/login'} replace />;
    }

    return (
        <>
            <Navbar />
            <div id="main">
                <Outlet />
            </div>
        </>
    );
};

export default PrivateRoutes;
import {createBrowserRouter} from "react-router";
import {Dashboard} from "../components/pages/Dashboard";
import { Login } from "../components/pages/Login"
import { routeNames } from "../constants/routeNames.ts";
import Layout from "./Layout.tsx";
import PrivateRoutes from "./PrivateRoutes.tsx";

const router = createBrowserRouter([
    {
        path: routeNames.root,
        element: <Layout />,
        children: [
            {
                path: routeNames.login,
                element: <Login />
            }
        ]
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: routeNames.dashboard,
                element: <Dashboard />
            },
        ]
    }
]);

export default router;
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "../components/pages/Dashboard";
import { Login } from "../components/pages/Login"
import { routeNames } from "../constants/routeNames.ts";
import Layout from "./Layout.tsx";
import PrivateRoutes from "./PrivateRoutes.tsx";
import {ErrorPage} from "../components/pages/ErrorPage";
import {useMemo} from "react";

const AppRouter = () => {
    const router = useMemo(
        () =>
            createBrowserRouter([
                {
                    path: routeNames.root,
                    element: <Layout/>,
                    errorElement: <ErrorPage/>,
                    children: [
                        {
                            path: routeNames.login,
                            element: <Login/>
                        }
                    ]
                },
                {
                    element: <PrivateRoutes/>,
                    children: [
                        {
                            path: routeNames.dashboard,
                            element: <Dashboard/>
                        },
                    ]
                }
            ]), []);

    return <RouterProvider router={router} />;
}

export default AppRouter;
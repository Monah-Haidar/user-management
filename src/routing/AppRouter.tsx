import { useMemo } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import CreateUserPage from "../components/pages/CreateUserPage/CreateUserPage.tsx";
import { Dashboard } from "../components/pages/Dashboard";
import EditUserPage from "../components/pages/EditUserPage/EditUserPage.tsx";
import { ErrorPage } from "../components/pages/ErrorPage";
import { routeNames } from "../constants/routeNames.ts";
import Layout from "./Layout.tsx";
import PrivateRoutes from "./PrivateRoutes.tsx";
import PublicRoute from "./PublicRoute.tsx";

const AppRouter = () => {
    const router = useMemo(
        () =>
            createBrowserRouter([
                {
                    path: routeNames.root,
                    element: <Navigate to={routeNames.dashboard} replace />,
                },
                {
                    path: routeNames.login,
                    element: <Layout/>,
                    errorElement: <ErrorPage/>,
                    children: [
                        {
                            index: true,
                            element: <PublicRoute/>
                        }
                    ]
                },
                {
                    element: <PrivateRoutes/>,
                    children: [
                        {
                            path: routeNames.dashboard,
                            element: <Dashboard/>,                            
                        },
                        {
                            path: routeNames.addUser,
                            element: <CreateUserPage/>,
                        },
                        {
                            path: routeNames.editUser,
                            element: <EditUserPage />,
                        }
                    ]
                }
            ]), []);

    return <RouterProvider router={router} />;
}

export default AppRouter;
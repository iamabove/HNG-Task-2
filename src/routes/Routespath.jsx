import React, {lazy} from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../components/Layout";
import DetailedPage from "../pages/DetailedPage";
const Home = lazy(() => import("../pages/Home"));

const routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: (
                    <React.Suspense>
                        <Home/>
                    </React.Suspense>
                )
            },
            {
                path:"/movies/:id",
                element: (
                    <React.Suspense>
                        <DetailedPage/>
                    </React.Suspense>
                )
            },
        ]
    }
]

const Routespath = () => {
    const router = createBrowserRouter(routes);
  return <RouterProvider router = {router}/>;
};

export default Routespath;

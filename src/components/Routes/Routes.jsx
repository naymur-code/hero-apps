import { createBrowserRouter } from "react-router";
import Root from "../../pages/Root/Root";
import Home from "../../pages/Home/Home";
import Apps from "../../pages/Apps/Apps";
import Installation from "../../pages/Installation/Installation";
import Error from "../../pages/Error/Error";
import AppDetails from "../AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("apps.json"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => fetch("apps.json"),
        element: <Home></Home>,
      },
      {
        path: "/apps",
        loader: () => fetch("apps.json"),

        element: <Apps></Apps>,
      },
      {
        path: "/app-details/:id",
        element: <AppDetails></AppDetails>,
      },
      {
        path: "installation",
        element: <Installation></Installation>,
      },
    ],
  },
]);

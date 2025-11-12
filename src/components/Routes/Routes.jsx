import { createBrowserRouter } from "react-router";
import Root from "../../pages/Root/Root";
import Home from "../../pages/Home/Home";
import Apps from "../../pages/Apps/Apps";
import Installation from "../../pages/Installation/Installation";
import Error from "../../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "installation",
        element: <Installation></Installation>,
      },
    ],
  },
]);

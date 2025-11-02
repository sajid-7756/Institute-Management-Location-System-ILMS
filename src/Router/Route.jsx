import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Map from "../Pages/Map";
import Department from "../Pages/Department";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/departments",
        Component: Department,
      },
      {
        path: "/map",
        Component: Map,
      },
    ],
  },
]);

export default router;

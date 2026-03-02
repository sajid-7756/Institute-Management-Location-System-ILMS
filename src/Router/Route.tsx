import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Map from "../Pages/Map";
import Department from "../Pages/Department";
import Gallery from "../Pages/Gallery";
import Others from "../Pages/Others";

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
        path: "/gallery",
        Component: Gallery,
      },
      {
        path: "/map",
        Component: Map,
      },
      {
        path: "/others",
        Component: Others,
      },
    ],
  },
]);

export default router;

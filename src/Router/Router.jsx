import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
  },
  {
    path: "/auth",
    element:<div>auth</div>,
  },
  {
    path: "/",
    Component:Home,
  },
  {
    path: "*",
    Component:ErrorPage,
  },
]);
export default router;
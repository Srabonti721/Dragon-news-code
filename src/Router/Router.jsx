import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Category from "../pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    children:[
      {
        path:'',
        element:<HomePage></HomePage>
      },
      {
        path:'/category/:id',
        element:<Category></Category>
      }
    ]
  },
  {
    path: "*",
    Component:ErrorPage,
  },
]);
export default router;
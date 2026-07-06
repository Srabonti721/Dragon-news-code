import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import CategoryNews from "../pages/CategoryNews";

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
        loader:()=>fetch('/news.json'),
        element:<CategoryNews></CategoryNews>
      }
    ]
  },
  {
    path: "*",
    Component:ErrorPage,
  },
]);
export default router;
import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SkillDetails from "../Pages/SkillDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'/skill-details',
        Component:SkillDetails,
      }
    ]
  },
]);
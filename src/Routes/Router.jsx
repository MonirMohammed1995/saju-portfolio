import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ContactPage from "../Pages/ContactPage";
import ProjectDetails from "../Pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index: true,
        path:'/',
        Component:Home,
      },
      {
        path:'/contact-page',
        Component:ContactPage
      },
      {
        path:'/project-details/:id',
        element:<ProjectDetails/>
      }
    ]
  }])
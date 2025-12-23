import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Home";
import Hero from "../Components/Hero";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
     children: [
      { index: true, Component: Home },
      
     ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
        {
            path:'/auth/register',
            Component:Register,
        },
        {
            path:'/auth/login',
            Component:Login,
        }
    ]

  },
]); 
export default router;
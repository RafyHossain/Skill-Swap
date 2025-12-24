import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Home";
import Hero from "../Components/Hero";
import PrivateRoutes from "./PrivateRoutes";
import SkillDetails from "../Pages/SkillDetails";
import MyProfile from "../Pages/MyProfile";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
         loader: async () => {
          const res = await fetch("/skills.json");
          return res.json();
        },
        hydrateFallbackElement:<Loading></Loading>,
        Component: Home,
       
      },
      {
      path: "profile",
      element: (
        <PrivateRoutes>
          <MyProfile />
        </PrivateRoutes>
      ),
    },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
    ],
  },
  {
  path: "/skill-details/:id",
  loader: async () => {
    const res = await fetch("/skills.json");
    return res.json();
  },
  hydrateFallbackElement:<Loading></Loading>,
  element: (
    <PrivateRoutes>
      <SkillDetails />
    </PrivateRoutes>
  )
},


]);
export default router;

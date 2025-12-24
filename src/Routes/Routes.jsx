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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch("/skills.json");
          return res.json();
        },
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
  element: (
    <PrivateRoutes>
      <SkillDetails />
    </PrivateRoutes>
  )
}

]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/blog/Blog";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Registration from "../../pages/registration/Registration";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Registration />,
      },
    ],
  },
]);

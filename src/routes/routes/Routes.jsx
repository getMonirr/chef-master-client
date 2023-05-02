import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/blog/Blog";
import Home from "../../pages/home/Home";

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
    ],
  },
]);

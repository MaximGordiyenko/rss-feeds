import { createBrowserRouter } from "react-router-dom";
import { Feeds } from "./pages/Feeds/Feeds.jsx";
import { Login } from "./pages/Login.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Layout } from "./components/layout/Layout.jsx";
import { Register } from "./pages/Register.jsx";
import { Profile } from "./pages/Profile.jsx";
import { Blog } from "./pages/Blog.jsx";
import { Books } from "./pages/Books.jsx";

export const routes = createBrowserRouter([
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "register",
    element: <Register/>,
  },
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Feeds/>,
      },
      {
        path: "blog",
        element: <Blog/>,
      },
      {
        path: "books",
        element: <Books/>,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "dashboard",
        element: <Dashboard/>,
      },
    ],
  },
]);

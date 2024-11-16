import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/OrderPage/Order";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Error from "../pages/ErrorElement/Error";
import Secret from "../components/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element:<Registration></Registration>,
      },
      {
        path: "/secret",
        element:<PrivateRoute><Secret></Secret></PrivateRoute>,
      },
    ],
  },
]);

export default router;

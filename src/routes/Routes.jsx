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
import Dashboard from "../components/Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import Reservation from "../components/Layout/Reservation";
import Review from "../pages/Dashboard/review";
import Bookings from "../pages/Dashboard/Bookings";
import AllUsers from "../pages/Dashboard/AllUsers";
import MainAdmin from "../pages/Dashboard/MainAdmin";
import AddProduct from "../pages/Dashboard/AddProduct";
import ManageItems from "../pages/Dashboard/ManageItems";
import ManageBookings from "../pages/Dashboard/ManageBookings";
import UserHome from "../pages/Dashboard/UserHome";

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
        element: <Registration></Registration>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-home",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "reserve",
        element: <Reservation></Reservation>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "booking",
        element: <Bookings></Bookings>,
      },

      // admin home
      {
        path: "admin",
        element: <MainAdmin></MainAdmin>,
      },
      {
        path: "add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "manage-items",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "all-user",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manage-bookings",
        element: <ManageBookings></ManageBookings>,
      },
    ],
  },
]);

export default router;

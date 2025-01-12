import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/OrderPage/Order";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Error from "../pages/ErrorElement/Error";
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
import AdminRoute from "./AdminRoute";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";

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
        path: "payment",
        element: <Payment></Payment>,
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

      // admin only routes
      {
        path: "admin",
        element: (
          <AdminRoute>
            <MainAdmin></MainAdmin>
          </AdminRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <AdminRoute>
            <AddProduct></AddProduct>
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/menu/${params.id}`),
      },
      {
        path: "all-user",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <AdminRoute>
            <ManageBookings></ManageBookings>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;

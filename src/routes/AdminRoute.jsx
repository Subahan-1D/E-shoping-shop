import React from "react";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const AdminRoute = ({children}) => {
  const [isAdmin, isPendingLoading] = useAdmin();
  const {user, loading} = useAuth();
  const location = useLocation();
  if (loading || isPendingLoading) {
    return <PropagateLoader></PropagateLoader>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;

// src/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { FC } from "react";
import Dispatcher from "../services/Dispatcher";

interface ProtectedRouteProps {
  isAuthenticated: any;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAuthenticated }) => {
  if (isAuthenticated()) {
    return (
      <Dispatcher>
        <Outlet />
      </Dispatcher>
    );
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;

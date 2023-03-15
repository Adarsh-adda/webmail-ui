import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import HomeScreen from "../screens/HomeScreen";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;

import { Outlet } from "react-router-dom";
import Login from "../pages/Admin/Login";

const PrivateRoutes = ({ isAdmin }) => {
  return isAdmin ? <Outlet /> : <Login />;
};

export default PrivateRoutes;

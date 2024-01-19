import { Outlet } from "react-router-dom";
import Login from "../pages/Admin/Login";

interface PrivateRoutesProps {
  isAdmin:boolean | null;
}

const PrivateRoutes:React.FC<PrivateRoutesProps> = ({ isAdmin }) => {
  return isAdmin ? <Outlet /> : <Login />;
};

export default PrivateRoutes;

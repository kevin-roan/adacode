import { MdDashboard } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';

const AdminSidebar= () =>{
  return(
  <div className="dashboard_container">
      <NavList />
    </div>
  )
}

export default AdminSidebar;

const NavList = () =>{
  return(
  <div className="sidebard_container">
      <div className="sidebar_item"><MdDashboard /> <Link to="/admin/dashboard">DashBoard </Link> </div>
      <div className="sidebar_item"><PiStudentBold/><Link to="admin/studentlist">StudentList </Link></div>
      <div className="sidebar_item"> <FaSearch/> <Link to="/admin/filter">Filter </Link></div>
      <div className="sidebar_item"> <FaGear/> <Link to="/admin/settings">Settings </Link></div>
    </div>
  )
}


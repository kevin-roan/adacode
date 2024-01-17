import { MdDashboard } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
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
<Link to="/admin/dashboard"> <div className="sidebar_item"><MdDashboard /> DashBoard </div> </Link> 
 <Link to="/admin/studentlist">     <div className="sidebar_item"><PiStudentBold/>StudentList </div></Link>
  <Link to="/admin/managecourse">            <div className="sidebar_item"> <FaSearch/> Course Management</div></Link>
  <Link to="/admin/managegallery"><div className="sidebar_item"> <GrGallery/> Gallery Management</div></Link>
    </div>
  )
}


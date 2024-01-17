import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "../components/";
import { Gallery, Home, Courses, Reviews, Contact, NotFound } from "../pages/";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Dashboard from "../pages/Admin/Dashboard";
import Login from "../pages/Admin/Login";
import logo_avatar from '../assets/logo-light.png'
import StudentList from "../pages/Admin/StudentList";
import ManageCourse from '../pages/Admin/ManageCourse'
import ManageGallery from '../pages/Admin/GalleryManager'

const LayoutRoutes = () => (
  <Router>
    <Header />
    <FloatingWhatsApp phoneNumber="+917736972033" accountName="ADACODE Solutions" avatar={logo_avatar} />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <Courses />
            <Reviews />
            <Contact />
          </>
        }
      />
      <Route path="/courses" element={<Courses />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/admin/dashboard" element={<Dashboard/>} />
      <Route path="/admin/studentlist" element={<StudentList/>} />
      <Route path="/admin/managecourse" element={<ManageCourse/>} />
      <Route path="/admin/managegallery" element={<ManageGallery />} />
    </Routes>
    <Footer />
  </Router>
);

export default LayoutRoutes;

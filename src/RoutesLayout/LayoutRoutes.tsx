import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "../components/";
import { Home, Courses, Reviews, Contact, NotFound } from "../pages/";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const LayoutRoutes = () => (
  <Router>
    <Header />
    <FloatingWhatsApp phoneNumber="+91 6227222333" accountName="ADACODE" />
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
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default LayoutRoutes;

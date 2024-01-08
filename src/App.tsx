import { Header, Footer } from "./components/";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Home, Courses, Reviews, Contact } from "./pages/";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <FloatingWhatsApp phoneNumber="+91 6227222333" accountName="ADACODE" />
        <Home />
        <Courses />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

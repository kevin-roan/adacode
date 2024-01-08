import { Header, Footer } from "./components/";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Home, Courses, Reviews, Contact } from "./pages/";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <FloatingWhatsApp phoneNumber="77369 72033" accountName="ADACODE" />
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

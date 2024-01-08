import { Header, Footer } from "./components/";
import { Home, Courses, Reviews, Contact } from "./pages/";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <main>
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

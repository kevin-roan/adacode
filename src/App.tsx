import { Header, Footer } from "./components/";
import { Home, Courses, Reviews } from "./pages/";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Courses />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

export default App;

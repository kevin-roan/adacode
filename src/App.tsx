import { Header, MiniHeader } from "./components/";
import { Home, Courses, Reviews } from "./pages/";
import "./styles/app.scss";

function App() {
  return (
    <>
      <MiniHeader />
      <Header />
      <main>
        <Home />
        <Courses />
        <Reviews />
      </main>
    </>
  );
}

export default App;

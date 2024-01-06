import { Header, MiniHeader } from "./components/";
import { Home, Courses } from "./pages/";
import "./styles/app.scss";

function App() {
  return (
    <>
      <MiniHeader />
      <Header />
      <main>
        <Home />
        <Courses />
      </main>
    </>
  );
}

export default App;

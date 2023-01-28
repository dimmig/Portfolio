import { Header } from "./elements/Header";
import { About } from "./elements/About";
import { Projects } from "./elements/Projects";
import { Faq } from "./elements/Faq";
import "./assets/styles/index.css";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Faq />
    </>
  );
}

export default App;

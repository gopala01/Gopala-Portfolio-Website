import "./App.css";
import Header from "./sections/Header/Header";
import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";
import Home from "./sections/Home/Home";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;

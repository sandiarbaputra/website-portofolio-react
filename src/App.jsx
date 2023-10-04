import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Portofolio></Portofolio>
        <Contact></Contact>
      </main>
      {/* <BackToTop></BackToTop> */}
      <Footer></Footer>
    </>
  );
}

export default App;

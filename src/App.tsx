import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;

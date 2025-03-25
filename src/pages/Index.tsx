
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Add ready class to body after a short delay to allow animations to work properly
    const timer = setTimeout(() => {
      document.querySelector(".no-fouc")?.classList.add("is-ready");
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <div className="no-fouc">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;

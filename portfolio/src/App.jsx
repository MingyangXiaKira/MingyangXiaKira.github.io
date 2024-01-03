import "./app.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/portfolio";
import Section from "./components/Section/Section";
import Works from "./components/Works/Works";
import React, { useRef } from "react";

const App = () => {
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);
  const refs = {
    contactRef: contactRef,
    worksRef: worksRef,
  };
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero refs={refs} />
        <Section />
      </section>
      <section ref={worksRef} id="Portfolio">
        <Parallax type="services" id="Projects" />
        <Section />
      </section>
      <Portfolio />
      <section>
        <Parallax type="others" />
        <Section />
      </section>
      <Works />

      <section ref={contactRef} id="Contact">
        <Contact />
        <Section />
      </section>
    </div>
  );
};

export default App;

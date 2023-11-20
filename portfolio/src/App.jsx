import "./app.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/portfolio";
import Section from "./components/Section/Section";
import Works from "./components/Works/works";
const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
        <Section />
      </section>
      <section>
        <Parallax type="services" />
        <Section />
      </section>
      <Portfolio />
      <section>
        <Parallax type="others" />
        <Section />
      </section>
      <Works />

      <section>
        <Contact />
        <Section />
      </section>
    </div>
  );
};

export default App;

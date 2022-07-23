import { Fragment } from "react";
import Container from "./UI/Container";
import Header from "./components/Header";

import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import SectionRibbonTitle from "./UI/SectionRibbonTitle";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio />

      <section className="bg-black">
        <Container>
          <div class="flex flex-col items-center justify-center pr-20">
            <SectionRibbonTitle className="theme-gradient-5">
              Education & Experience
            </SectionRibbonTitle>
            <h2 className="text-5xl mb-5 text-white">
              My Resume
            </h2>
          </div>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
}

export default App;

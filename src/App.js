import { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Resume />
      <Footer />
    </Fragment>
  );
}

export default App;

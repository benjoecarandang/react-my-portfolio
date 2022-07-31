import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import { Routes, Route } from "react-router-dom";
import PortfolioDetails from "./components/Portfolio/PortfolioDetails";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Portfolio />
              <Resume />
            </>
          }
        />

        <Route path="/portfolio/:id" element={<PortfolioDetails/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

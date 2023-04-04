import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer, PortfolioDetails } from "./index";

const Hero = lazy(() =>
  import("./index").then((module) => ({ default: module.Hero }))
);
const AboutMe = lazy(() =>
  import("./index").then((module) => ({ default: module.AboutMe }))
);
const Portfolio = lazy(() =>
  import("./index").then((module) => ({ default: module.Portfolio }))
);
const Resume = lazy(() =>
  import("./index").then((module) => ({ default: module.Resume }))
);
const Certificates = lazy(() =>
  import("./index").then((module) => ({ default: module.Certificates }))
);

const UnauthenticatedApp = () => {
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
              <Certificates />
            </>
          }
        />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default UnauthenticatedApp;

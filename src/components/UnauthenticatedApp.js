import { Routes, Route } from "react-router-dom";
import {
  Hero,
  Header,
  AboutMe,
  Portfolio,
  Resume,
  Certificates,
  Footer,
  PortfolioDetails
} from "./index";
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

import HeroBG from "./../images/parallax-hero-bg.png";
import Container from "../UI/Container";
import { Fragment } from "react";
import SectionRibbonTitle from "../UI/SectionRibbonTitle";

const AboutMe = (props) => {
  return (
    <Fragment>
      {/* <section className="theme-gradient-3 pb-0">
        <div
          className="absolute left-0 bottom-0 top-0 right-0 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${HeroBG})` }}
        ></div>
        <div className="relative z-10">
          <Container>
            <div className="flex flex-col items-center justify-center py-20">
              <h1 className="text-7xl mb-4 text-white">Hi, I'm Benjoe —</h1>
              <p className="text-5xl font-light text-white mb-14">
                a Full Stack Web Developer
              </p>
              <p className="text-white font-light text-2xl mb-10 text-center w-1/2 leading-9">
                “I think everyone makes a mistake at least once in their life.
                The important thing is what you learn from it.”
              </p>
              <div className="flex gap-10">
                <button className="w-48 bg-gradient-to-br from-green to-red hover:bg-gradient-to-bl px-7 py-4 rounded-full text-white font-bold uppercase shadow-sm">
                  Download CV
                </button>
                <button className="w-48 bg-gradient-to-br bg-neutral-100 text-black1 hover:bg-gradient-to-bl px-7 py-4 rounded-full text-white font-bold uppercase shadow-sm">
                  <a href="#about-me">Learn More</a>
                </button>
              </div>
            </div>
          </Container>
        </div>
        <div className="bottom-divider"></div>
      </section> */}

      <section className="mx-16 rounded-2xl bg-black1">
        <div>
          <Container>
            <div className="flex flex-col items-start justify-center py-20">
              <SectionRibbonTitle>Welcome</SectionRibbonTitle>
              <h1 className="text-6xl mb-2 text-white">I'm Benjoe —</h1>
              <p className="text-4xl font-light text-white mb-10">
                a Full Stack Web Developer
              </p>
              <p className="text-neutral-300 font-normal text-[1.25rem] mb-10 w-1/2 leading-7">
                “I think everyone makes a mistake at least once in their life.
                The important thing is what you learn from it.”
              </p>
              <div className="flex gap-4">
                <button className="w-48 bg-white px-7 py-4 rounded-full text-black font-bold shadow-sm">
                  Download CV
                </button>
                <button className="w-48 bg-black px-7 py-4 rounded-full text-white font-bold shadow-sm">
                  <a href="#about-me">Learn More</a>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutMe;
